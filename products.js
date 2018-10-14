const Products = {
  async create (Moltin, product = {}) {
    try {
      await Moltin.Products.Create(product)
    } catch (err) {
      console.error(err)
    }
  }
}

module.exports = Products
