const $popups = document.getElementById('popups')

export const POPUP_MESSAGES = {
  NoStockItem: 'This item has no stock',
  RemovedCart: 'Removed from cart',
  AddedCart: 'Added to cart',
}

export const POPUP_TYPES = {
  error: 'error',
  normal: 'normal',
}

export default function createPopup({ message, type = 'normal' }) {
  const popupElement = document.createElement('div')
  popupElement.textContent = message
  popupElement.classList.add(
    `bg-${type === POPUP_TYPES.normal ? 'blue' : 'red'}-500`,
    'px-2',
    'text-white',
    'font-semibold',
    'rounded-sm'
  )

  $popups.appendChild(popupElement)

  setTimeout(() => popupElement.remove(), 3000)
}
