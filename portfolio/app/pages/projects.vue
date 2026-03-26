<template>
    <div class="mt-15 px-6">
        <div class="flex flex-col items-center">
            <h2 class="text-center text-3xl lg:text-4xl">Portfolio</h2>
            <NuxtImg
                src="/images/Accent2.png"
                width="10"
                height="75"
                alt="A line with a circle at the bottom"
                class="scale-75"
            />
        </div>
        <Project
            v-for="(project, index) in projects"
            :key="project.id"
            :="project"
            :index="index"
        />
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import projects from '~/data/projects.json';

    const projectList = ref(projects);
</script>
