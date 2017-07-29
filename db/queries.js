const knex = require('./knex');

module.exports = {
  getAll() {
    return knex('sticker');       // same as: knex('sticker').select('*')
  },
  getOne(id) {
    return knex('sticker').where('id', id).first();
  }
};
