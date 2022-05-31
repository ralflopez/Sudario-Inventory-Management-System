import { connection } from "../../../db/mysql"

// create product
export async function post({ request }) {
  const { name, price } = await request.json()

  if (!name) {
    return {
      status: 400,
      body: "All fields must be present",
    }
  }

  if (isNaN(price) || price < 0) {
    return {
      status: 400,
      body: "Price / Stock must be a number atleast 0",
    }
  }

  try {
    const [rows] = await connection.execute(
      "INSERT INTO products (name, price) VALUES (?, ?);",
      [name, price]
    )

    return {
      status: 200,
      body: rows.affectedRows,
    }
  } catch (error) {
    return {
      status: 500,
      body: error.message,
    }
  }
}

// read products
export async function get() {
  try {
    const [rows] =
      await connection.execute(`SELECT products.id, products.name, products.price, IFNULL(SUM(amount), 0) as stock
        FROM products 
        LEFT JOIN history
        ON products.id = history.product_id
        GROUP BY products.id
        ORDER BY products.name;
    `)

    return {
      status: 200,
      body: JSON.stringify(rows),
    }
  } catch (error) {
    return {
      status: 500,
      body: error.message,
    }
  }
}
