const Products = {
  async create (Firebase, product = {}) {
    try {
      const db = Firebase.firestore()
      const collectionProducts = await db.collection('products')
      await collectionProducts.add(product)
    } catch (err) {
      console.error(err)
    }
  },
  async get (Firebase) {
    try {
      const db = Firebase.firestore()
      const products = await db.collection('products').get()
      products.forEach(product => console.log(product))
    } catch (e) {
      console.error(e)
    }
  }
}

module.exports = Products
