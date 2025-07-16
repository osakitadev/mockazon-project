const $productCategoryFilter = document.getElementById('product-filter')

export default function createCategoryOptions(products) {
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
