import { getPokemonNameById } from '../../src/js-foundation/06-promises';


describe('Test in 06-promises.ts', () => {
  test('getPokemonNameById should return a pokemon', async () => {
    const pokemonId = 1;
    const pokemonName = await getPokemonNameById(pokemonId);
    expect(pokemonName).toBe('bulbasaur');
  });

  test('getPokemonNameById should return an error if pokemon does not exist', async () => {
    const pokemonId = 1000000;
    try {
      await getPokemonNameById(pokemonId);
      expect(true).toBeFalsy();
    } catch (error) {
      expect(error).toBe(`Pokemon not found with id ${pokemonId}`);
    }
  });
});
