const http = require("http");
const { PORT } = require("./config");
const { requestRouting } = require("./routing/routing");

const server = http.createServer(requestRouting);
server.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));
