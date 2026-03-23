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
                            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                        >
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
                    <NuxtLink to="/" class="btn btn-ghost text-xl"
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
    </div>
</template>
