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
        />
        <!-- <div
            class="container mx-auto mt-2 grid grid-cols-1 items-center justify-center gap-6 px-6 lg:grid-cols-2"
        >
            <div class="flex flex-col items-center">
                <div class="flex flex-col items-center gap-2 lg:items-start">
                    <h3 class="text-2xl lg:text-3xl">Beckaroo & The Zoo</h3>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis non nisi eget ipsum lacinia varius et maximus
                        magna. Sed hendrerit purus imperdiet elementum
                        condimentum. Mauris cursus sagittis iaculis.
                    </p>
                    <div
                        class="flex justify-center gap-2 pt-6 lg:justify-start"
                    >
                        <button
                            class="btn btn-primary bg-primary/90 tracking-wider"
                        >
                            View Project
                        </button>
                        <button
                            class="btn btn-outline btn-primary tracking-wider"
                        >
                            Github Repo
                        </button>
                    </div>
                </div>
            </div>
            <div class="card mx-auto flex max-w-lg justify-center">
                <NuxtImg
                    src="/images/Beckaroo.png"
                    alt="Landing page for the website Beckaroo and the Zoo with a picture of a Corgi."
                    class="rounded-2xl"
                />
            </div>
        </div> -->
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
