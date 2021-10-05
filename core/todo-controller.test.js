const todoService = require("./todo-service").create();
const todoController = require("./todo-controller").create({ todoService });

test("get items", () => {
  const items = todoController.getItems();
  expect(Array.isArray(items)).toBe(true);
});

test('post item', () => {
  const newItem = todoController.postItem({
    text: 'from test'
  });
  const item = todoController.getItem(newItem.id);
  expect(!!item).toBe(true);
});
