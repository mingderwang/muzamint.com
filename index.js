const dispatch = require('micro-route/dispatch')

module.exports = dispatch()
  .dispatch('*', 'OPTIONS', (req, res) => { return 'Ready!'} )
  .dispatch('/', ['GET'], (req, res) => { return {"home": "page"}} )
  .dispatch('/contact', 'GET', (req, res) => { return  { "name": "ming-der wang", "phone": "+886-968860662", "email": "mingderwang@gmail.com"  } } )
  .dispatch('/privacy', '*', (req, res, { params, query }) => { return  { "we never ask for your any data": true }} )
  .otherwise((req, res) => { return "404" } )
