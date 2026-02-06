<template>
    <div id="navbar" class="card">
        <Menubar :model="items">
            <template #start>
                <!-- <router-link to="/" activeClass="" exactActiveClass="">
                    <span class="text-2xl permanent-marker-regular px-3">Pine House & Surami Terrace Resort</span>
                </router-link> -->
                <svg
                id="logo"
                class="m-2"
                width="62"
                height="26"
                viewBox="0 0 62 26"
                xmlns="http://www.w3.org/2000/svg">
                <g style="fill:none;stroke:currentColor">
                    <path
                    style="stroke-width:1.5;"
                    d="M 61.249655,25.25 C 58.166311,17.083287 55.082966,8.9165749 51.99962,0.74986287 48.916276,8.9165749 45.832933,17.083288 42.749587,25.25 c 6.166689,0 12.333379,0 18.500068,0 z" />
                    <path
                    style="stroke-width:1.5;"
                    d="M 40.362285,25.25 C 37.27894,17.083287 34.195596,8.9165749 31.112251,0.74986187 28.028907,8.9165749 24.945562,17.083287 21.862218,25.25 c 6.166689,0 12.333378,0 18.500067,0 z" />
                    <path
                    style="stroke-width:1;"
                    d="m 50.499621,9.4999999 c 0,1.0000001 0,2.0000001 0,3.0000001 1,0 2,0 3,0 0,-1 0,-2 0,-3.0000001 -1,0 -2,0 -3,0 z" />
                    <path
                    style="stroke-width:1;"
                    d="m 29.499621,9.4999999 c 0,1.0000001 0,2.0000001 0,3.0000001 1,0 2,0 3,0 0,-1 0,-2 0,-3.0000001 -1,0 -2,0 -3,0 z" />
                    <path
                    style="stroke-width:1;"
                    d="m 53.499621,17.5 c 0,1 0,2 0,3 1,0 2,0 3,0 0,-1 0,-2 0,-3 -1,0 -2,0 -3,0 z" />
                    <path
                    style="stroke-width:1;"
                    d="m 47.499621,17.5 c 0,2.666667 0,5.333333 0,8 0.833333,0 1.666667,0 2.5,0 0,-2.666667 0,-5.333333 0,-8 -0.833333,0 -1.666667,0 -2.5,0 z" />
                    <path
                    style="stroke-width:1;"
                    d="m 32.999621,17.5 c 0,2.666667 0,5.333333 0,8 0.833333,0 1.666667,0 2.5,0 0,-2.666667 0,-5.333333 0,-8 -0.833333,0 -1.666667,0 -2.5,0 z" />
                    <path
                    style="stroke-width:1;"
                    d="m 26.499621,17.5 c 0,1 0,2 0,3 1,0 2,0 3,0 0,-1 0,-2 0,-3 -1,0 -2,0 -3,0 z" />
                    <path
                    style="stroke-width:1.5;"
                    d="m 47.75213,12 c -4.130795,0 -8.261589,0 -12.392384,0"/>
                    <path
                    style="stroke-width:1;"
                    d="m 41.499621,12 c 0,4.666667 0,9.333334 0,14.000001"/>
                    <path
                    style="stroke-width:1.5;"
                    d="m 11.999621,0.99999987 c 0,8.33333303 0,16.66666713 0,25.00000013"
                    id="path4" />
                    <path
                    style="stroke-width:1.5;"
                    d="m 4.8869219,15.0805 c 3.13416,0.185877 6.4244421,-1.92997 7.1126991,-5.0805001"/>
                    <path
                    style="stroke-width:1.5;"
                    d="m 19.112321,15.0805 c -3.13416,0.185876 -6.424442,-1.92997 -7.1127,-5.0805001"/>
                    <path
                    style="stroke-width:1.5;"
                    d="M 22.935287,21.249481 C 18.292954,21.472828 12.99669,18.903493 11.980658,14.008568"/>
                    <path
                    style="stroke-width:1.5;"
                    d="M 0.03200941,21.496948 C 4.9569039,21.704841 10.799215,19.239329 11.999621,14"/>
                    <path
                    style="stroke-width:1.5;"
                    d="M 7.9352224,9.1288059 C 11.584213,8.4033829 11.855232,3.9663249 11.999621,0.99999987"/>
                    <path
                    style="stroke-width:1.5;"
                    d="m 16.064021,9.1287969 c -3.648998,-0.725408 -3.920008,-5.162477 -4.0644,-8.12879703"/>
                    <path
                    style="stroke-width:1.5;"
                    d="m 40.362285,25.25 c 0.795767,0 1.591535,0 2.387302,0"/>
                </g>
                </svg>
            </template>
            <template #item="{ item, props, hasSubmenu, root }">
                <router-link v-if="item.route" v-slot="{ href, navigate, isActive, isExactActive }" :to="item.route"
                    custom>
                    <a v-ripple :href="href" v-bind="props.action" @click="navigate" :active="isActive"
                        :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active', item.disabled && 'disabled']">
                        <!-- , 'border', 'border-surface-200', 'dark:border-surface-700' -->
                        <span :class="item.icon" />
                        <span>{{ $t(item.label) }}</span>
                    </a>
                </router-link>
                <a v-else v-ripple class="flex items-center" v-bind="props.action">
                    <span>{{ $t(item.label) }}</span>
                    <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
                    <span v-if="item.shortcut"
                        class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{
                            item.shortcut }}</span>
                    <i v-if="hasSubmenu"
                        :class="['pi pi-angle-down ml-auto', { 'pi-angle-down': root, 'pi-angle-right': !root }]" />
                </a>
            </template>
            <template #end>
                <div class="flex items-center gap-2">
                    <IconField>
                        <InputIcon class="pi pi-search" />
                        <InputText v-model="value1" placeholder="Booking ID" />
                    </IconField>
                    <Button type="button" variant="outlined" id="language_switch_button" class="p-button-icon-only"
                        severity="secondary" aria-haspopup="true" aria-controls="language_switch_dropdown_menu"
                        @click="toggleLanguageSwitchDropdownMenu">
                        <span :class="`flag-icon flag-icon-${flagMap[locale]}`"></span>
                    </Button>
                    <Menu ref="languageSwitchDropdownMenu" id="language_switch_dropdown_menu"
                        :model="languageSwitchDropdownMenuItems" :popup="true">
                        <template #item="{ item }">
                            <span :class="item.icon" />
                        </template>
                    </Menu>
                    <Button :icon="phstrAppDark ? 'pi pi-moon' : 'pi pi-sun'" variant="outlined" severity="secondary"
                        aria-label="Theme" @click="toggleDarkMode()" />
                </div>
            </template>
        </Menubar>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

