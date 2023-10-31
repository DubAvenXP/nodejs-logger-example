import { buildMakePerson } from '../../src/js-foundation/04-factory';

describe('04-factory.ts', () => {
    const generateUUID = () => '1234';
    const getAge = () => 10;

    describe('#buildMakePerson', () => {
        it('should return a function', () => {
            const makePerson = buildMakePerson({ generateUUID, getAge });
            expect(typeof makePerson).toBe('function');
        });

        it('should return a function that returns a person object', () => {
            const makePerson = buildMakePerson({ generateUUID, getAge });
            const person = makePerson({
                name: 'Alice',
                birthdate: '2000-01-01',
            });
            expect(person).toEqual({
                id: '1234',
                age: 10,
                birthdate: '2000-01-01',
                name: 'Alice',
            });
        });
    });
});
