<script setup>
const route = useRoute();
// Define page meta with validation
definePageMeta({
  validate: async (route) => {
    return /^\d+$/.test(route.params.id); // Ensure that the route id is a number
  }
});
</script>
<template lang="">
    <div>
        <h1>Post Page</h1>
        <!-- <h2>{{$route.params.id}}</h2> -->
        <h2>{{$route.params.id}}</h2>
    </div>
</template>

<style lang="">
    
</style>