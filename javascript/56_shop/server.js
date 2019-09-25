const express = require('express');
const randomstring = require('randomstring');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();

// default options
app.use('/', express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req, res) {
    return res.send({ minishop: '1.0' });
});

app.post('/product', function(req, res) {
    if (!req.body.name || !req.body.description || !req.body.price || !req.body.imgurl || !req.body.category)
        return res.status(400).send({error: 'name, description, price, category and imgurl needed'});

    fs.readFile(__dirname + '/public/products.json', function(err, data) {
        if(err) return res.send({ error: err });
        
        var products = null;
        try { products = JSON.parse(data); }
        catch(e) {
            return res.send({ error: e.toString() });
        }

        if(!Array.isArray(products)) {
            return res.send({error: 'products json is invalid'});
        }

        let newProduct = req.body;
        newProduct.id = randomstring.generate(20);
        products.push(newProduct);

        let strProducts = null;
        try {
            strProducts = JSON.stringify(products);
        }
        catch(e) {
            return res.send({ error: e });
        }

        fs.writeFile(__dirname + '/public/products.json', strProducts, function(err) {
            if(err) return res.send({ error: err });
            return res.send({ error: 0, products: products });
        })
    });
});

app.put('/product/:productid', function(req, res) {
    if(!req.body.name && !req.body.description && !req.body.price && !req.body.imgurl && !req.body.category) {
        return res.send({ error: 'name, description, price, imgurl or category required' });
    }
    
    fs.readFile(__dirname + '/public/products.json', function(err, data) {
        var images = null;
        try {
            products = JSON.parse( data );
        }
        catch(e) {
            return res.send({error: e});
        }

        let changed = false;
        for(let i=0; i<products.length; i++) {
            if(products[i].id === req.params.productid) {
                for(var key in req.body) {
                  products[i][key] = req.body[key];
                }                
                changed = true;
                break;
            }
        }

        if(changed) {
            let strProducts = JSON.stringify(products);
            fs.writeFile(__dirname + '/public/products.json', strProducts, function(err) {
                return res.send({ error: 0 });
            });        
        }
        else {
            return res.send({ error: 'product not found' });
        }
    });
});

app.delete('/product/:productid', function(req, res) {
    if(!req.params.productid) {
        return res.send({ error: 'productid required' });
    }

    fs.readFile(__dirname + '/public/products.json', function(err, data) {
        var products = null;
        try { products = JSON.parse(data); }
        catch(e) {
            return res.send({ error: e });
        }

        let product = null;
        for(let i=0; i<products.length; i++) {
            if(products[i].id === req.params.productid) {
                product = products[i];
                products.splice(i, 1);
                break;
            }
        }

        if(!product) return res.send({ error: 'product not found' });
        let strProducts = JSON.stringify(products);
        fs.writeFile(__dirname + '/public/products.json', strProducts, function(err) {
            if(err) {
                return res.send({ error: err});
            }
            
            return res.send({ error: 0 });
        });
    });
});

app.get('/product', function(req, res) {
    fs.readFile(__dirname + '/public/products.json', function(err, data) {
        if(err) return res.send({ error: err });

        let products = null;
        try {
            products = JSON.parse(data);
        }
        catch(err) {
            return res.send({ error: err.toString() });
        }

        if(req.query.category) {
            let category = req.query.category;
            let resultProducts = [];
            
            for(let i=0; i<products.length; i++) {
                if(products[i].category === category) {
                    resultProducts.push( products[i] );
                }
            }
            return res.send({ error: 0, products: resultProducts });
        }
        else {
            return res.send({ error: 0, products: products });
        }
    });
});

app.post('/order', function(req, res) {
  if (!req.body.productids)
      return res.status(400).send({error: 'productids required'});

  if(!Array.isArray(req.body.productids)) {
      return res.send({ error: 'productids not a proper array' });
  }

  fs.readFile(__dirname + '/public/orders.json', function(err, data) {
      if(err) return res.send({ error: err });
      
      var orders = null;
      try { orders = JSON.parse(data); }
      catch(e) {
          return res.send({error: e.toString()});
      }

      if(!Array.isArray(req.body.productids)) {
          return res.send({ error: 'orders json is invalid/ not a proper array' });
      }

      newOrderId = randomstring.generate(20);
      let newOrder = {
          productids: req.body.productids,
          id: newOrderId,
          date: new Date().toLocaleString()
      };

      orders.push(newOrder);

      let strOrders = null;
      try {
          strOrders = JSON.stringify(orders);
      }
      catch(e) {
          return res.send({ error: e });
      }

      fs.writeFile(__dirname + '/public/orders.json', strOrders, function(err) {
          if(err) return res.send({ error: err });

          return res.send({ error: 0, orders: orders });
      })
  });
});

app.get('/order', function(req, res) {
  fs.readFile(__dirname + '/public/orders.json', function(err, data) {
      if(err) return res.send({ error: err });

      let orders = null;
      try {
          orders = JSON.parse(data);
      }
      catch(err) {
          return res.send({ error: err.toString() });
      }

      return res.send({ error: 0, orders: orders });
  });
});

console.log('started shop server.');
app.listen( 3000 );
