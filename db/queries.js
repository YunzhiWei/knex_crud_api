const knex = require('./knex');

module.exports = {
  getAll() {
    return knex('sticker');       // same as: knex('sticker').select('*')
  },
  getOne(id) {
    return knex('sticker').where('id', id).first();
  },
  createOne(sticker) {
    return knex('sticker').insert(sticker, '*');  // '*' to return the record in http response
  },
  updateOne(id, sticker) {
    return knex('sticker').where('id', id).update(sticker, '*');  // '*' to return the record in http response
  },
};
