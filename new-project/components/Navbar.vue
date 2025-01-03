
<template lang="">
    <div>
        <nuxt-link to="/home" active-class="active">Home</nuxt-link>
        <nuxt-link to="/about" active-class="active">About</nuxt-link>
        <nuxt-link to="/contact" active-class="active">Contact</nuxt-link>
        <nuxt-link to="https://www.google.com/" target="_blank">Go to google</nuxt-link>
       
  </div>
    
</template>

<style scoped>
.active{
    background-color: pink;
}
</style>