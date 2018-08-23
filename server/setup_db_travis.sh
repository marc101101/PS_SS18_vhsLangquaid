mysql.server start
mysql -u root -p -e "CREATE DATABASE usr_p100480_1;"
mysql -u root -p usr_p100480_1 < remote_db.sql
