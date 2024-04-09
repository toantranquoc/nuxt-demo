<template>
    <div>
        <div class="container mx-auto p-4">
            <slot />
        </div>
        <div>
            <footer class="container mx-auto p-4 flex justify-between border-t-2">
                <ul class="flex gap-4">
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/products">Product</NuxtLink>
                    </li>
                </ul>
            </footer>
        </div>
    </div>

</template>


<style scoped>
.router-link-exact-active {
    color: aquamarine;
}
</style>