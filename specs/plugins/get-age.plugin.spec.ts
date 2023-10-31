import { getAge } from '../../src/plugins/get-age.plugin';
describe('get-age.plugin.ts', () => {
    it('should return the age of a person', () => {
        const birthdate = '1985-10-21';
        const age = getAge(birthdate);

        expect(typeof age).toBe('number');
    });

    it('should return current age', () => {
        const birthdate = '1985-10-21';
        const age = getAge(birthdate);

        const calculatedAge = new Date().getFullYear() - new Date(birthdate).getFullYear();

        expect(age).toBe(calculatedAge);
    });

    it('should return 0 years', () => {
        const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValueOnce(1995);
        const birthdate = '1995-10-21';
        const age = getAge(birthdate);

        expect(age).toBe(0);
        expect(spy).toHaveBeenCalled();
    });

    it('should throw an error if birthdate is not provided', () => {
        expect(() => getAge('')).toThrow('birthdate is required');
    });
});
