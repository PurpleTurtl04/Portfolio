<template>
    <div class="container mx-auto mt-30 px-6 lg:mt-40">
        <div class="flex flex-col items-center">
            <h2 class="text-center text-3xl lg:text-4xl">Projects</h2>
            <NuxtImg
                src="/images/Accent2.png"
                width="10"
                height="75"
                alt="A line with a circle at the bottom"
                class="scale-75"
            />
        </div>
        <Project
            v-for="(project, index) in projectListLimited"
            :key="project.id"
            :="project"
            :index="index"
        />
        <div class="mt-2 text-center">
            <NuxtLink to="/projects" class="link text-xl"
                >View All Projects</NuxtLink
            >
        </div>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue';
    import projects from '~/data/projects.json';

    const projectList = ref(projects);
    const projectListLimited = computed(() => {
        return projectList.value.slice(0, 3);
    });
</script>
