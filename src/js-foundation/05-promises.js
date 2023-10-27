const { httpClient: { get } } = require("./../plugins");

const getPokemonById = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    const response = await get(url);
    return response;
};

module.exports = { getPokemonById };
