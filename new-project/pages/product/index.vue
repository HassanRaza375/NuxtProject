<script setup>
const {data:products, pending, error, refresh} = await useFetch('https://fakestoreapi.com/products');
console.log("Data", toRaw(products.value));
console.log("Error",error);
</script>
<template lang="">
    <div>
        <h1>All Products Page</h1>
        <p v-if="error">Ther is an error {{error}}</p>
        <!-- <p v-if="pending">Loading {{pending}}</p> -->
        <div v-if="products">
            <div class="container" v-for="product in products">
            <div class="left-column">
                <p>{{product.id}}</p>
                
                <img :src="product.image" alt="image" class="img-70"/>
            </div>
            <div class="right-column">
                <p>
                    <NuxtLink :to="`/product/${product.id}`">{{product.title}}</NuxtLink>
                </p>
            <p>Description: {{product.description}}</p>
            <p>Price: {{product.price}}</p>
            </div>
            
        </div>
        </div>
        
    </div>
</template>

<style scoped>
    .container{
        display: flex;
        justify-content: space-between;
    }
</style>