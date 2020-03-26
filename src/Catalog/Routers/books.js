const express = require('express');
const bodyParser = require('body-parser');
const store = require('../../store/booksStore');
const accountStore = require('../../store/accountsStore');

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));

router.get('/', (req, res) => {
    res.json(store);
});

router.get('/:id', (req, res) => {
  let book;
  store.forEach(item => {
    if( item.id == req.params.id.slice(1)) {
      book = item;
    }
  })
  res.json(book);
});

router.post('/newBook', (req, res) => {
  if (req.body.name === '' || req.body.accountId === '') {
    res.json('Check your fields!');
  } else {
    const item = accountStore.find(item => item.id == req.body.accountId);
    if (item) {
      const newBook = {
        id: Math.ceil(Math.random() * 100  - 1),
        name: req.body.name,
        accountId: req.body.accountId
      };
      store.push(newBook);
      res.json(store);
    } else {
      res.send('This account is not exists');
    }
  }
});

module.exports = router;
