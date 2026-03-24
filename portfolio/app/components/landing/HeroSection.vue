<template>
    <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="max-w-3xl">
                <NuxtImg
                    src="/images/HeroImage.png"
                    alt="Man holding a baby"
                    width="905"
                    height="912"
                />
            </div>
            <div class="text-center lg:text-left">
                <h2 class="text-2xl md:text-3xl lg:text-4xl">Hello I&apos;m</h2>
                <h1
                    class="text-primary pt-3 text-6xl font-extrabold md:text-7xl lg:ml-5 lg:text-8xl"
                >
                    Nick
                </h1>
                <h3
                    class="max-w-83 pt-3 text-lg md:max-w-sm md:text-xl lg:max-w-lg lg:text-2xl"
                >
                    A Full-Stack Web
                    <span class="text-secondary/80 font-bold"> Developer </span>
                    &
                    <span class="text-accent/80 font-bold"> Designer </span>
                    with an analytical background
                </h3>
                <div class="flex justify-center gap-2 pt-6 lg:justify-start">
                    <button class="btn btn-primary">Got a Project?</button>
                    <button class="btn btn-outline btn-primary">
                        My Resume
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
