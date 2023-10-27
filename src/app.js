// const { getAge, generateUUID } = require('./plugins')

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

getPokemonById(7).then((pokemon) => {
    console.log({
        name: pokemon.name,
        id: pokemon.id,
        height: pokemon.height,
        weight: pokemon.weight,
        abilities: pokemon.abilities.map((ability) => ability.ability.name),
        types: pokemon.types.map((type) => type.type.name),
    });
});
