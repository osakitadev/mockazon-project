const $productList = document.getElementById('product-list')

export default function createProductCard({
  description,
  price,
  category,
  stock,
  name,
}) {
  const priceWhole = String(price).split('.')[0]
  const priceFraction = String(price).split('.')[1]
  const categoryAttribute = category.replaceAll(' ', '').toLowerCase()

  $productList.insertAdjacentHTML(
    'beforeend',
    `
          <div
            class="product-card flex flex-col w-full shadow-sm h-full fade-in"
            data-product-price-whole="${priceWhole ?? 0}"
            data-product-price-fraction="${priceFraction ?? 0}"
            data-product-description="${description}"
            data-product-category="${categoryAttribute}"
          >
            <section
              class="product-image-wrapper bg-[#f7f7f7] relative px-2 w-ful"
            >
              <img
                src="https://dummyimage.com/150x150.png/dedede/000000"
                alt="Image of ${name}"
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
                    priceFraction?.padEnd(2, '0') ?? '00'
                  }</span>
                </div>
  
              </div>
  
              <button
                class="bg-[#ffce12] px-6 py-1 rounded-full mt-2 text-sm hover:cursor-pointer"
                onclick="storeProductInCart.call(this)"
              >
                Add to cart
              </button>
            </section>
          </div>
        `
  )
}
