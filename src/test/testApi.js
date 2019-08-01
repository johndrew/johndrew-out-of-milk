const request = require('supertest');
const createApp = require('../app');

let app;
function apiRequest() {
    if (!app) app = createApp();
    return request(app);
}

module.exports = {
    request: apiRequest,
};