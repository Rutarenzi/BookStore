require('dotenv').config();

const {
  DEV_DATABASE,
  DATABASE_HOST,
  DATABASE_USER,
  DATABASE_PORT,
  DATABASE_PASSWORD,

} = process.env;

module.exports = {
  development: {
    username: DATABASE_USER,
    database: DEV_DATABASE,
    password: DATABASE_PASSWORD,
    host: DATABASE_HOST,
    port: DATABASE_PORT,    
    dialect: "postgres",
    logging: false,
    protocol: "postgres",
  },}