const getAge = require('./get-age.plugin');
const uuid = require('./uuid.plugin');
const httpClient = require('./http-client.plugin');
const buildLogger = require('./logger.plugin');

module.exports = {
    ...getAge,
    ...uuid,
    ...httpClient,
    buildLogger,
}
