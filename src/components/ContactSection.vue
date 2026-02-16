<template>
	<div class="flex flex-col bg-surface-0 dark:bg-surface-900">
		<div class="phastr-section-header">
			<i class="pi pi-address-book" style="font-size: 1.125rem"></i>
			<h1 class="text-lg">{{ $t("homepage.contactsection.title") }}</h1>
		</div>
		<div class="flex flex-col flex-1 justify-end gap-2 p-4">
			<a
				href="https://maps.google.com/?q=26+მაისი+49ა+Surami+Georgia+5700"
				target="_blank"
				rel="noopener noreferrer"
				class="contact-item flex flex-row items-center gap-2 no-underline text-color"
			>
				<i class="pi pi-map-marker" style="font-size: 1.5rem"></i>
				<span>{{ $t("homepage.contactsection.address") }}</span>
			</a>
			<a
				href="mailto:m.udzilauri@hotmail.com"
				class="contact-item flex flex-row items-center gap-2 no-underline text-color"
			>
				<i class="pi pi-envelope" style="font-size: 1.5rem"></i>
				<span>{{ $t("homepage.contactsection.email") }}</span>
			</a>
			<a
				href="https://www.facebook.com/profile.php?id=61578309970699"
				target="_blank"
				rel="noopener noreferrer"
				class="contact-item flex flex-row items-center gap-2 no-underline text-color"
			>
				<i class="pi pi-facebook" style="font-size: 1.5rem"></i>
				<span>{{ $t("homepage.contactsection.facebook") }}</span>
			</a>
			<a
				href="tel:+995511185041"
				class="contact-item flex flex-row items-center gap-2 no-underline text-color"
			>
				<i class="pi pi-phone" style="font-size: 1.5rem"></i>
				<span>{{ $t("homepage.contactsection.phone") }}</span>
			</a>
			<a
				href="https://wa.me/995511185041"
				target="_blank"
				rel="noopener noreferrer"
				class="contact-item flex flex-row items-center gap-2 no-underline text-color"
			>
				<i class="pi pi-whatsapp" style="font-size: 1.5rem"></i>
				<span>{{ $t("homepage.contactsection.whatsapp") }}</span>
			</a>
		</div>
	</div>
</template>
<script setup></script>
