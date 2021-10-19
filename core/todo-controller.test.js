const todoService = require("./todo-service").create();
const todoController = require("./todo-controller").create({ todoService });

test("get items", async () => {
  expect.assertions(1);
  try {
    const items = await todoController.getItems();
    expect(Array.isArray(items)).toBe(true);
  } catch (error) {
    expect(error).toMatch('error');
  }
});

test('post item', async () => {
  expect.assertions(1);
  try {
    const newItem = await todoController.postItem({
      text: "from controller test",
    });
    const item = await todoController.getItem(newItem.id);
    expect(!!item).toBe(true);
  } catch (error) {
    expect(error).toMatch("error");
  }
});

test('delete item', async () => {
  expect.assertions(1);
  try {
    const newItem = await todoController.postItem({
      text: "from controller test",
    });
    await todoController.deleteItem(newItem.id);
    const item = await todoController.getItem(newItem.id);
    expect(!!item).toBe(false);
  } catch (error) {
    expect(error).toMatch("error");
  }
});
