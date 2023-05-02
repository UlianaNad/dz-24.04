const express = require('express');

const router = express.Router();

const products = require('./products');

router.get('/products', (req, res) => {
    res.render('page');
    //console.log(req.params.id)
});

router.get('/products/:id', (req, res) => {
    //console.log(req.query, req.params.id)
    res.render('page');
    console.log(req.params.id)
}); 

router.get('/prod/list', (req,res) =>{
    let data = products.items;
    //console.log(data);
    console.log(req.params.name)
    if(req.query.price === 'min') {
        data.sort((a, b) => a.price - b.price);
        //console.log('min', data)
    }
    if(req.query.price === 'max') {
        data.sort((a, b) => b.price - a.price);
        //console.log('max', data)
    }
    

    res.json(data);
});

module.exports = router;