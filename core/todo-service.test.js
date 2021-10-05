const todoService = require('./todo-service').create();

test('return unique id', async () => {
  const id = todoService.getNewId();
  try {
    const found = await todoService.getItem(id);
    expect(!!found).toBe(false);
  } catch (error) {
    expect(error).toMatch("error");
  }
});
