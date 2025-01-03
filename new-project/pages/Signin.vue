<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="username">Username</label>
          <input type="text" id="username" v-model="username" />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" />
        </div>
        <button type="submit">Login</button>
      </form>
      <p v-if="error" style="color: red;">{{ error }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import auth from '~/plugins/axios.js';
  import { useRouter } from 'vue-router';
  
  const username = ref('');
  const password = ref('');
  const error = ref('');
  const router = useRouter();
  
  const handleSubmit = async () => {
    try {
      await auth.signIn(username.value, password.value);
      router.push('/dashboard'); // Redirect after successful login
    } catch (err) {
      error.value = err.message;
    }
  };
  </script>
  