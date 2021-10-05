const request = require('supertest');
const app = require('./app');

describe('Test /hello', () => {
  test('response GET', async () => {
    const response = await request(app).get('/hello');
    expect(response.statusCode).toBe(200);
  });

  test('response hello', async () => {
    const response = await request(app).get('/hello');
    expect(response.text).toEqual('Hello');
  });
  
  test('response hello (name)', async () => {
    const response = await request(app).get('/hello?name=Alice');
    expect(response.text).toEqual('Hello Alice');
  });
});