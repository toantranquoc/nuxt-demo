<template>
    <div>   
        <Head>
            <Title> {{ product.title }}</Title>
            <Meta name="description" :content="product.description"></Meta>
        </Head>
        <ProductDetail :product="product"></ProductDetail>
    </div>
</template>

<script setup>
    // get id from params
    const {id} = useRoute().params;
    definePageMeta({
        layout: 'products'
    });
    const url = 'https://fakestoreapi.com/products/' + id;
    const {data: product} = await useFetch(url, {key: id});

    if (!product.value) {
        throw createError({statusCode: 404, statusMessage: 'Product not found'});
    }
</script>

<style scoped>

</style>