const helloController = require('./hello-controller').create();

test('returns hello', () => {
  // expect(helloController.hello()).toBe('Hello');
  expect(helloController.hello()).toEqual('Hello');
});

test('returns hello (name)', () => {
  expect(helloController.hello('Alice')).toEqual('Hello Alice');
});