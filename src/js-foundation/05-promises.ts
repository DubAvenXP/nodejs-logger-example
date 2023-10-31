import { httpClient } from "./../plugins";
import { Pokemon } from "./../interfaces/pokemon";
const { get } = httpClient;

export const getPokemonById = async (id: number) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    const response = await get<Pokemon>(url);
    return response;
};


