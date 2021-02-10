require('dotenv').config();

module.exports =
{
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: `${process.env.DB_NAME}_develop`,
    host: process.env.DB_HOST || "localhost",
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME + '_test',
    host: process.env.DB_HOST || "localhost",
    dialect: process.env.DB_DIALECT
  },
  production: {
    username: process.env.DB_USER_PROD,
    password: process.env.DB_PASSWORD_PROD,
    database: `${process.env.DB_NAME}_prod`,
    host: process.env.DB_HOST_PROD || "localhost",
    dialect: process.env.DB_DIALECT_PROD,
    port: process.env.DB_PORT_PROD
  }
}
