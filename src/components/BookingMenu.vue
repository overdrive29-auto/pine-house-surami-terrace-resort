<template>
	<div class="card">
		<Drawer
			v-model:visible="visibleBookingMenu"
			header="Bottom Drawer"
			position="bottom"
			style="height: auto"
			class="h-full w-full"
		>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
			</p>
		</Drawer>
	</div>
</template>

<script setup>
	import { ref, computed } from "vue";

	const props = defineProps({
		visible: Boolean
	});

	const emit = defineEmits(["update:visible"]);

	const visibleBookingMenu = computed({
		get: () => props.visible,
		set: val => emit("update:visible", val)
	});
</script>
