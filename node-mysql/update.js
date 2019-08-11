const config = require('./db_config');
const mysql = require('mysql');

const connection =  mysql.createConnection(config);

const sql = `
              update person
              set 
              age = 20
              where name = 'lin'
            `;

connection.query(sql, function(err, results, fields) {
  if (err) {
    return console.log(`更新数据失败，${err.message}`);
  }

  console.log(`更新数据成功，${JSON.stringify(results)}, ${JSON.stringify(fields)}`);
});

connection.end();