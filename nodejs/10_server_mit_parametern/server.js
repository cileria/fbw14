const express = require('express');
const app = express();

app.get('/', (req, res) => {
    return res.send('server mit parametern');
});

// nach /hallo bis zum nächsten / ist alles in
// req.params.name gespeichert
app.get('/hallo/:name', (req, res) => {
    return res.send(`
        Hi ${req.params.name}
    `);
});

const products = [
    { id: 1001, name: 'Geforce GTX 1050 TI', price: 150 },
    { id: 1002, name: 'Geforce GTX 1080 TI', price: 190 },
    { id: 1003, name: 'Geforce GT 730', price: 30 },
    { id: 1004, name: 'Vodoo 1', price: 1 },
    { id: 1005, name: 'HP NVIDIA Quadro GV100', price: 17000 }
];

// Aufgabe:
//
// 1) Erstelle eine neue Route /products, die alle Produkte
//    als HTML-Tabelle ausgibt.
app.get('/products', (req, res) => {
    let strProducts = '';
    for(let i=0; i<products.length;i++) {
        strProducts += `
            <tr>
                <td>${products[i].id}</td>
                <td>${products[i].name}</td>
                <td>${products[i].price}</td>
            </tr>
        `;
    }
    return res.send(
        `
            <table>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Price</td>
                </tr>
                ${strProducts}        
            </table>
        `
    );
});

// 2) Erstelle eine neue Route /productdetail, die ein Parameter
//    id erwartet. Auf Basis der id, wird dem Besucher der Webseite
//    alles zum Produkt ausgegeben als String.

app.get('/productdetail/:id', (req, res) => {
    for(product of products) {
        if(product.id == req.params.id) {
            return res.send(`${product.id}, ${product.name}, ${product.price}`);
        }
    }
    return res.send('Product ID not found!');
});

app.listen(3000);