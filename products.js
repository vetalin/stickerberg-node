const Products = {
  async create (Moltin, product = {}) {
    try {
      const result = await Moltin.Products.Create(product)
      console.log({result})
    } catch (err) {
      console.error(err)
    }
  }
}

module.exports = Products
