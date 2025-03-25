const fs = require("fs");
const { STATUS_CODE } = require("../constants/statusCode");

const renderAddProductPage = (response) => {
    response.setHeader("Content-Type", "text/html");
    response.end(\`
        <html>
        <head><title>Add Product</title></head>
        <body>
            <h1>Add a new product</h1>
            <form action="/product/add" method="POST">
                <input type="text" name="product" placeholder="Enter product name" required />
                <button type="submit">Add</button>
            </form>
        </body>
        </html>
    \`);
};

const renderNewProductPage = (response) => {
    fs.readFile("product.txt", "utf8", (err, data) => {
        response.setHeader("Content-Type", "text/html");
        if (err) {
            response.end("<html><body><h1>No products available</h1></body></html>");
        } else {
            response.end(\`
                <html>
                <head><title>Newest Product</title></head>
                <body>
                    <h1>Newest Product</h1>
                    <p>\${data}</p>
                </body>
                </html>
            \`);
        }
    });
};

const addNewProduct = (request, response) => {
    let body = "";
    request.on("data", (chunk) => body += chunk);
    request.on("end", () => {
        const product = decodeURIComponent(body.split("=")[1]);
        fs.writeFile("product.txt", product, () => {
            response.statusCode = STATUS_CODE.FOUND;
            response.setHeader("Location", "/product/new");
            response.end();
        });
    });
};

const productRouting = (request, response) => {
    if (request.url === "/product/add" && request.method === "GET") {
        return renderAddProductPage(response);
    } else if (request.url === "/product/add" && request.method === "POST") {
        return addNewProduct(request, response);
    } else if (request.url === "/product/new") {
        return renderNewProductPage(response);
    } else {
        response.statusCode = STATUS_CODE.NOT_FOUND;
        response.end("404 Not Found");
    }
};

module.exports = { productRouting };
