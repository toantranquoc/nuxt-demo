<template>
    <div>
        <h1>About - {{ data }}</h1>
    </div>
</template>

<script setup>
    // const {data} = await useFetch('/api/arrow?name=harry', {
    //     method: 'post',
    //     body: {
    //         age: 30
    //     }
    // });
    const {data} = await useFetch('/api/currency/VND');
</script>

<style scoped>

</style>