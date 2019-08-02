const { request } = require('../../test/testApi');

describe('Items Integration Tests', () => {
    describe('Given Items in the database', () => {
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

        xdescribe('When adding an item', () => {
            it('Then it should return the new item', () => {
                const query = `{
                    items {
                        id
                        name
                    }
                }`;
                const mutation = `{
                    mutation AddItems {
                        addItem(name: "Soy Sauce") {
                            id
                            name
                        }
                    }
                }`;
                return request()
                    .post('/graphql')
                    .set('Content-Type', 'application/json')
                    .set('Accept', 'application/json')
                    .send({ query: mutation })
                    .then((response) => {
                        console.log(response.error);
                        console.log(response.body);
                        const actual = response.body.data;
                        expect(actual).toBeTruthy();
                    });
            });
        });
    });
});