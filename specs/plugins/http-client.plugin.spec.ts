import { httpClient } from '../../src/plugins/http-client.plugin';
describe('http-client.plugin.ts', () => {
    describe('#get', () => {
        it('should return data', async () => {
            const data = await httpClient.get('https://jsonplaceholder.typicode.com/todos/1');
            expect(data).toEqual({
                userId: 1,
                id: 1,
                title: 'delectus aut autem',
                completed: false
            });
        }, 10000);
    })

    describe('#post', () => {
        it('should return data', async () => {
            const data = await httpClient.post('https://jsonplaceholder.typicode.com/posts', {
                title: 'foo',
                body: 'bar',
                userId: 1
            });
            expect(data).toEqual({
                title: 'foo',
                body: 'bar',
                userId: 1,
                id: 101
            });
        }, 10000);
    });

    describe('#put', () => {
        it('should return data', async () => {
            const data = await httpClient.put('https://jsonplaceholder.typicode.com/posts/1', {
                id: 1,
                title: 'foo',
                body: 'bar',
                userId: 1
            });
            expect(data).toEqual({
                id: 1,
                title: 'foo',
                body: 'bar',
                userId: 1
            });
        }, 10000);
    });

    describe('#delete', () => {
        it('should return data', async () => {
            const data = await httpClient.delete('https://jsonplaceholder.typicode.com/posts/1');
            expect(data).toEqual({});
        }, 10000);
    });

    it('httpClientPlugin should have get, post, put, delete methods', () => {
        expect(httpClient).toHaveProperty('get');
        expect(httpClient.get).toBeInstanceOf(Function);

        expect(httpClient).toHaveProperty('post');
        expect(httpClient.post).toBeInstanceOf(Function);

        expect(httpClient).toHaveProperty('put');
        expect(httpClient.put).toBeInstanceOf(Function);

        expect(httpClient).toHaveProperty('delete');
        expect(httpClient.delete).toBeInstanceOf(Function);
    });
});
