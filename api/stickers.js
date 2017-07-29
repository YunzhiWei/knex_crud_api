const express = require('express');

const router = express.Router();

const queries = require('../db/queries');

function isValidId(req, res, next) {
  if(!isNaN(req.params.id)) return next();
  nex(new Error('Invalid Id'));
}

router.get('/', (req, res) => {
  queries.getAll().then(stickers => {
    res.json(stickers);
  });
});

router.get('/:id', isValidId, (req, res) => {
  res.json({
    message: 'Hello!'
  });
  
  // queries.getAll().then(stickers => {
  //   res.json(stickers);
  // });
});

module.exports = router;
