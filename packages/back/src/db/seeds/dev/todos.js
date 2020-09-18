exports.seed = async (knex) => {
  await knex('todo').truncate();
  await knex('todo').insert([
    { id: 1, name: 'Groceries for dinner' },
    { id: 2, name: 'Take the jacket to dry cleaning' },
    { id: 3, name: 'Plan weekend hike' },
  ]);
  // Note: Have two options here:
  // 1. remove preset id from insert
  // 2. update postgres to latest id from preset ids
  await knex.raw('select setval(\'todo_id_seq\', max(id)) from todo');
};
