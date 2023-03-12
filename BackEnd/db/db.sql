CREATE DATABASE clientes;

CREATE TABLE
    tb_clientes (
        id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name varchar(255) NOT NULL,
        apellido varchar(255) NOT NULL,
        tel INT(255) NOT NULL,
        avatar varchar(255) NOT NULL
    );

INSERT INTO
    tb_clientes (name, apellido, tel, avatar)
VALUES (
        'Juan',
        'Perez',
        '123456789',
        'avatar.jpg'
    );