## MySql
> MySQL是一个数据库管理系统

####  启动数据库
* mysql -u  root -p 


#### 任务1
* 查找重复的电子邮箱
```
	SELECT Email FROM email
	GROUP BY Email  HAVING COUNT(*) > 1;
```

* 查找大国
```
	SELECT name, population, area FROM World
	WHERE area > 3000000 OR (population > 25000000 AND gdp > 20000000);
```