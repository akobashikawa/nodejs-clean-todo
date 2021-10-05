const todoService = require('./todo-service').create();

test('return unique id', () => {
  const id = todoService.getNewId();
  const found = todoService.getItem(id);
  expect(!!found).toBe(false);
});
