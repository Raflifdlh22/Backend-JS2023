// import mysql
const mysql = require("mysql");

// membuat koneksi database
require("dotenv").config();

// destructuturing process.env
const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

// membuat koneksi database
const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
});

// connect ke database
connection.connect((error) => {
  if (error) {
    console.log("Database has connected ..." + error.stack);
    return;
  } else {
    console.log("Database has connected ...");
    return;
  }
});

// export connection
module.exports = connection;
