const express = require('express');
const store = require('../../store/accountsStore');
const router = express.Router();

router.get('/', (req, res) =>{
  res.json(store);
});

module.exports = router;
