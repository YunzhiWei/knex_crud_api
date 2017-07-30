# knex_crud_api

https://www.youtube.com/watch?v=knoQaoTT7g0&amp;index=2&amp;list=PLM_i0obccy3uwR6ZYa7QE03xDRAqs4Aso

# Resource

- [Lucidchart](https://www.lucidchart.com)

# Log

- Create heroku application

  1. Create heroku app with heroku-cli

    ```
    E:\nodejs\knex_crud_api>heroku create knex-crud-api
    Creating knex-crud-api... done
    https://knex-crud-api.herokuapp.com/ | https://git.heroku.com/knex-crud-api.git
    ```

  2. heroku addons create: postgresql

    ```
    E:\nodejs\knex_crud_api>heroku addons:create heroku-postgresql
    Creating heroku-postgresql on knex-crud-api... free`
    Database has been created and is available`
     ! This database is empty. If upgrading, you can transfer`
     ! data from another database with pg:copy`
    Created postgresql-round-39560 as DATABASE_URL`
    Use heroku addons:docs heroku-postgresql to view documentation
    ```

  3. connect to DB

    ```
    E:\nodejs\knex_crud_api>heroku pg:psql
    --> Connecting to postgresql-round-39560
    psql (9.6.2, 服务器 9.6.1)
    SSL 连接（协议：TLSv1.2，密码：ECDHE-RSA-AES256-GCM-SHA384，密钥位：256，压缩：关闭)
    输入 "help" 来获取帮助信息.

    knex-crud-api::DATABASE=> \dt
    找不到关联。
    knex-crud-api::DATABASE=> \q
    ```

- Execute migration

  ```
  > knex migrate:latest
  ```
