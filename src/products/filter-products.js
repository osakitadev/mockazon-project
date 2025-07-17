import createPopup, { POPUP_TYPES } from '../ui/popup'

const $productFilter = document.querySelector('select')

export default function setupProductFilter() {
  const getFilteredProducts = () => {
    const filtered = []

    document.querySelectorAll('.product-card').forEach(product => {
      const { productCategory } = product.dataset
      const filter = $productFilter.value

      if (filter === 'all') return product.classList.remove('hidden')

      product.classList.toggle('hidden', filter !== productCategory)
    })

    return filtered
  }

  $productFilter.addEventListener('change', () => {
    getFilteredProducts()
    createPopup({ message: 'Filter applied!', type: POPUP_TYPES.normal })
  })
}
