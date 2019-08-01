const bunyan = require('bunyan');
const { name } =  require('../package.json');
const logLevels = {
    DEBUG: 20,
    FATAL: 60,
    INFO: 30
};
let log;
function getLogger() {
    if (!log) log = bunyan.createLogger({
        level: process.env.NODE_ENV === 'test' ? logLevels.FATAL : logLevels.DEBUG,
        name,
    });
    return log;
}
module.exports = (getLogger)();