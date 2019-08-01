const { request } = require('./test/testApi');

describe('API Integration Tests', () => {

    describe('Positive Tests', () => {
        describe('Given a call to the graphql endpoint', () => {
            it('Then it should return a successful response', () => {
                const query = '{ hello }';
                return request()
                    .post('/graphql')
                    .send({ query })
                    .then((response) => {
                        expect(response.statusCode).toBe(200);
                    });
            });
        });
    });

    describe('Negative Tests', () => {
        describe('Given a call to the root endpoint', () => {
            it('Then it should return a 404', () => {
                return request()
                    .get('/')
                    .then((response) => {
                        expect(response.statusCode).toBe(404);
                    });
            });
        });
    });
});