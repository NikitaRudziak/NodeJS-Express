const express = require('express');
const app = express();
const billing = require('./Billing/app.js')(app);
const catalog = require('./Catalog/app.js')(app);

app.listen(3000, () => {
  console.log('Server is listening on port: 3000');
});
