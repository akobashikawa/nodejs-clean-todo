# Clean To Do - Express

Aplica Clean Architecture para el backend de una app To Do.

## Idea
- core/ contiene código que es agnóstico del framework
  - core/hello-controller.js es un controlador
  - core/todo-controller.js es un controlador
  - core/todo-service.js es un proveedor de servicios para el controlador
- express/app.js es el módulo que usa a expressjs como framework
  - express/hello es un middleware
    - express/hello.js es el adaptador de los controladores con el framework
  - express/todo es un middleware
    - express/todo.js es el adaptador de los controladores con el framework