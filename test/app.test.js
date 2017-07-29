const request = require('supertest');
const knex = require('../db/knex');

const app = require('../app');

describe('CRUD KNEX', () => {
  // console.log("testing!");
  before((done) => {
    // console.log("migration start!");
    // run migrations
    knex.migrate.latest()
      .then(() => {
        // console.log("seed start!");
        // run seeds
        return knex.seed.run();
      }).then(() => { done() } )
  });

  it("Lists all records", (done) => {
    // console.log("Its working!");

    request(app)
      .get('/api/v1/stickers')
      .set('Accept', 'applicaion/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  })
});
