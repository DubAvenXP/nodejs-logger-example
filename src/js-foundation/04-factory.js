
const buildMakePerson = ({ generateUUID, getAge }) => {
    return ({ name, birthdate }) => {
        return {
            id: generateUUID(),
            name,
            birthdate,
            age: getAge(birthdate)
        };
    };
};

module.exports = { buildMakePerson };
