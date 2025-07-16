import './style.css'
import products from './mock/products_mock.json'

const $productCategoryFilter = document.getElementById('product-filter')
const $popularCategoriesNav = document.getElementById('popular-categories-nav')
const $productList = document.getElementById('product-list')

;(function () {
  function createCategoryFilterOptions() {
    const categories = new Set()

    products.forEach(({ category }) => {
      categories.add(category)
    })

    categories.forEach(category => {
      $productCategoryFilter.insertAdjacentHTML(
        'beforeend',
        `<option value="${category
          .toLowerCase()
          .replaceAll(' ', '')}">${category}</option>`
      )
    })
  }

  // I filter the popular categories by how often they appear in the products
  function showPopularCategories() {
    const categoriesCount = {}

    products.forEach(({ category }) => {
      categoriesCount[category] ??= 0
      categoriesCount[category]++
    })

    const unsortedCategories = Object.entries(categoriesCount)
    // I want only 5 popular categories to be shown!
    const sortedCategories = unsortedCategories
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(category => category[0])

    sortedCategories.forEach(categoryName => {
      $popularCategoriesNav.insertAdjacentHTML(
        'beforeend',
        `<button>${categoryName}</button>`
      )
    })
  }

  createCategoryFilterOptions()
  showPopularCategories()
})()
;(function () {
  const pendingProducts = products

  function createProductComponent({ price, category, description, stock }) {
    const priceWhole = String(price).split('.')[0]
    const priceFraction = String(price).split('.')[1]

    $productList.insertAdjacentHTML(
      'beforeend',
      `
        <div
          class="product-card flex flex-col w-full shadow-sm h-full fade-in"
        >
          <section
            class="product-image-wrapper bg-[#f7f7f7] relative px-2 w-ful"
          >
            <img
              src="https://dummyimage.com/150x150.png/dedede/000000"
              alt="Image of the product"
              class="w-full h-full"
            />
          </section>

          <p class="text-[#4b4e4e] text-[14px] font-medium px-2 mt-2 mb-1">
          [${category}]
          </p>

          <p class="text-[#0f1111] text-[16px] font-medium px-2 mt-2 mb-4">
          ${description}
          </p>

          <section class="product-info px-4 mb-4 mt-auto">
            ${stock ? '' : '<p class="text-red-500 font-bold">NO STOCK</p>'}
            <div class="flex items-center justify-between">
              <div class="flex">
                <span class="text-[13px] top-[0.2em] relative">US$</span>
                <span class="font-medium text-3xl">${priceWhole}</span>
                <span class="text-[13px] top-[0.2em] relative">${
                  priceFraction ?? '00'
                }</span>
              </div>

            </div>

            <button
              class="bg-[#ffce12] px-6 py-1 rounded-full mt-2 text-sm hover:cursor-pointer"
            >
              Add to cart
            </button>
          </section>
        </div>
      `
    )
  }

  function consumeProductsAndRender() {
    pendingProducts
      .slice(0, 9)
      .forEach(product => createProductComponent(product))
    pendingProducts.splice(0, 9)
  }

  // Preload the first products
  consumeProductsAndRender()

  const lazyLoadObserver = new IntersectionObserver(
    (entries, observer) => {
      const lastProduct = entries[0]

      if (pendingProducts.length === 0) return
      if (!lastProduct.isIntersecting) return

      consumeProductsAndRender()
      observer.unobserve(lastProduct.target)
      lazyLoadObserver.observe(
        document.querySelector('.product-card:last-child')
      )
    },
    { threshold: 1 }
  )

  lazyLoadObserver.observe(document.querySelector('.product-card:last-child'))
})()
