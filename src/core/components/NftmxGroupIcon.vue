<template>
    <div class="flex text-sm text-white cursor-pointer">
        <div
            class="border transition border-black w-7.5 h-8 px-2 pt-1.25 hover:bg-primary-900 bg-tertiary-800"
        >
            <font-awesome-icon :icon="['fas', 'copy']" />
        </div>
        <div
            class="border-y transition border-r border-black w-7.5 h-8 px-2 pt-1.25 hover:bg-primary-900 bg-tertiary-800"
        >
            <font-awesome-icon :icon="['fas', 'globe']" />
        </div>
        <div
            class="border-y border-r transition border-black w-7.5 h-8 px-2.25 pt-1.25 hover:bg-primary-900 bg-tertiary-800"
        >
            <font-awesome-icon :icon="['fab', 'twitter']" />
        </div>
        <div
            class="border-y border-black transition w-7.5 h-8 px-2 pt-1.25 hover:bg-primary-900 bg-tertiary-800"
        >
            <font-awesome-icon :icon="['fab', 'instagram']" />
        </div>
        <router-link
            to="profile-setting"
            class="border border-black w-8 transition h-8 px-2 pt-1.25 hover:bg-primary-900 bg-tertiary-800"
        >
            <font-awesome-icon :icon="['fas', 'cog']" />
        </router-link>
    </div>
</template>