// Menu items
const items = ref([
    {
        label: 'navlinks.home',
        icon: 'pi pi-home',
        route: '/',
        disabled: false
    },
    {
        label: 'navlinks.about',
        icon: 'pi pi-info-circle',
        route: '/about',
        disabled: false
    },
        {
        label: 'navlinks.gallery',
        icon: 'pi pi-images',
        route: '/gallery',
        disabled: false
    },
    {
        label: 'navlinks.contact',
        icon: 'pi pi-envelope',
        route: '/contact',
        disabled: false
    },
]);

// Theme switch
const phstrAppDark = ref(true);

function toggleDarkMode() {
    document.documentElement.classList.toggle('phstr-app-dark');
    phstrAppDark.value = !phstrAppDark.value;
}

// Language switch
const flagMap = { en: 'gb', ka: 'ge', ru: 'ru' };

const languageSwitchDropdownMenu = ref();
const languageSwitchDropdownMenuItems = ref([
    { icon: 'flag-icon flag-icon-gb', command: () => selectLanguage('en') },
    { icon: 'flag-icon flag-icon-ge', command: () => selectLanguage('ka') },
    { icon: 'flag-icon flag-icon-ru', command: () => selectLanguage('ru') },
]);

const toggleLanguageSwitchDropdownMenu = (event) => {
    languageSwitchDropdownMenu.value.toggle(event);
};

const selectLanguage = (code) => { locale.value = code };
</script>

<style>
.p-menubar {
    & .p-menubar-item-link {
        border-radius: var(--p-menubar-base-item-border-radius);
        opacity: 0.9;

        &:hover {
            opacity: 1;
        }
    }

    & .router-link-active,
    & .router-link-exact-active {
        opacity: 1;
        color: var(--p-menubar-item-focus-color);
        background: var(--p-primary-200);
        border-radius: var(--p-menubar-base-item-border-radius);
    }

    .phstr-app-dark   & .router-link-active,
    .phstr-app-dark & .router-link-exact-active {
        opacity: 1;
        color: var(--p-menubar-item-focus-color);
        background: var(--p-primary-800);
        border-radius: var(--p-menubar-base-item-border-radius);
    }

    /* &.p-menubar-mobile { */
    .p-menubar-item.p-focus>.p-menubar-item-content {
        background: var(--p-menubar-background);
        color: var(--p-menubar-color);
    }

    /* } */
}

.flag-icon {
    line-height: inherit !important;
    filter: grayscale(25%);
}

#language_switch_dropdown_menu {
    min-width: min-content;

    & div {
        padding: var(--p-button-padding-y) var(--p-button-padding-x);
        cursor: pointer;
    }
}

#user_account_overlay_dropdown_menu_list li:last-child>div>a {
    padding-bottom: 0.75rem;
}

#logo {
  width: 125px;
  height: auto;
}

.phstr-app-dark #logo {
  color: white;
}
</style>