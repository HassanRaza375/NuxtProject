<script setup>
import { useRoute } from 'vue-router'; // Ensure useRoute is imported
const route = useRoute();

// Fetch the product data based on the route parameter 'id'
const { data: product, pending, error } = useFetch(`https://fakestoreapi.com/products/${route.params.id}`);

// Logs the product ID for debugging purposes
console.log(route.params.id);
</script>

<template>
    <div>
        <h1>Product Page</h1>
        
        <!-- Show error if there's an issue with the request -->
        <p v-if="error">There is an error: {{ error }}</p>

        <!-- Loading indicator -->
        <p v-if="pending">Loading...</p>

        <!-- Display the product data -->
        <div v-if="product">
            <div class="container">
                <div class="left-column">
                    <p>{{ product.id }}</p>
                    <img :src="product.image" alt="Product image" width="70" height="70" />
                </div>
                <div class="right-column">
                    <p>{{ product.title }}</p>
                    <p>{{ product.description }}</p>
                    <p>Price: {{ product.price }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: space-between;
}
.left-column, .right-column {
    flex: 1;
    padding: 10px;
}
</style>