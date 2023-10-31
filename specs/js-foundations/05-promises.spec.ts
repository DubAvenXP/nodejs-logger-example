import { getPokemonById } from '../../src/js-foundation/05-promises';

describe('05-promises.ts', () => {
    describe('#getPokemonById', () => {
        it('should return a pokemon', async () => {
            const pokemonId = 1;
            const pokemon = await getPokemonById(pokemonId); // it makes an API call

            expect(pokemon.name).toBe('bulbasaur');
        })

        it('should throw an error when pokemon is not found', async () => {
            const pokemonId = 1000000;
            try {
                const pokemon = await getPokemonById(pokemonId);
                expect(pokemon).toBeUndefined();
            } catch (err) {
                expect(err).toBe(`Pokemon with id: ${pokemonId} not found`);
            }
        })
    });
});
