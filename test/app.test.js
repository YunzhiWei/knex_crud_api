const knex = require('../db/knex');

describe('CRUD KNEX', () => {
  console.log("testing!");
  before((done) => {
    console.log("migration start!");
    // run migrations
    knex.migrate.latest()
      .then(() => {
        console.log("seed start!");
        // run seeds
        return knex.seed.run();
      }).then(() => { done() } )
  });

  it("works ...", function() {
    console.log("Its working!");
  })
});
