exports.up = (knex) => knex.schema.createTable('todo', (t) => {
  t.increments().primary();
  t.string('name').notNullable().defaultTo('');
  t.boolean('completed').notNullable().defaultTo(false);
  t.boolean('archived').notNullable().defaultTo(false);
});
// TODO: add defaults for completed and archived, name should be not null
exports.down = (knex) => knex.schema.dropTable('todo');
