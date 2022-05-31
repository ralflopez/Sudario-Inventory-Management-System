import { connection } from "../../../db/mysql"

// update product
export async function put({ request, params }) {
  const { name, price } = await request.json()
  const id = params.id

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
      "UPDATE products SET name = ?, price = ? WHERE id = ?;",
      [name, price, id]
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

export async function del({ params }) {
  const id = params.id
  try {
    const [rows] = await connection.execute(
      "DELETE FROM products WHERE id = ?;",
      [id]
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
