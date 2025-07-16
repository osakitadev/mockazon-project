const $popularCategoriesNav = document.getElementById('popular-categories-nav')

// I filter the popular categories by how often they appear in the products
export default function listPopularCategories(products) {
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
