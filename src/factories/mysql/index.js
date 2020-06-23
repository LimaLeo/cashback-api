const Sequelize = require('sequelize');

const mysql = new Sequelize(
    process.env.DB_MYSQL_DATABASE,
    process.env.DB_MYSQL_USERNAME, 
    process.env.DB_MYSQL_PASSWORD, 
    {
        host: process.env.DB_MYSQL_HOST,
        dialect: "mysql",
        port: process.env.DB_MYSQL_PORT,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
);

mysql
  .authenticate()
  .then(() => {
    console.log('✅ MySQL - Connection has been established successfully.');
  })
  .catch(err => {
    console.error('MySQL - Unable to connect to the database:', err);
  });

module.exports = mysql;  