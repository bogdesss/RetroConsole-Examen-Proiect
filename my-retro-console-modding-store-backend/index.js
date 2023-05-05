const express = require('express');
const cors = require('cors');

const app = express();

let nintendoProducts = require('./nintendodb');
let gameboyProducts = require('./gameboydb');
let nesProducts = require('./nesdb');


app.use('/img', express.static(__dirname + '/img'));


app.get('/products/nintendo', (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*'); // Set the 'Access-Control-Allow-Origin' header
    res.setHeader('Content-Type', 'application/json'); 
    res.json(nintendoProducts);
});

app.get('/products/gameboy', (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*'); // Set the 'Access-Control-Allow-Origin' header
    res.setHeader('Content-Type', 'application/json'); 
    res.json(gameboyProducts);
});
app.get('/products/nes', (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*'); // Set the 'Access-Control-Allow-Origin' header
    res.setHeader('Content-Type', 'application/json'); 
    res.json(nesProducts);
});

app.get('/products/all', (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*'); // Set the 'Access-Control-Allow-Origin' header
    res.setHeader('Content-Type', 'application/json'); 
    res.json(nintendoProducts.concat(nesProducts).concat(gameboyProducts));
});
app.get('/orders', (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*'); // Set the 'Access-Control-Allow-Origin' header
    res.setHeader('Content-Type', 'application/json'); 
    res.json(orders);
});


app.options('*', cors({
	"origin": "*",
	"methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
	"preflightContinue": false,
	"optionsSuccessStatus": 204
}));

app.listen(3001, () => {
  console.log('Server listening on port 3001!');
});

