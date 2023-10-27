// const { emailTemplate } = require("./js-foundation/01-template");
// require("./js-foundation/02-destructuring");
// const { getUserById } = require("./js-foundation/03-callbacks");
const { getAge, generateUUID } = require('./plugins')
const { buildMakePerson } = require("./js-foundation/04-factory");


// getUserById(10, (error, user) => {
//     if (error) throw new Error(error);

//     console.log(user);
// })

const obj = { name: "Alice", birthdate: "01/01/2000" };
const makePerson = buildMakePerson({ generateUUID, getAge });
const person = makePerson(obj);
console.log(person);

