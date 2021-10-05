const app = require('./app');

const port = 3000;

app.listen(port, () => {
  console.log(`ExpressJS app listening at http://localhost:${port}`);
});