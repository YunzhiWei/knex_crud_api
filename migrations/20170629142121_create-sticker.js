
exports.up = function(knex, Promise) {
  return knex.schema.createTable('sticker', (table) => {
    table.increments();
    table.text('title');
    table.text('description');
    table.float('rating');
    table.text('url');
  });
};

// exports.up = function(knex, Promise) {
//   return knex.schema.createTable('todo', (table) => {
//     table.increments();
//     table.text('title').notNullable();
//     table.integer('proiority').notNullable();
//     table.text('description');
//     table.boolean('done').defaultTo(false).notNullable();
//     table.datetime('date').defaultTo(new Date()).notNullable();
//   });
// };

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('sticker');
};
