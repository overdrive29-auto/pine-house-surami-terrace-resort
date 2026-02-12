<template>
	<div id="navbar">
		<Menubar :model="items" :pt="{ root: { class: 'flex-1' } }" :breakpoint="'1024px'">
			<template #start>
				<router-link to="/" activeClass="" exactActiveClass="">
					<svg
						id="logo"
						width="64"
						height="28"
						viewBox="0 0 64 28"
						version="1.1"
						class="mr-1"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:svg="http://www.w3.org/2000/svg"
					>
						<defs>
							<linearGradient
								id="logo-gradient"
								x1="0%"
								y1="0%"
								x2="100%"
								y2="0%"
								gradientUnits="userSpaceOnUse"
							>
								<stop offset="0%" stop-color="var(--gradient-start)" />
								<stop offset="100%" stop-color="var(--gradient-end)" />
							</linearGradient>
						</defs>
						<g
							style="fill: none"
							stroke="url(#logo-gradient)"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path
								style="stroke-width: 1.5"
								d="M 62.249655,26.25 C 59.166311,18.083287 56.082966,9.9165748 52.99962,1.7498628 49.916276,9.9165748 46.832933,18.083288 43.749587,26.25 c 6.166689,0 12.333379,0 18.500068,0 z"
							/>
							<path
								style="stroke-width: 1.5"
								d="M 41.362285,26.25 C 38.27894,18.083287 35.195596,9.9165748 32.112251,1.7498618 29.028907,9.9165748 25.945562,18.083287 22.862218,26.25 c 6.166689,0 12.333378,0 18.500067,0 z"
							/>
							<path
								style="stroke-width: 1"
								d="m 51.499621,10.5 c 0,1 0,2 0,3 1,0 2,0 3,0 0,-1 0,-2 0,-3 -1,0 -2,0 -3,0 z"
							/>
							<path
								style="stroke-width: 1"
								d="m 30.499621,10.5 c 0,1 0,2 0,3 1,0 2,0 3,0 0,-1 0,-2 0,-3 -1,0 -2,0 -3,0 z"
							/>
							<path
								style="stroke-width: 1"
								d="m 54.499621,18.5 c 0,1 0,2 0,3 1,0 2,0 3,0 0,-1 0,-2 0,-3 -1,0 -2,0 -3,0 z"
							/>
							<path
								style="stroke-width: 1"
								d="m 48.499621,18.5 c 0,2.583334 0,5.166666 0,7.75 0.833333,0 1.666667,0 2.5,0 0,-2.583334 0,-5.166666 0,-7.75 -0.833333,0 -1.666667,0 -2.5,0 z"
							/>
							<path
								style="stroke-width: 1"
								d="m 33.999621,18.5 c 0,2.583334 0,5.166666 0,7.75 0.833333,0 1.666667,0 2.5,0 0,-2.583334 0,-5.166666 0,-7.75 -0.833333,0 -1.666667,0 -2.5,0 z"
							/>
							<path
								style="stroke-width: 1"
								d="m 27.499621,18.5 c 0,1 0,2 0,3 1,0 2,0 3,0 0,-1 0,-2 0,-3 -1,0 -2,0 -3,0 z"
							/>
							<path
								style="stroke-width: 1.5"
								d="m 48.75213,13 c -4.130795,0 -8.261589,0 -12.392384,0"
							/>
							<path
								style="stroke-width: 1"
								d="m 42.499621,13 c 0,4.416667 0,8.833333 0,13.25"
							/>
							<path
								style="stroke-width: 1.5"
								d="m 12.999621,1.9999998 c 0,8.3333332 0,16.6666672 0,25.0000002"
							/>
							<path
								style="stroke-width: 1.5"
								d="M 5.8869221,16.0805 C 9.0210821,16.266377 12.311364,14.15053 12.999621,11"
							/>
							<path
								style="stroke-width: 1.5"
								d="M 20.112321,16.0805 C 16.978161,16.266376 13.687879,14.15053 12.999621,11"
							/>
							<path
								id="path7-7"
								style="stroke-width: 1.5"
								d="M 23.935287,22.249481 C 19.292954,22.472828 13.99669,19.903493 12.980658,15.008568"
							/>
							<path
								style="stroke-width: 1.5"
								d="M 1.0320096,22.496948 C 5.9569041,22.704841 11.799215,20.239329 12.999621,15"
							/>
							<path
								style="stroke-width: 1.5"
								d="M 8.9352226,10.128806 C 12.584213,9.4033828 12.855232,4.9663248 12.999621,1.9999998"
							/>
							<path
								style="stroke-width: 1.5"
								d="M 17.064021,10.128797 C 13.415023,9.4033888 13.144013,4.9663198 12.999621,1.9999998"
							/>
							<path
								style="stroke-width: 1.5"
								d="m 41.362285,26.25 c 0.795767,0 1.591535,0 2.387302,0"
							/>
						</g>
					</svg>
				</router-link>
			</template>
			<template #item="{ item, props, hasSubmenu, root }">
				<router-link
					v-if="item.route"
					v-slot="{ href, navigate, isActive, isExactActive }"
					:to="item.route"
					custom
				>
					<a
						v-ripple
						:href="href"
						v-bind="props.action"
						:active="isActive"
						:class="[
							isActive && 'router-link-active',
							isExactActive && 'router-link-exact-active',
							item.disabled && 'disabled'
						]"
						@click="navigate"
					>
						<span :class="item.icon" />
						<span>{{ $t(item.label) }}</span>
					</a>
				</router-link>
				<a v-else v-ripple class="flex items-center" v-bind="props.action">
					<span>{{ $t(item.label) }}</span>
					<Badge
						v-if="item.badge"
						:class="{ 'ml-auto': !root, 'ml-2': root }"
						:value="item.badge"
					/>
					<span
						v-if="item.shortcut"
						class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1"
						>{{ item.shortcut }}</span
					>
					<i
						v-if="hasSubmenu"
						:class="[
							'pi pi-angle-down ml-auto',
							{ 'pi-angle-down': root, 'pi-angle-right': !root }
						]"
					/>
				</a>
			</template>
			<template #end>
				<div class="flex items-center gap-2">
					<IconField>
						<InputIcon class="pi pi-search" />
						<InputText
							v-model="value1"
							:placeholder="$t('navlinks.find_reservation')"
						/>
					</IconField>
					<LanguageSwitch />
					<ColorSchemeSwitch />
				</div>
			</template>
		</Menubar>
	</div>
