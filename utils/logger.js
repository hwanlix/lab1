const logger = {
    info: (message) => {
        console.log(`INFO [${new Date()}]: ${message}`);
    },
    error: (message) => {
        console.error(`ERROR [${new Date()}]: ${message}`);
    },
    process: (message) => {
        console.log(`PROCESS [${new Date()}]: ${message}`);
    }
};

module.exports = logger;
