import products from './mock/products_mock.json'

import createCategoryOptions from './categories/create-category-options'
import listPopularCategories from './categories/list-popular'
import setupProductLazyLoader from './products/lazy-loader'
import addProductToCart from './shopping-cart/add-product'
import setupProductFilter from './products/filter-products'

const $cartButton = document.getElementById('cart-button')
const $closeCartModalBtn = document.getElementById('close-cart-modal')
const $cartModal = document.getElementById('modal-cart')

;(() => {
  createCategoryOptions(products)
  listPopularCategories(products)
  setupProductLazyLoader(products)
  setupProductFilter()

  $cartButton.addEventListener('click', () =>
    $cartModal.classList.remove('hidden')
  )

  $closeCartModalBtn.addEventListener('click', () =>
    $cartModal.classList.add('hidden')
  )

  // Since the script is a module, it won't run on global scope, so I have to do this
  // for the "add to cart" buttons work lol
  window.storeProductInCart = addProductToCart
})()
