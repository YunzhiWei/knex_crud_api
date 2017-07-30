
exports.up = function(knex, Promise) {
  return knex.schema.createTable('sticker', (table) => {
    table.increments();
    table.text('title');
    table.text('description');
    table.float('rating');
    table.text('url');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('sticker');
};

// exports.up = function(knex, Promise) {
//   return knex.schema
//      .createTable('users', (table) => {
//        table.increments();
//        table.text('name').notNullable();
//        table.text('email').notNullable();
//        table.timestamp('create_at').defaultTo(knex.fn.now());
//        table.timestamp('update_at').defaultTo(knex.fn.now());
//   })
//      .createTable('todos', (table) => {
//        table.increments();
//        table.text('title').notNullable();
//        table.integer('proiority').notNullable();
//        table.text('description');
//        table.boolean('done').defaultTo(false).notNullable();
//        table.datetime('due_date').defaultTo(new Date()).notNullable();
//        table.timestamp('create_at').defaultTo(knex.fn.now());
//        table.timestamp('update_at').defaultTo(knex.fn.now());
//        table.integer('user_id').references('id').inTable('users');
//   })
//;
// };

// exports.down = function(knex, Promise) {
//   return knex.schema
//     .dropTable('users')
//     .dropTable('todos')
//   ;
// };
