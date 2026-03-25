<template>
    <div
        class="container mx-auto grid max-w-7xl grid-cols-1 items-center justify-center gap-6 pb-6 lg:mt-4 lg:grid-cols-2"
    >
        <div
            :class="`flex flex-col items-center ${id % 2 == 0 ? 'lg:order-1' : 'lg:order-2'}`"
        >
            <div
                class="mt-4 flex flex-col items-center gap-2 lg:mt-0 lg:items-start"
            >
                <h3 class="text-2xl lg:text-3xl">{{ name }}</h3>
                <div class="flex gap-1 lg:gap-1.5">
                    <div
                        v-for="tool in tools"
                        :class="`badge badge-sm md:badge-md badge-soft ${tool.color}`"
                    >
                        {{ tool.tool }}
                    </div>
                </div>
                <p class="mt-2 max-w-lg text-center lg:text-left">
                    {{ description }}
                </p>
                <div
                    class="flex justify-center gap-2 pt-3 lg:justify-start lg:pt-6"
                >
                    <a :href="url" target="_blank">
                        <button
                            class="btn btn-primary bg-primary/90 tracking-wider"
                        >
                            View Project
                        </button>
                    </a>
                    <a :href="github" target="_blank">
                        <button
                            class="btn btn-outline btn-primary tracking-wider"
                        >
                            Github Repo
                        </button>
                    </a>
                </div>
            </div>
        </div>
        <div
            :class="`card mx-auto flex max-w-lg justify-center ${id % 2 == 0 ? 'lg:order-2' : 'lg:order-1'}`"
        >
            <NuxtImg :src="image" :alt="name" class="rounded-2xl" />
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
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
