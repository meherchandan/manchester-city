// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
    host : '127.0.0.1',
    user : 'manchester-city',
    password : 'Password@123',
    database : 'manchester-city',
    dateStrings: true
  },
  migrations: {
    directory: "./src/server/db/migrations"
  }
},

  production: {
    client: 'mysql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: "./src/server/db/migrations"
    }
  }

}
