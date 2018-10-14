const Moltin = require('./login')
const Products = require('./products')
const Parser = require('./parser')

// Products.create(Moltin, {
//   name: 'Deck Shoe',
//   slug: 'deck-shoe',
//   sku: 'deck-shoe-001',
//   description: 'A product for testing purposes',
//   manage_stock: true,
//   price: [
//     {
//       amount: 5891,
//       currency: 'USD',
//       includes_tax: true
//     }
//   ],
//   status: 'live',
//   commodity_type: 'physical'
// })

const getParse = async () => {
  const parseResult = await Parser.parse("https://tlgrm.ru/stickers/Baphomethessa")
  console.log({parseResult})
  return parseResult
}

getParse()
