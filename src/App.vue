<template>
	<div class="contents">
		<Navbar />
		<router-view />
		<Footer />
	</div>
</template>

<script setup>
	import Navbar from "../src/components/Navbar.vue";
	import Footer from "../src/components/Footer.vue";
</script>

<style></style>
