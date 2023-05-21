import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useStoreCounter = defineStore('counter', () => {
  const count = ref(1)

  const increment = () => {
    count.value++
  }

  // setup関数内では$reset()は使えない
  const reset = () => {
    count.value = 0
  }

  const doubleCount = computed(() => count.value * 2)

  return { count, increment, reset, doubleCount }
})
