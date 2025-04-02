const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log(`PROCESS [${new Date()}]: logout initiated, application closing.`);
    res.send("Server shutting down...");
    process.exit();
});

module.exports = router;
