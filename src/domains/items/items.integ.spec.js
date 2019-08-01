const { request } = require('../../test/testApi');

describe('Items Integration Tests', () => {
    describe('Given Items in the databse', () => {
        describe('When all items are queried', () => {
            it('Then it should return them', async () => {
                const query = `{
                    items {
                        id
                        name
                    }
                }`;
                return request()
                    .post('/graphql')
                    .send({ query })
                    .then((response) => {
                        const actual = response.body.data.items;
                        expect(actual.length).toEqual(0);
                    });
            });
        });
    });
});