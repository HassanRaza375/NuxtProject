<template lang="">
    <div>
        <button @click="show = !show">Show Me</button>
        <LazyAdminCartProduct v-if="show"/>

        <button @click="toggleDropdown" class="dropdown-btn">
      Dropdown
    </button>
    <ul v-if="isOpen" class="dropdown-menu">
      <li><a href="/home">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
    </div>
</template>
<script setup>
import {ref} from 'vue'
    const show = ref(false)

const isOpen = ref(false)
const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}
</script>
<style lang="">
    
</style>