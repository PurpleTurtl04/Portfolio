<template>
    <div>
        <Navbar />
        <main class="container mx-auto py-6">
            <slot />
        </main>
        <footer
            class="mx-auto mt-30 flex flex-col items-center justify-center bg-white/10 lg:mt-30 lg:mt-40"
        >
            <h2 class="mt-6 pb-4 text-2xl">Nick Edwards</h2>
            <div class="flex gap-4 pb-6">
                <NuxtImg
                    src="/images/Phone.svg"
                    width="35"
                    height="35"
                    alt="A phone symbol"
                />
                <NuxtImg
                    src="/images/Mail.svg"
                    width="35"
                    height="35"
                    alt="A mail envelope"
                />
                <NuxtImg
                    src="/images/LinkedIn.svg"
                    width="35"
                    height="35"
                    alt="The LinkedIn logo"
                />
            </div>
            <p class="mb-4">&copy; 2026 Nick Edwards. All rights reserved.</p>
        </footer>
    </div>
</template>
