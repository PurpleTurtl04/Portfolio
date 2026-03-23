<template>
    <div>
        <div class="navbar bg-base-200 px-6">
            <div class="flex-1">
                <NuxtLink to="/" class="text-xl font-bold">MyApp</NuxtLink>
            </div>

            <div class="flex gap-2">
                <NuxtLink to="/" class="btn btn-ghost">Home</NuxtLink>
                <NuxtLink to="/about" class="btn btn-ghost">About</NuxtLink>
                <NuxtLink to="/projects" class="btn btn-ghost"
                    >Projects</NuxtLink
                >
            </div>
        </div>

        <main class="container mx-auto py-6">
            <slot />
        </main>
    </div>
</template>
