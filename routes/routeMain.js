const express = require('express');

const router = express.Router();

const products = require('./products');

router.get('/products', (req, res) => {
    res.render('page');
});

router.get('/products/:id', (req, res) => {
    let data = products.items;

    res.render('page');
    //console.log(req.query.price);

   
}); 

router.get('/prod/list', (req,res) =>{
   
    let data = products.items;
    console.log(req.query.price );

    if(req.query.price === 'minmax') {
        data.sort((a, b) => a.price - b.price);

    }
    if(req.query.price === 'maxmin') {
        data.sort((a, b) => b.price - a.price);
   
    }
    //console.log('data', data);
    
    res.json(data);
});

module.exports = router;