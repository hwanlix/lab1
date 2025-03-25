const logoutRouting = (method, response) => {
    response.setHeader("Content-Type", "text/html");
    response.end(\`
        <html>
        <head><title>Shop – Logout</title></head>
        <body>
            <h1>Logout</h1>
            <nav>
                <a href="/">Home</a>
                <a href="/kill">Logout from application</a>
            </nav>
        </body>
        </html>
    \`);
};
module.exports = { logoutRouting };
