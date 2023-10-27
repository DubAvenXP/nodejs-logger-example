const getAge = require('./get-age.plugin');
const uuid = require('./uuid.plugin');

module.exports = {
    ...getAge,
    ...uuid
}
