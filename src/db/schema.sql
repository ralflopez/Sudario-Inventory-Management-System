-- mysql schema
DROP TABLE IF EXISTS products, history;
CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL UNIQUE,
  price FLOAT NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE history (
  id INT NOT NULL AUTO_INCREMENT,
  product_id INT,
  amount INT NOT NULL,
  price FLOAT NOT NULL,
  created_on DATETIME NOT NULL DEFAULT NOW(),
  PRIMARY KEY (id),
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE SET NULL
);

-- initial values
INSERT INTO products (
  name,
  price
) VALUES (
  'Jasmine',
  2500
);
INSERT INTO products (
  name,
  price
) VALUES (
  'Sinandomeng',
  2100
);
INSERT INTO products (
  name,
  price
) VALUES (
  'Jaguar Blue',
  2400
);
INSERT INTO products (
  name,
  price
) VALUES (
  'Liberty',
  2450
);
INSERT INTO products (
  name,
  price
) VALUES (
  'Ganador',
  2450
);