const $cartProductList = document.getElementById('cart-list')

import updateCartProductsCount from '../shopping-cart/update-product-count.js'

export default function createCardProductCard({
  productDescription,
  productPriceWhole,
  productPriceFraction,
}) {
  function removeProduct() {
    console.log(this)

    this.closest('.product-in-cart').remove()
    updateCartProductsCount()
  }

  $cartProductList.insertAdjacentHTML(
    'beforeend',
    `
      <div class="w-full min-h-[120px] shadow-sm flex items-center product-in-cart">
        <img
          src="https://dummyimage.com/120x120.png/dedede/000000"
          alt="Image of the product"
        />

        <div class="flex flex-col px-2 gap-2 flex-1">
          <p>${productDescription}</p>
          <hr class="text-zinc-200" />
          <div class="flex justify-between items-center">
            <span class="relative flex">
              <span class="text-[13px] top-[0.2em] relative">US$</span>
              <span class="font-medium text-3xl">${productPriceWhole}</span>
              <span class="text-[13px] top-[0.2em] relative">${productPriceFraction}</span>
            </span>

            <button
              class="bg-red-400 px-6 py-0.5 rounded-full text-[16px] transition-colors hover:bg-red-500 hover:cursor-pointer"
              onclick="removeProduct.call(this)"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      `
  )

  window.removeProduct = removeProduct
}
