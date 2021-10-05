# Clean To Do

Node clean architecture studio.

## Idea
- core/ is for framework agnostic code
  - core/hello-controller.js is a controller
  - core/todo-controller.js is a controller
  - core/todo-service.js is a service provider for controllers
- express/app.js uses expressjs as framework
  - express/hello is a middleware
    - express/hello.js is an adapter controller-framework
  - express/todo is a middleware
    - express/todo.js is an adapter controller-framework