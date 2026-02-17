<template>
	<div id="home">
		<div
			class="phastr-container grid gap-1 lg:gap-px w-full min-h-0 grid-cols-1 lg:grid-cols-[1fr_2fr] bg-linear-to-br from-primary-600 to-primary-100 dark:from-primary-600 dark:to-primary-200"
		>
			<div class="grid grid-rows-[1fr_auto] gap-1 lg:gap-px min-h-0">
				<IntroSection></IntroSection>
				<GallerySection></GallerySection>
			</div>

			<div class="grid grid-rows-[1fr_auto] gap-1 lg:gap-px min-h-0">
				<AboutSection></AboutSection>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-px">
					<BookingSection @openBookingMenu="handleOpenBookingMenu"></BookingSection>
					<ContactSection></ContactSection>
				</div>
			</div>
		</div>
		<Card style="display: none"></Card>
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
