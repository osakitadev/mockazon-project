import createPopup, { POPUP_TYPES, POPUP_MESSAGES } from '../ui/popup.js'
import createCartProductCard from '../ui/cart-product-card.js'
import updateCartProductsCount from './update-product-count.js'

export default function addProductToCart() {
  const product = this.closest('.product-card')

  const { productPriceWhole } = product.dataset

  if (productPriceWhole === '0') {
    createPopup({
      message: POPUP_MESSAGES.NoStockItem,
      type: POPUP_TYPES.error,
    })
    return
  }

  createCartProductCard(product.dataset)
  updateCartProductsCount()
  createPopup({ message: POPUP_MESSAGES.AddedCart, type: POPUP_TYPES.normal })
}
