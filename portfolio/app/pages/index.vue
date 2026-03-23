<template>
    <div class="p-6">
        <h1 class="text-3xl font-bold">Home</h1>
        <p class="mt-3 text-2xl" :welcome>{{ welcome }} to your Nuxt 4 app.</p>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    const welcome = ref('Hello and welcome');
</script>
