<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
  router.push('/signin').catch((err) => {
    console.error('Navigation failed:', err); // Log the error
  });
});
</script>
<template>
  <div>
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome /> -->
    <!-- <Navbar/>
    <NuxtPage /> -->
     <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  </div>
</template>
