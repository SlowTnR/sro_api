const mysql = require('mysql');

const pool = mysql.createPool({

  connectionLimit = 10, // DB_CONNECTION_LIMIT
  password: '', // DB_PASSWORD
  user: 'sroapi', // DB_USER
  database: 'sro_api', // DB_NAME
  host: 'localhost', // DB_HOST
  port: '3306' // DB_PORT
});

let sroapidb = {"test": "Hi"};

sroapidb.all = () => {

  return new Promise((resolve, reject) => {
    
    pool.query(`SELECT * FROM Kurssi`, (err, result) => {

      if(err) {
        return reject(err);
      }

      return resolve(result)

    });

  });
};

module.exports = sroapidb;