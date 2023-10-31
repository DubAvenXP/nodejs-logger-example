import { characters } from '../../src/js-foundation/02-destructuring';

describe('02-destructuring.ts', () => {
    it('characters should contain Obi-Wan, Luke', () => {
        expect(characters).toContain('Obi-Wan');
        expect(characters).toContain('Luke');
    });

    it('should have the correct order', () => {
        const [first, second, third, fourth] = characters;

        expect(first).toBe('Obi-Wan');
        expect(second).toBe('Vader');
        expect(third).toBe('Yoda');
        expect(fourth).toBe('Luke');
    });
});
