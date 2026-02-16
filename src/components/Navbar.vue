<template>
	<div id="navbar">
		<Menubar :model="items" :pt="{ root: { class: 'flex-1' } }">
			<template #start>
				<router-link to="/" activeClass="">
					<LogoIcon />
				</router-link>
			</template>

			<template #item="{ item, props }">
				<router-link v-slot="{ href, navigate, isActive }" :to="item.route" custom>
					<a
						v-ripple
						:href="href"
						v-bind="props.action"
						:class="['flex items-center gap-2 p-2', isActive && 'router-link-active']"
						@click="navigate"
					>
						<span :class="item.icon" />
						<span>{{ $t(item.label) }}</span>
					</a>
				</router-link>
			</template>

			<template #end>
				<div class="flex items-center gap-2">
					<LanguageSwitch />
					<ColorSchemeSwitch />
				</div>
			</template>
		</Menubar>
	</div>
</template>

<script setup>
	import { ref } from "vue";
	import LogoIcon from "./icons/LogoIcon.vue";
	import LanguageSwitch from "./LanguageSwitch.vue";
	import ColorSchemeSwitch from "./ColorSchemeSwitch.vue";

	const items = ref([
		{
			label: "navlinks.home",
			icon: "pi pi-home",
			route: "/"
		}
	]);
</script>

<style>
	.p-menubar {
		padding: 0.75rem !important;

		.p-menubar-item-link {
			border: 1px solid var(--p-button-outlined-secondary-border-color);
		}

		.router-link-active {
			background: var(--p-primary-200);
		}

		.phastr-app-dark .router-link-active {
			background: var(--p-surface-800);
		}

		.p-menubar-item.p-focus > .p-menubar-item-content {
			background: var(--p-menubar-background);
			color: var(--p-menubar-color);
		}
	}
</style>
