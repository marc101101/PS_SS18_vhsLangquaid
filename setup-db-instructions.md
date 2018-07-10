# Database Setup

OS: MacOS

Install db
```
brew install mariadb
```

start server
```
mysql.server start
```
stop server
```
mysql.server stop
```

mysql console
```
mysql -uroot
```

setup empty local vhs lq database

```
mysql.server start
mysql -uroot
create database usr_p100480_1;

Leave mysql CLI by pressing CTRL-C!

mysql -u root -p usr_p100480_1 < PATH_TO_SQL_FILE
```


fill with local db with dummy data
```
cd server
sh fill_with_dummy_data.sh
```
