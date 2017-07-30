# knex_crud_api

- [Video - CRUD API with Node.js/Express/Knex/Postgres](https://www.youtube.com/playlist?list=PLM_i0obccy3uwR6ZYa7QE03xDRAqs4Aso)

- [Vedio - Build a De-Coupled Full Stack JavaScript CRUD App with Node/Express/Postgres/Knex/jQuery/Bootstrap](https://www.youtube.com/watch?v=RCHSuEfKJ8g)

# Resource

- [Lucidchart](https://www.lucidchart.com)

# Log

- 20170730: Add CORS support

  > Please refer to [this page](https://www.npmjs.com/package/cors) for more details

- 20170730: Create heroku application

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

  4. open heroku application

    ```
    > heroku open
    ```

  5. open heroku logs and keep watching

    ```
    >heroku logs -t
    ```

  6. execute db migration

    ```
    >heroku run knex migrate:latest
    ```

  7. check db connection again

    ```
      E:\nodejs\knex_crud_api>heroku pg:psql
    --> Connecting to postgresql-round-39560
    psql (9.6.2, 服务器 9.6.1)
    SSL 连接（协议：TLSv1.2，密码：ECDHE-RSA-AES256-GCM-SHA384，密钥位：256，压缩：关闭)
    输入 "help" 来获取帮助信息.

    knex-crud-api::DATABASE-> \dt
                             关联列表
     架构模式 |         名称         |  类型  |     拥有者
    ----------+----------------------+--------+----------------
     public   | knex_migrations      | 数据表 | jjshdfpxgxslno
     public   | knex_migrations_lock | 数据表 | jjshdfpxgxslno
     public   | sticker              | 数据表 | jjshdfpxgxslno
    (3 行记录)
    ```

  8. seed

    ```
    >heroku run knex seed:run
    ```

- Execute migration

  ```
  > knex migrate:latest
  ```
