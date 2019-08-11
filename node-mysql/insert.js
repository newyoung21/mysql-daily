const config = require('./db_config');
const mysql = require('mysql');

const connection = mysql.createConnection(config);

const sql = `insert into person(name, age)
              value('lin', '18')
            `;

connection.query(sql, function(err, results, fields) {
  if (err) {
    return console.log(`插入数据失败，${err.message}`);
  }

  console.log(`插入数据成功，${JSON.stringify(results)}, ${JSON.stringify(fields)}`);
});

connection.end();

