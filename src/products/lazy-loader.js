import createProductCard from '../ui/product-card'

export default function setupProductLazyLoader(products) {
  const OPTIONS = {
    threshold: 1.0,
  }

  const consumeProducts = () => {
    products.slice(0, 9).forEach(product => createProductCard(product))
    products.splice(0, 9)
  }

  const lazyLoadProducts = (entries, observer) => {
    const lastProduct = entries[0]

    if (products.length === 0) return
    if (!lastProduct.isIntersecting) return

    consumeProducts()

    observer.unobserve(lastProduct.target)
    observer.observe(document.querySelector('.product-card:last-child'))
  }

  const lazyLoader = new IntersectionObserver(lazyLoadProducts, OPTIONS)

  consumeProducts() // Load the first 9 products

  lazyLoader.observe(document.querySelector('.product-card:last-child'))
}
