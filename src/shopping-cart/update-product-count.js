const $productsCount = document.getElementById('products-in-cart')

export default function updateCartProductsCount() {
  $productsCount.textContent =
    document.querySelectorAll('.product-in-cart').length
}
