const MoltinGateway = require('@moltin/sdk').gateway

const Moltin = MoltinGateway({
  client_id: '6wHgaOUzFcrXG5tRbn0RVGSBYGy1Uwb5o28CC08CWG',
  client_secret: 'MoW3ERBp8r7h4fCIn1Pfr0PJZto6374FVSwltXkAP0'
})
console.log('done connect!')

module.exports = Moltin