const knex = require('./knex');

module.exports = {
  getAll() {
    return knex('sticker');       // same as: knex('sticker').select('*')
  }
};
