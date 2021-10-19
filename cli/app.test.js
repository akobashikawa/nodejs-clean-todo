const app = require("./app");

describe('Test', () => {
  let stdin;

  beforeEach(() => {
    stdin = require("mock-stdin").stdin();
  });

  test('main', async () => {
    process.nextTick(function mockResponse() {
      stdin.send("response");
    });
    const response = await app.main();
    expect(response).toBe('hello');
  });
});