 // Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'nodejsbookdb',
      user:     'nodejs_app',
      password: '123456'
    }
  },
  test: {
    client: 'pg',
    connection: {
      database: 'test-nodejsbookdb',
      user:     'nodejs_app',
      password: '123456'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
