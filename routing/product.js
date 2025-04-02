const express = require('express');
const path = require('path');
const fs = require('fs').promises;
const { STATUS_CODE } = require('../../statusCode');
const renderNewProductPage = require('../../views/renderNewProductPage');
const router = express.Router();

router.get('/add', (req, res) => {
    res.sendFile(path.join(__dirname, '../../views', 'add-product.html'));
});

router.post('/add', async (req, res) => {
    const product = req.body.product;
    try {
        await fs.writeFile('product.txt', product);
        res.statusCode = STATUS_CODE.FOUND;
        res.setHeader('Location', '/product/new');
        res.end();
    } catch (error) {
        console.error('Error writing to file:', error);
        res.status(500).send('Error saving product');
    }
});

router.get('/new', async (req, res) => {
    try {
        const data = await fs.readFile('product.txt', 'utf8');
        const html = await renderNewProductPage(data);
        res.send(html);
    } catch (error) {
        const html = await renderNewProductPage(null);
        res.send(html);
    }
});

module.exports = router;
