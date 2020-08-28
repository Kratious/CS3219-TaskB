import request from 'supertest';
import app from '../src/app';

describe('app', () => {
  it('GETs / and should obtain Hello World!', async () => {
    expect.assertions(1);
    const res = await request(app).get('/').expect(200);
    expect(res.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "id": 1,
          "name": "task1",
        },
        Object {
          "id": 2,
          "name": "task2",
        },
        Object {
          "id": 3,
          "name": "task3",
        },
      ]
    `);
  });
});