</template>

<script setup>
	import { ref, computed } from "vue";
	import { useI18n } from "vue-i18n";
	import LanguageSwitch from "./LanguageSwitch.vue";
	import ColorSchemeSwitch from "./ColorSchemeSwitch.vue";

	const { t, locale } = useI18n();

	const items = ref([
		{
			label: "navlinks.home",
			icon: "pi pi-home",
			route: "/",
			disabled: false
		},
		{
			label: "navlinks.about",
			icon: "pi pi-info-circle",
			route: "/about",
			disabled: false
		},
		{
			label: "navlinks.gallery",
			icon: "pi pi-images",
			route: "/gallery",
			disabled: false
		},
		{
			label: "navlinks.book",
			icon: "pi pi-pen-to-square",
			route: "/booking",
			disabled: false
		},
		{
			label: "navlinks.contact",
			icon: "pi pi-envelope",
			route: "/contact",
			disabled: false
		}
	]);
</script>
<style>
	.p-menubar {
		padding: 0.75rem !important;

		.p-menubar-item-link {
			border: 1px solid var(--p-button-outlined-secondary-border-color);
		}

		& .router-link-active,
		& .router-link-exact-active {
			background: var(--p-primary-200);
		}

		.phstr-app-dark & .router-link-active,
		.phstr-app-dark & .router-link-exact-active {
			background: var(--p-surface-800);
		}

		/* &.p-menubar-mobile { */
		.p-menubar-item.p-focus > .p-menubar-item-content {
			background: var(--p-menubar-background);
			color: var(--p-menubar-color);
		}
		/* } */

		#logo {
			width: 100px;
			height: auto;
		}
	}
</style>
