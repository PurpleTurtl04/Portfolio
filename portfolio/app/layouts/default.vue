<template>
    <div>
        <nav class="3xl:container mx-auto">
            <div class="navbar bg-base-100 shadow-sm md:px-8">
                <div class="navbar-start">
                    <div class="dropdown">
                        <div
                            tabindex="0"
                            role="button"
                            class="btn btn-ghost md:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabindex="-1"
                            class="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                <NuxtLink to="/" @click="closeDropdown"
                                    >Home</NuxtLink
                                >
                            </li>
                            <li>
                                <NuxtLink to="/about" @click="closeDropdown"
                                    >About</NuxtLink
                                >
                            </li>
                            <li>
                                <NuxtLink to="/projects" @click="closeDropdown"
                                    >Projects</NuxtLink
                                >
                            </li>
                            <li>
                                <a>Contact</a>
                            </li>
                        </ul>
                    </div>
                    <NuxtLink
                        to="/"
                        class="btn btn-ghost no-animations hover:current-color text-xl hover:bg-transparent hover:text-current"
                        >Nick Edwards</NuxtLink
                    >
                </div>
                <div class="navbar-end hidden md:flex">
                    <ul class="menu menu-horizontal px-1">
                        <li>
                            <NuxtLink to="/">Home</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/about">About</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/projects">Projects</NuxtLink>
                        </li>
                        <li>
                            <a>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

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

<script setup>
    const closeDropdown = () => {
        // Blur the currently focused element (the link/button clicked inside the dropdown)
        document.activeElement?.blur();
    };
</script>
