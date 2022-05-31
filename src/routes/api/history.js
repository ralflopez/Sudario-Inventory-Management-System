import { connection } from "../../db/mysql"

export async function post({ request }) {
  const { productId, amount, price } = await request.json()

  if (!productId) {
    return {
      status: 400,
      body: "All fields must be present",
    }
  }

  if (isNaN(amount)) {
    return {
      status: 400,
      body: "Amount must be a number",
    }
  }

  try {
    const [rows] = await connection.execute(
      "INSERT INTO history (product_id, amount, price) VALUES (?, ?, ?);",
      [productId, amount, price]
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

export async function get() {
  try {
    const [rows] = await connection.execute(
      `SELECT history.id AS history_id, history.amount, products.name, history.price, history.created_on
        FROM history 
        LEFT JOIN products
        ON products.id = history.product_id
        ORDER BY history.created_on DESC;`
    )

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
