require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": "aprender_db_development",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "timezone": '-03:00'
  },
  "test": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": "aprender_db_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "timezone": '-03:00'
  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": "aprender_db_production",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "timezone": '-03:00'
  }
}
