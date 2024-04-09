<template>
    <div class="card text-center">
        <img :src="product.image" alt="product image" class="thumb">
        <p class="font-bold text-gray m-4 truncate"> {{product.title}}</p>
        <NuxtLink :to="`/products/${product.id}`">
            <p class="btn my-4">View detail</p>
        </NuxtLink>
    </div>
</template>

<script setup>
    const {product} = defineProps(['product']);
</script>

<style scoped>
    .thumb {
        max-height: 120px;
        width: 70%;
        margin: 0 auto;
    }
</style>