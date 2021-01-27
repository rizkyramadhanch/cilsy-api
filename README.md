# cilsy-api
run database on local
```
docker run -it --name mysql-cilsy -e MYSQL_ROOT_PASSWORD=12345678 -d mysql:latest --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci
```

build nodejs application
```
docker build -t cilsy-api:v6 .
```

run api nodejs
```
docker run -it -d --name cilsy-api-v6 -p 3000:3000 cilsy-api:v6
```



