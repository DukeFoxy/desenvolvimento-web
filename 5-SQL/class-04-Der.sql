DROP TABLE IF EXISTS clients;
CREATE TABLE IF NOT EXISTS clients (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR NOT NULL,
    cpf VARCHAR NOT NULL UNIQUE,
    street VARCHAR ,
    neighvorhood VARCHAR ,
    city VARCHAR
);

DROP TABLE IF EXISTS phones;
CREATE TABLE IF NOT EXISTS phones (
    id_client INTEGER NOT NULL,
    number VARCHAR NOT NULL,
    PRIMARY KEY (id_client, number),
    FOREIGN KEY (id_client) REFERENCES clients(id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS products;
CREATE TABLE IF NOT EXISTS product (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR NOT NULL,
    price INTEGER NOT NULL,
    description VARCHAR
);

DROP TABLE IF EXISTS sales;
CREATE TABLE IF NOT EXISTS sales (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_client INTEGER PRIMARY KEY AUTOINCREMENT,
    id_product INTEGER PRIMARY KEY AUTOINCREMENT,
    amount INTEGER NOT NULL,
    data TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_client) REFERENCES clients(id) ON DELETE CASCADE,
    FOREIGN KEY (id_product) REFERENCES products(id)
);