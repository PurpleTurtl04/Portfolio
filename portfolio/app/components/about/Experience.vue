<template>
    <div class="mt-15 flex flex-col items-center px-6">
        <div class="flex max-w-3xl flex-col items-center">
            <h2 class="text-center text-3xl lg:text-4xl">Experience</h2>
            <NuxtImg
                src="/images/Accent2.png"
                width="10"
                height="75"
                alt="A line with a circle at the bottom"
                class="scale-75"
            />
            <div
                class="mb-8"
                v-for="experience in experienceList"
                :key="experience.id"
            >
                <h3 class="text-xl lg:text-2xl">
                    {{ experience.role }} -
                    <span class="italic">{{ experience.company }}</span>
                </h3>
                <h4 class="text-md lg:text-lg">
                    {{ experience.startDate }} - {{ experience.endDate }}
                </h4>
                <p class="pt-2">{{ experience.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import experience from '~/data/experience.json';

    const experienceList = ref(experience);
</script>
