<template>
    <div
        class="container mx-auto mt-2 grid grid-cols-1 items-center justify-center gap-6 px-6 lg:grid-cols-2"
    >
        <div class="flex flex-col items-center">
            <div class="flex flex-col items-center gap-2 lg:items-start">
                <h3 class="text-2xl lg:text-3xl">{{ name }}</h3>
                <div class="flex gap-1 lg:gap-1.5">
                    <div
                        class="badge badge-sm md:badge-md badge-soft badge-warning"
                    >
                        Javascript
                    </div>
                    <div
                        class="badge badge-sm md:badge-md badge-soft badge-info"
                    >
                        React
                    </div>
                    <div
                        class="badge badge-sm md:badge-md badge-soft badge-secondary"
                    >
                        Tailwindcss
                    </div>
                    <div
                        class="badge badge-sm md:badge-md badge-soft badge-success"
                    >
                        Supabase
                    </div>
                </div>
                <p class="mt-3 max-w-lg text-center lg:text-left">
                    {{ description }}
                </p>
                <div class="flex justify-center gap-2 pt-6 lg:justify-start">
                    <button
                        class="btn btn-primary bg-primary/90 tracking-wider"
                    >
                        View Project
                    </button>
                    <button class="btn btn-outline btn-primary tracking-wider">
                        Github Repo
                    </button>
                </div>
            </div>
        </div>
        <div class="card mx-auto flex max-w-lg justify-center">
            <NuxtImg :src="image" :alt="name" class="rounded-2xl" />
        </div>
    </div>
</template>

<script setup>
    defineProps({
        id: Number,
        name: String,
        tools: {
            type: Object,
            tool: String,
            color: String,
        },
        description: String,
        url: String,
        github: String,
        image: String,
        index: Number,
    });
</script>
