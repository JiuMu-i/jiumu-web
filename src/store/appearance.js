import { defineStore } from 'pinia'

export default defineStore('appearance', {
  state: () => ({ appearance: true }),
  actions: {
    change(val) {
      this.appearance = val
    }
  }
})