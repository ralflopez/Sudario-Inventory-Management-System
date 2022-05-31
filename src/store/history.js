import { writable } from "svelte/store"
import { browser } from "$app/env"
import { readProducts } from "../store/products"

export const history = writable([])

export async function createHistory(productId, amount, price) {
  if (!browser) return
  // Insert to database
  try {
    await fetch("/api/history", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId, amount, price }),
    })
  } catch (error) {
    throw error
  } finally {
    readHistory()
    readProducts()
  }
}

export async function readHistory() {
  if (!browser) return
  try {
    const result = await fetch("/api/history")

    const data = await result.json()

    history.set(data)
  } catch (error) {
    throw error
  }
}
