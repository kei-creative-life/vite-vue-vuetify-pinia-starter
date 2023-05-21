<script setup lang="ts">
import { useStoreCounter } from '@/stores/counter'
const counter = useStoreCounter()

const patch = () => {
  counter.$patch({
    count: 100,
  })
}
</script>

<template>
  <h2>Hello Pinia</h2>
  <p>カウント:{{ counter.count }}</p>
  <button @click="patch">Patch</button>
  <button @click="counter.reset">Reset</button>
</template>
