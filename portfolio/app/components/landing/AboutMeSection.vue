<template>
    <div
        class="container mx-auto mt-30 grid max-w-7xl grid-cols-1 items-center justify-center gap-6 px-6 lg:mt-40 lg:grid-cols-2"
    >
        <div class="flex flex-col items-center lg:order-2">
            <h2 class="pb-2 text-center text-3xl lg:text-4xl">About Me</h2>
            <p class="max-w-lg text-justify lg:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                non nisi eget ipsum lacinia varius et maximus magna. Sed
                hendrerit purus imperdiet elementum condimentum. Mauris cursus
                sagittis iaculis. Aenean id magna non ipsum aliquet luctus.
                Maecenas porta sollicitudin mauris quis cursus. Vivamus rutrum
                pharetra dignissim. Nunc dignissim sapien non eros egestas, sed
                dignissim est lacinia. Fusce rutrum ligula sed eros vestibulum,
                efficitur pulvinar risus posuere.
            </p>
        </div>
        <div class="flex justify-center lg:gap-4">
            <div>
                <NuxtImg
                    src="/images/Accent.png"
                    width="10"
                    height="355"
                    alt="Three lines spaced with two circles in-between them"
                    class="hidden scale-75 lg:block"
                />
            </div>
            <div
                class="flex flex-col justify-center gap-6 md:-ml-8 md:flex-row md:gap-20 md:text-center lg:order-1 lg:ml-0 lg:flex-col lg:gap-6 lg:text-start"
            >
                <div
                    class="flex flex-col items-center justify-center gap-2 lg:flex-row lg:justify-start lg:gap-4"
                >
                    <NuxtImg
                        src="/images/Eight.svg"
                        width="75"
                        height="75"
                        alt="The number eight inside a square"
                        class="max-w-15"
                    />
                    <p class="md:max-w-24 lg:max-w-none">
                        8+ Years of Experience
                    </p>
                </div>
                <div
                    class="flex flex-col items-center justify-center gap-2 lg:flex-row lg:justify-start lg:gap-4"
                >
                    <NuxtImg
                        src="/images/Dev.svg"
                        width="75"
                        height="75"
                        alt="Angle brackets in a square"
                        class="max-w-15"
                    />
                    <p class="md:max-w-24 lg:max-w-none">
                        Web/Software Development
                    </p>
                </div>
                <div
                    class="flex flex-col items-center justify-center gap-2 lg:flex-row lg:justify-start lg:gap-4"
                >
                    <NuxtImg
                        src="/images/Design.svg"
                        width="75"
                        height="75"
                        alt="A pencil and ruler making an X"
                        class="max-w-15"
                    />
                    <p class="md:max-w-12 lg:max-w-none">Web Design</p>
                </div>
            </div>
        </div>
    </div>
</template>
