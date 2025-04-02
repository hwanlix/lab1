const fs = require('fs').promises;
const path = require('path');

async function renderNewProductPage(data) {
    let productData = '';
    if (data) {
        productData = `<p>${data}</p>`;
    } else {
        productData = '<p>No products available</p>';
    }

    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Newest Product</title>
        </head>
        <body>
            <h1>Newest Product</h1>
            ${productData}
        </body>
        </html>
    `;
}

module.exports = renderNewProductPage;
