<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products">
                <ProductCard :product="p"></ProductCard>
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    });
    const url = 'https://fakestoreapi.com/products';
    const {data: products} = await useFetch(url);
    useHead({
        title: 'Use Head for the products page',
        meta: [
            {name: 'description', content: 'useHead in the products page'}
        ]
    });
</script>

<style scoped>

</style>