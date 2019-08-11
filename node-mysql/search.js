const config = require('./db_config');
const mysql = require('mysql');

const connection = mysql.createConnection(config);

const sql = `select * from person`;

connection.query(sql, function(err, results, fields) {
  if (err) {
    return console.log(`查询失败, ${err.message}`);
  }

  console.log(`查询成功，${JSON.stringify(results)}, ${JSON.stringify(fields)}`);
});

connection.end();