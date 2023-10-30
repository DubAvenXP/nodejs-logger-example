const { getAge, generateUUID, buildLogger } = require('./plugins')

// const { emailTemplate } = require("./js-foundation/01-template");
// require("./js-foundation/02-destructuring");
// const { getUserById } = require("./js-foundation/03-callbacks");
// const { buildMakePerson } = require("./js-foundation/04-factory");
const { getPokemonById } = require("./js-foundation/05-promises");

// getUserById(10, (error, user) => {
//     if (error) throw new Error(error);

//     console.log(user);
// })

// const obj = { name: "Alice", birthdate: "01/01/2000" };
// const makePerson = buildMakePerson({ generateUUID, getAge });
// const person = makePerson(obj);
// console.log(person);

const logger = buildLogger('app.js');

logger.log('Hello world!');
logger.error('This is an error')

// getPokemonById(7)
//     .then((pokemon) => {
//         console.log({
//             id: pokemon.id,
//             name: pokemon.name,
//             height: pokemon.height,
//             weight: pokemon.weight,
//             abilities: pokemon.abilities.map((ability) => ability.ability.name),
//             types: pokemon.types.map((type) => type.type.name),
//         });
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log("Done!");
//     });

