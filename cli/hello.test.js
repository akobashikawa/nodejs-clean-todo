const app = require('./app');

describe('Test /hello', () => {
  test('response hello', () => {
    const response = app.main(['hello', 'hello']);
    expect(response).toEqual('Hello');
  });
  
  test('response hello', () => {
    const response = app.main(['hello', 'hello', 'Alice']);
    expect(response).toEqual('Hello Alice');
  });
  
});