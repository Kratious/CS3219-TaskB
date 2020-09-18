import request from 'supertest';
import app from '../src/app';
import knex from '../src/db/knex';
import Todo from '../src/models/Todo';

describe('app', () => {
  beforeAll(() => knex.migrate.latest());
  beforeEach(() => knex.seed.run());
  afterEach(() => knex('todo').truncate());
  afterAll(() => knex.destroy());

  it('GET / should obtain initial db seed values', async () => {
    expect.assertions(1);
    const res = await request(app).get('/').expect(200);
    expect(res.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "completed": false,
          "id": 1,
          "name": "Groceries for dinner",
        },
        Object {
          "completed": false,
          "id": 2,
          "name": "Take the jacket to dry cleaning",
        },
        Object {
          "completed": false,
          "id": 3,
          "name": "Plan weekend hike",
        },
      ]
    `);
  });

  it('POST / should obtain status code 204 for successful insert', async () => {
    expect.assertions(2);
    const res = await request(app)
      .post('/')
      .send({ name: 'New Todo' })
      .expect(200);
    expect(res.body).toMatchInlineSnapshot(`
        Object {
          "statusCode": 204,
        }
      `);

    const toDoCount = await Todo.query();
    expect(toDoCount.length).toBe(4);
  });

  it('PUT / should obtain status code 204 for successful update', async () => {
    expect.assertions(2);
    const id = 1;
    const modifiedToDoName = 'I am modified';

    const res = await request(app)
      .put('/')
      .send({ id, name: modifiedToDoName })
      .expect(200);
    expect(res.body).toMatchInlineSnapshot(`
      Object {
        "statusCode": 204,
      }
    `);

    const modifiedTodo = await Todo.query().findById(id);
    expect(modifiedTodo.name).toBe(modifiedToDoName);
  });

  it('DELETE / should obtain status code 204 for successful delete', async () => {
    expect.assertions(2);
    const id = 1;

    const res = await request(app)
      .delete('/')
      .query({ id })
      .expect(200);
    expect(res.body).toMatchInlineSnapshot(`
      Object {
        "statusCode": 204,
      }
    `);

    const modifiedTodo = await Todo.query().findById(id);
    expect(modifiedTodo).toBeUndefined();
  });
});
