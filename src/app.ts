import { getAge, generateUUID, buildLogger } from './plugins'

import { Pokemon, Ability, Type } from './interfaces/pokemon';
// const { emailTemplate } = require("./js-foundation/01-template");
// require("./js-foundation/02-destructuring");
// const { getUserById } = require("./js-foundation/03-callbacks");
import { buildMakePerson } from "./js-foundation/04-factory";
import { getPokemonById } from "./js-foundation/05-promises";

// getUserById(10, (error, user) => {
//     if (error) throw new Error(error);

//     console.log(user);
// })

const obj = { name: "Alice", birthdate: "01/01/2000" };
const makePerson = buildMakePerson({ generateUUID, getAge });
const person = makePerson(obj);
console.log(person);

const logger = buildLogger('app.js');
const formatPokemon = (pokemon: Pokemon) => {
    return {
        id: pokemon.id, name: pokemon.name, height: pokemon.height, weight: pokemon.weight,
        abilities: pokemon.abilities.map((ability: Ability) => ability.ability.name),
        types: pokemon.types.map((type: Type) => type.type.name),
    }
}

// logger.log('Hello world!');
// logger.error('This is an error')

getPokemonById(7)
    .then((pokemon: Pokemon) => { logger.log(formatPokemon(pokemon)); })
    .catch((error: any) => { logger.error(error); })
    .finally(() => { logger.log('Done!'); });


