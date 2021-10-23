const shellMatchers = require('jest-shell-matchers');

beforeAll(() => {
  shellMatchers();
});

describe('Test', () => {
  test('response require route', async () => {
    await expect(['node', ['./cli.js']]).toHaveMatchingSpawnOutput(/Use a route/);
  });

  test('response require command', async () => {
    await expect(['node', ['./cli.js', 'hello']]).toHaveMatchingSpawnOutput(/Use a command/);
  });

  test('response Hello', async () => {
    await expect(['node', ['./cli.js', 'hello', 'hello']]).toHaveMatchingSpawnOutput(/^Hello/);
  });
});
