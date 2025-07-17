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

const COLOR_MAP = {
  [POPUP_TYPES.normal]: 'bg-blue-500',
  [POPUP_TYPES.error]: 'bg-red-500',
}

export default function createPopup({ message, type = 'normal' }) {
  const popupElement = document.createElement('div')
  popupElement.textContent = message
  popupElement.classList.add(
    COLOR_MAP[type],
    'px-2',
    'text-white',
    'font-semibold',
    'rounded-sm',
    'w-full'
  )

  $popups.appendChild(popupElement)

  setTimeout(() => popupElement.remove(), 3000)
}
