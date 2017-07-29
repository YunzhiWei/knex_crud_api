const request = require('supertest');
const expect  = require('chai').expect;
const knex = require('../db/knex');

const app = require('../app');
const fixtures = require('./fixtures');

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
      .expect(200)
      .then((response) => {
        expect(response.body).to.be.a('array');
        console.log(response.body);
        expect(response.body).to.deep.equal(fixtures.stickers);
        done();
      });
  });

  it("Show one record by id", (done) => {
    // console.log("Its working!");

    request(app)
      .get('/api/v1/stickers/1')
      .set('Accept', 'applicaion/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).to.be.a('object');
        console.log(response.body);
        expect(response.body).to.deep.equal(fixtures.stickers[0]);
        done();
      });
  });

  it("Create one record", (done) => {
    request(app)
      .post('/api/v1/stickers')
      .send(fixtures.sticker)
      .set('Accept', 'applicaion/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).to.be.a('object');
        fixtures.sticker.id = response.body.id;
        console.log(response.body);
        expect(response.body).to.deep.equal(fixtures.sticker);
        done();
      });
  });

  it("Update one record", (done) => {
    fixtures.sticker.rating += 1;
    delete fixtures.sticker.id;

    request(app)
      .put('/api/v1/stickers/1')
      .send(fixtures.sticker)
      .set('Accept', 'applicaion/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).to.be.a('object');
        fixtures.sticker.id = response.body.id;
        console.log(response.body);
        expect(response.body).to.deep.equal(fixtures.sticker);
        done();
      });
  });
});
