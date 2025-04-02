const { homeRouting } = require("./home");
const { productRouting } = require("./product");
const { logoutRouting } = require("./logout");
const { STATUS_CODE } = require("../constants/statusCode");

const requestRouting = (request, response) => {
    console.log(\`INFO [\${new Date()}]: \${request.method} – \${request.url}\`);

    if (request.url === "/") {
        return homeRouting(request.method, response);
    } else if (request.url.startsWith("/product")) {
        return productRouting(request, response);
    } else if (request.url === "/logout") {
        return logoutRouting(request.method, response);
    } else if (request.url === "/kill") {
        console.log(\`PROCESS [\${new Date()}]: logout initiated, application closing.\`);
        response.end("Server shutting down...");
        process.exit();
    } else {
        console.error(\`ERROR [\${new Date()}]: requested url \${request.url} doesn’t exist.\`);
        response.statusCode = STATUS_CODE.NOT_FOUND;
        response.end("404 Not Found");
    }
};

module.exports = { requestRouting };
