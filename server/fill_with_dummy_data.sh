echo "Starting MySQL Server"
mysql.server start

echo "inserting dummy data"
mysql -uroot << EOF
  source dummydata.sql;
EOF

echo "Insert Finished!"
echo "Server is still up and running!"