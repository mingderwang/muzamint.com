const dispatch = require('micro-route/dispatch')

module.exports = dispatch()
  .dispatch('*', 'OPTIONS', (req, res) => { return 'Ready!'} )
  .dispatch('/', ['GET'], (req, res) => { return {"home page": "We develop software for a better world.",
    
    "terms of use": [
      "This software are still under development. You must use on your own risk.",
      "You are responsible for your own actions.",
      "It is free to use.",
      "It is designed with no harm.",
      "It is an open source software, please feel free to contribute."
      ]
  }
  } )
  .dispatch('/contact', 'GET', (req, res) => { return  { "name": "ming-der wang", "phone": "+886-968860662", "email": "mingderwang@gmail.com"  } } )
  .dispatch('/privacy', '*', (req, res, { params, query }) => { return  { "we never ask for your any data": true }} )
  .dispatch('/terms', '*', (req, res, { params, query }) => { return  { "use on your own risk": true }} )
  .otherwise((req, res) => { return "404" } )
