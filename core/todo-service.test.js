const todoService = require('./todo-service').create();

test('return unique id', async () => {
  expect.assertions(1);
  const id = todoService.getNewId();
  try {
    const found = await todoService.getItem(id);
    expect(!!found).toBe(false);
  } catch (error) {
    expect(error).toMatch("error");
  }
});

test("return items", async () => {
  expect.assertions(1);
  try {
    const items = await todoService.getItems();
    expect(Array.isArray(items)).toBe(true);
  } catch (error) {
    expect(error).toMatch("error");
  }
});

test("post item", async () => {
  expect.assertions(1);
  try {
    const newItem = await todoService.postItem({
      text: "from service test",
    });
    const item = await todoService.getItem(newItem.id);
    expect(!!item).toBe(true);
  } catch (error) {
    expect(error).toMatch("error");
  }
});

test("delete item", async () => {
  expect.assertions(1);
  try {
    const newItem = await todoService.postItem({
      text: "from service test",
    });
    await todoService.deleteItem(newItem.id);
    const item = await todoService.getItem(newItem.id);
    expect(!!item).toBe(false);
  } catch (error) {
    expect(error).toMatch("error");
  }
});

