const request = require('supertest');
const app = require('./app');

describe('Test /', () => {
  // test('response GET', done => {// promises way
  //   request(app)
  //     .get('/')
  //     .then(response => {
  //       expect(response.statusCode).toBe(200);
  //       done();
  //     });
  // });
  test('response GET', async () => {// async/await way
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});