import { writable } from "svelte/store"
import { browser } from "$app/env"

export const products = writable([])

export async function createProduct(name, price) {
  if (!browser) return
  // Insert to database
  try {
    await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, price }),
    })
  } catch (error) {
    throw error
  } finally {
    readProducts()
  }
}

export async function readProducts() {
  if (!browser) return
  try {
    const result = await fetch("/api/products")

    const data = await result.json()

    products.set(data)
  } catch (error) {
    throw error
  }
}

export async function updateProduct(id, name, price) {
  if (!browser) return
  try {
    await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, price }),
    })
  } catch (error) {
    throw error
  } finally {
    readProducts()
  }
}

export async function deleteProduct(id) {
  if (!browser) return
  try {
    await fetch(`/api/products/${id}`, {
      method: "DELETE",
    })
  } catch (error) {
    throw error
  } finally {
    readProducts()
  }
}
