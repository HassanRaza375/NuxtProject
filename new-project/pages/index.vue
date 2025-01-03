<script setup>
    const {even} = useNuxtApp();

import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
  router.push('/dashboard').catch((err) => {
    console.error('Navigation failed:', err); // Log the error
  });
});
</script>

<template lang="">
    <div>
        <h2>Home Page by Index</h2>
        <p> Evem numbers: {{even(10)}}</p>
    </div>
</template>

<style lang="">
    
</style>