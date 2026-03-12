DROP TABLE IF EXISTS order_items;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS users;

-- USERS
CREATE TABLE users (
    user_id INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    role VARCHAR(20)
);

-- PRODUCTS
CREATE TABLE products (
    product_id INT PRIMARY KEY,
    name VARCHAR(200),
    price INT,
    in_stock BOOLEAN
);

-- ORDERS
CREATE TABLE orders (
    order_id VARCHAR(20) PRIMARY KEY,
    user_id INT,
    total_price INT,
    status VARCHAR(20),
    created_at DATE,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- ORDER ITEMS
CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id VARCHAR(20),
    product_id INT,
    quantity INT,
    price INT,
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);