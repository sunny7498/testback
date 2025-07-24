<template>
  <div>
    <h1>Third Page</h1>
    <p>This is the third page.</p>
    <button @click="goHome">Go to Home</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function goHome() {
  window.history.replaceState({}, '', '/')
  router.replace('/')
}
</script>

<style scoped>
h1 {
  color: #e67e22;
}
</style>
