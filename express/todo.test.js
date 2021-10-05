const request = require('supertest');
const app = require('./app');

describe('Test /todo', () => {
  test('response GET', async () => {
    const response = await request(app).get('/todo');
    expect(response.statusCode).toBe(200);
  });

  test('response todo', async () => {
    const response = await request(app).get('/todo');
    expect(response.text).toEqual('To Do');
  });
  
  test('get items', async () => {
    const response = await request(app).get('/todo/items');
    const items = JSON.parse(response.text);
    expect(Array.isArray(items)).toBe(true);
  });
  
  test('post item', async () => {
    let response = await request(app).post("/todo/items")
      .send({
        text: "from app test",
      });
    const newItem = JSON.parse(response.text);

    response = await request(app).get(`/todo/items/${newItem.id}`);
    const item = JSON.parse(response.text);
    expect(item.id == newItem.id).toBe(true);
  });
  
});