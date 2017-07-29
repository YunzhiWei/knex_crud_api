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

router.get('/:id', isValidId, (req, res, next) => {
  queries.getOne(req.params.id).then(sticker => {
    if(sticker){
      res.json(sticker);
    }
    else {
      // res.status(404);
      // next(new Error('Not Found'));
      next();
    }
  });
});

module.exports = router;
