# This is Journey Test Xapiens Bootcamp, enjoy!!!
### by Michael Stevan Lapandio
## Jawaban Day 8 - PostgreSQL (Michael Stevan Lapandio)

1.  ```
    CREATE TABLE Writers (
    id serial PRIMARY KEY,
    full_name varchar(60) NOT NULL,
    email varchar(60) NOT NULL,
    photo varchar(60) NOT NULL,
    createdAt timestamp,
    updateAt timestamp
    );
    ```
    ```
    CREATE TABLE Books (
    id serial PRIMARY KEY,
    writeId int NOT NULL,
    categoryId int NOT NULL,
    title int NOT NULL,
    description varchar(60),
    photo varchar(60),
    createdAt timestamp,
    updatedAt timestamp
    );
    ```
    ```
    CREATE TABLE Categories (
    id int PRIMARY KEY,
    category varchar(60) NOT NULL
    );
    ```

    ```
    ALTER TABLE books
    ADD CONSTRAINT fk_writeid FOREIGN KEY (writeid) REFERENCES writers (id);
    ```

    ```
    ALTER TABLE books
    ADD CONSTRAINT fk_category FOREIGN KEY (writeid) REFERENCES writers (id);
    ```

    ```
    ALTER TABLE books
    ALTER COLUMN title TYPE varchar(60);
    ```


2.  
    ```
    INSERT INTO writers (full_name,email,photo,createdAt,updateAt)
    VALUES 
    ('naruto','naruto@mail.com','naruto.jpg','2021-01-10 20:10:25-07','2021-01-10 20:12:25-07'),
    ('sasuke','sasuke@mail.com','sasuke.jpg','2021-01-9 19:30:40-07','2021-01-9 20:12:25-07'),
    ('hinata','hinata@mail.com','hinata.jpg','2021-01-11 13:15:23-07','2021-01-11 15:12:25-07'),
    ('kiba','kiba@mail.com','kiba.jpg','2021-01-10 22:34:10-07','2021-01-10 23:25:13-07'),
    ('sakura','sakura@mail.com','sakura.jpg','2021-01-8 10:18:40-07','2021-01-8 11:50:25-07');
    ```

    ```
    INSERT INTO books (writeid,categoryid,title,description,photo,createdat,updatedat)
    VALUES
    (1,1,'Konoha Hokage','Konoha Hokage','null','2021-01-10 20:10:25-07','2021-01-10 20:12:25-07'),
    (2,2,'Legend of Aang','Legend of Aang','null','2021-01-9 19:30:40-07','2021-01-9 20:12:25-07'),
    (3,3,'Penyelamatan Nenek','Penyelamatan Nenek','null','2021-01-11 13:15:23-07','2021-01-11 15:12:25-07'),
    (4,4,'Kyuubi Reveal','Kyuubi Reveal','null','2021-01-10 22:34:10-07','2021-01-10 23:25:13-07'),
    (5,2,'Final Battle','Final Battle','null','2021-01-8 10:18:40-07','2021-01-8 11:50:25-07');
    ```

    ```
    INSERT INTO categories (id,category)
    VALUES
    (1,'action'),
    (2,'comic'),
    (3,'fantasy'),
    (4,'horror');
    ```

3. 
    ```
    SELECT * FROM writers AS w INNER JOIN books b ON w.id = b.writeid;
    SELECT * FROM writers AS w LEFT JOIN books b ON w.id = b.writeid;
    ```

4. 
    ```
    SELECT * FROM writers AS w 
    INNER JOIN books AS b ON w.id = b.writeId
    INNER JOIN categories AS c on c.id = b.categoryId
    WHERE c.category= 'action';
    ```

5. 
    ```
    SELECT b.categoryid FROM writers AS w 
    INNER JOIN books AS b ON w.id = b.writeId
    GROUP BY b.categoryId;
    ```
