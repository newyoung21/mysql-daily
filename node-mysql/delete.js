const config = require('./db_config');
const mysql = require('mysql');

const connection = mysql.createConnection(config);

const sql = `
              delete from person 
              where id = 1
            `;

connection.query(sql, function (err, results, fields) {
  if (err) {
    return console.log(`删除数据失败，${err.message}`);
  }

  console.log(`删除数据成功，${JSON.stringify(results)}, ${JSON.stringify(fields)}`);
});

connection.end();