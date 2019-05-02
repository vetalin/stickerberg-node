const Products = require('./products')
const Firebase = require('./login')
const Parser = require('./parser')

const TelegramGrabber = {
  createFromList (list) {
    const http = 'https://tlgrm.ru/stickers/'
  }
}

const getParse = async () => {
  return await Parser.parse("https://tlgrm.ru/stickers/AdventureStickers")
}

const listToParse = []


const productsPaste = async () => {
  await Products.create(Firebase, {
    productTitle: 'test',
    productName: 'test',
    productImage: 'test',
    productId: 'test',
    productBody: 'test',
    productDescription: 'test'
  })
}
productsPaste()

