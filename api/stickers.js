const express = require('express');

const router = express.Router();

const queries = require('../db/queries');

function isValidId(req, res, next) {
  if(!isNaN(req.params.id)) return next();
  nex(new Error('Invalid Id'));
}

function validSticker(sticker) {
  const hasTitle = typeof sticker.title == 'string' && sticker.title.trim() != '';
  const hasUrl = typeof sticker.url == 'string' && sticker.url.trim() != '';
  const hasDescription = typeof sticker.description == 'string' && sticker.description.trim() != '';
  const hasRating = !isNaN(sticker.rating);
  return(hasTitle && hasUrl && hasDescription && hasRating);
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

router.post('/', (req, res, next) => {
  if(validSticker(req.body)) {
    queries.createOne(req.body).then(stickers => {
      res.json(stickers[0]);
    });
  }
  else {
    next(new Error('Invalid sticker'));
  }
});

router.put('/:id', isValidId, (req, res, next) => {
  if(validSticker(req.body)) {
    queries.updateOne(req.params.id, req.body).then(stickers => {
      res.json(stickers[0]);
    });
  }
  else {
    next(new Error('Invalid sticker'));
  }
});

router.delete('/:id', isValidId, (req, res) => {
  queries.deleteOne(req.params.id).then(() => {
    res.json({deleted: true});
  });
});

module.exports = router;
