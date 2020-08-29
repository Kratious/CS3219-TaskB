exports.seed = (knex) => knex('todo').del()
  .then(() => knex('todo').insert([
    { id: 1, name: 'Groceries for dinner' },
    { id: 2, name: 'Take the jacket to dry cleaning' },
    { id: 3, name: 'Plan weekend hike' },
  ]));
