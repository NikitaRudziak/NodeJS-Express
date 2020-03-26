const router = require('./Routers/books.js');

module.exports = (app) => {
  console.log('Catalog is mounted');
  app.use('/books', router);
};
