const getAgeLib = require('get-age');

const getAge = (birthdate) => {
    if (!birthdate) { throw new Error('birthdate is required'); }

    return getAgeLib(birthdate);
}

module.exports = { getAge };
