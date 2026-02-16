<template>
	<div id="home">
		<div
			class="container-1 flex flex-col lg:flex-row w-full gap-1 bg-linear-to-br from-lime-600 to-lime-100 dark:from-lime-600 dark:to-lime-200"
		>
			<div class="container-2 flex flex-col lg:max-w-2xl lg:w-min flex-1 gap-1">
				<Card style="display: none"></Card>
				<IntroSection></IntroSection>
				<GallerySection></GallerySection>
			</div>
			<div class="container-3 flex gap-1 flex-col w-full flex-1">
				<AboutSection></AboutSection>
				<div class="container-4 flex flex-col lg:flex-row gap-1 h-min">
					<BookingSection @openBookingMenu="handleOpenBookingMenu"></BookingSection>
					<ContactSection></ContactSection>
				</div>
			</div>
		</div>
		<BookingDrawer v-model:visible="bookingMenu" />
	</div>
</template>

<script setup>
	import { ref, computed } from "vue";

	import IntroSection from "@/components/IntroSection.vue";
	import GallerySection from "@/components/GallerySection.vue";
	import AboutSection from "@/components/AboutSection.vue";
	import BookingSection from "@/components/BookingSection.vue";
	import ContactSection from "@/components/ContactSection.vue";
	import BookingDrawer from "@/components/BookingMenu.vue";

	const bookingMenu = ref(false);

	const handleOpenBookingMenu = data => {
		bookingMenu.value = true;
	};
</script>
<style></style>
