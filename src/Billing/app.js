const router = require('./Routers/accounts.js');

module.exports = (app) => {
  console.log('Billing is mounted');
  app.use('/', router);
};
