import { generateUUID } from '../../src/plugins/uuid.plugin';

describe('uuid.plugin.ts', () => {
    it('returns a UUID', () => {
        const uuid = generateUUID();

        expect(typeof uuid).toBe('string');
        expect(uuid.length).toBe(36);
        expect(uuid).toMatch(/^[a-f\d]{8}-([a-f\d]{4}-){3}[a-f\d]{12}$/i);
    });

    it('returns a UUID with 4 dashes', () => {
        const uuid = generateUUID();

        expect(uuid.split('-').length).toBe(5);
    })
});
