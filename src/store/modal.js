import { writable } from "svelte/store"

export const showModal = writable(false)
export const modalContent = writable({
  title: "",
  component: null,
  args: {},
})

export function open(content) {
  if (content) {
    const newContent = { ...content }
    modalContent.set(newContent)
  }
  showModal.update((s) => !s)
}

export function close() {
  showModal.update((s) => !s)
}
