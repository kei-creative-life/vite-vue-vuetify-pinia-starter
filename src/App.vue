<script setup lang="ts">
import HelloPinia from '@/components/HelloPinia.vue'
import { useStoreCounter } from '@/stores/counter'
import { storeToRefs } from 'pinia'
const counter = useStoreCounter()
// Reactive性を保つためにstoreToRefsを使用する
const { count, doubleCount } = storeToRefs(counter)
const { increment } = counter
</script>

<template>
  <p>Count:{{ count }}</p>
  <p>Double Count: {{ doubleCount }}</p>
  <button @click="increment">Count Up</button>

  <HelloPinia />
</template>

<style scoped></style>
