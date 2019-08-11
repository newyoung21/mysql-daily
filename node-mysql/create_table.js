const config = require('./db_config');
const mysql = require('mysql');

const connection = mysql.createConnection(config);

//创建表 - person
connection.connect(function(err) {
  if (err) {
    return console.log(`连接数据库失败, ${err.message}`);
  }

  const createTable = `create table if not exists person(
                        id int primary key auto_increment,
                        name varchar(50) not null,
                        age int
                      )`;
  connection.query(createTable, function(err, results, fields) {
    if (err) {
      return console.log(`创建表出错，${err.message}`);
    }

    console.log(`创建成功，${results}`);

    //断开链接
    connection.end(function(err) {
      if (err) {
        return console.log(`断开出错，${err.message}`);
      }

      console.log('数据库已断开');
    })
  });
});