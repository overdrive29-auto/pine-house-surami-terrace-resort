<template>
	<Button
		:icon="appDark ? 'pi pi-moon' : 'pi pi-sun'"
		variant="outlined"
		severity="secondary"
		aria-label="Theme"
		@click="toggleDarkMode()"
	/>
</template>
<script setup>
	import { ref } from "vue";

	const appDark = ref(true);

	function toggleDarkMode() {
		document.documentElement.classList.toggle("phastr-app-dark");
		appDark.value = !appDark.value;
	}
</script>
<style></style>
