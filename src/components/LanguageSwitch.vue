<template>
	<div>
		<Button
			type="button"
			variant="outlined"
			class="p-button-icon-only"
			severity="secondary"
			aria-haspopup="true"
			aria-controls="language_menu"
			@click="toggleMenu"
		>
			<span :class="`flag-icon flag-icon-${flagMap[locale]}`"></span>
		</Button>

		<Menu id="language_menu" ref="menu" :model="items" :popup="true">
			<template #item="{ item }">
				<span :class="item.icon" />
			</template>
		</Menu>
	</div>
</template>

<script setup>
	import { ref } from "vue";
	import { useI18n } from "vue-i18n";

	const { locale } = useI18n();

	const menu = ref();

	const flagMap = {
		en: "gb",
		ka: "ge",
		ru: "ru"
	};

	const items = ref([
		{
			icon: "flag-icon flag-icon-gb",
			command: () => selectLanguage("en")
		},
		{
			icon: "flag-icon flag-icon-ge",
			command: () => selectLanguage("ka")
		},
		{
			icon: "flag-icon flag-icon-ru",
			command: () => selectLanguage("ru")
		}
	]);

	const toggleMenu = event => {
		menu.value.toggle(event);
	};

	const selectLanguage = code => {
		locale.value = code;
		localStorage.setItem("preferredLanguage", code);
	};
</script>
<style>
	.flag-icon {
		line-height: inherit !important;
		filter: grayscale(25%);
	}

	#language_menu {
		min-width: min-content;

		& div {
			padding: var(--p-button-padding-y) var(--p-button-padding-x);
			cursor: pointer;
		}
	}
</style>
