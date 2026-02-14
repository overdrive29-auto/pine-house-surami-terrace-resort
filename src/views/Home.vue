<template>
	<div id="home">
		<div
			class="container-1 flex flex-col lg:flex-row w-full gap-2 bg-linear-to-br from-lime-600 to-lime-100 dark:from-lime-600 dark:to-lime-200"
		>
			<div class="container-2 flex flex-col lg:max-w-2xl lg:w-min flex-1 gap-2">
				<Card style="display: none"></Card>
				<div class="intro-section phastr-card flex-col flex-1 justify-center">
					<h1
						class="text-6xl max-w-100 bg-linear-to-r from-primary-600 to-primary-400 dark:from-primary-200 dark:to-primary-100 bg-clip-text text-transparent text-pretty whitespace-pre-line font-medium tracking-tighter"
					>
						Pine House & <br />Surami Terrace Resort
					</h1>
					<div
						class="pt-2 text-surface-600 dark:text-surface-200 text-lg leading-tight whitespace-pre-line"
					>
						{{ $t("homepage.intro") }}
					</div>
				</div>
				<div class="gallery-section phastr-card p-0!">
					<Galleria
						:pt="{
							root: { class: '!border-none !rounded-none' }
						}"
						:value="hotelImages"
						:responsiveOptions="responsiveOptions"
						:numVisible="4"
						:showItemNavigators="true"
						:showThumbnails="true"
						containerClass="lg:max-w-2xl"
						:circular="true"
						:autoPlay="true"
						:transitionInterval="5000"
					>
						<template #item="slotProps">
							<div
								class="w-full aspect-[4/3] lg:aspect-[16/9]"
								style="overflow: hidden"
							>
								<img
									:src="slotProps.item.itemImageSrc"
									:alt="slotProps.item.alt"
									style="
										width: 100%;
										height: 100%;
										object-fit: cover;
										display: block;
									"
								/>
							</div>
						</template>
						<template #thumbnail="slotProps">
							<div class="px-1 aspect-[16/9]" style="overflow: hidden">
								<img
									:src="slotProps.item.thumbnailImageSrc"
									:alt="slotProps.item.alt"
									style="width: calc(100%); height: calc(100%); object-fit: cover"
								/>
							</div>
						</template>
					</Galleria>
				</div>
			</div>
			<div class="container-3 flex flex-col w-full flex-1 gap-2">
				<div class="about-section phastr-card flex-col flex-2 gap-0! p-0!">
					<div
						class="flex flex-row items-center gap-2 border-b border-surface-200 dark:border-surface-700 p-5"
					>
						<i class="pi pi-info-circle" style="font-size: 1.125rem"></i>
						<h1 class="text-lg">{{ $t("homepage.aboutsection.title") }}</h1>
					</div>

					<div
						class="flex flex-col lg:flex-row flex-1 items-center border-b border-surface-200 dark:border-surface-700"
					>
						<div
							class="flex flex-none lg:flex-col self-stretch items-center lg:justify-center bg-surface-100 dark:bg-surface-800 border-r border-surface-200 dark:border-surface-700 gap-2 p-4 lg:w-36"
						>
							<i class="pi pi-map" style="font-size: 1.5rem"></i>
							<h1 class="text-lg">{{ $t("homepage.aboutsection.resort") }}</h1>
						</div>
						<div class="flex flex-1 flex-wrap text-base gap-2 p-4">
							<Chip
								:label="$t('homepage.aboutsection.resort_items.nature')"
								icon="pi pi-sparkles"
							/>
							<Chip
								:label="
									$t('homepage.aboutsection.resort_items.dry_subtropical_climate')
								"
								icon="pi pi-sparkles"
							/>
							<Chip
								:label="
									$t('homepage.aboutsection.resort_items.therapeutic_environment')
								"
								icon="pi pi-heart-fill"
							/>
							<Chip
								:label="$t('homepage.aboutsection.resort_items.ancient_monuments')"
								icon="pi pi-building-columns"
							/>
						</div>
					</div>
					<div
						class="flex flex-col lg:flex-row flex-1 items-center border-b border-surface-200 dark:border-surface-700"
					>
						<div
							class="flex flex-none lg:flex-col self-stretch items-center lg:justify-center bg-surface-100 dark:bg-surface-800 border-r border-surface-200 dark:border-surface-700 gap-2 p-4 lg:w-36"
						>
							<i class="pi pi-image" style="font-size: 1.5rem"></i>
							<h1 class="text-lg">{{ $t("homepage.aboutsection.environment") }}</h1>
						</div>
						<div class="flex flex-1 flex-wrap text-base gap-2 p-4">
							<Chip
								:label="$t('homepage.aboutsection.environment_items.mountains')"
								icon="pi pi-sparkles"
							/>
							<Chip
								:label="$t('homepage.aboutsection.environment_items.pine_forest')"
								icon="pi pi-sparkles"
							/>
							<Chip
								:label="$t('homepage.aboutsection.environment_items.views')"
								icon="pi pi-sparkles"
							/>
							<Chip
								:label="$t('homepage.aboutsection.environment_items.peace_quiet')"
								icon="pi pi-face-smile"
							/>
							<Chip
								:label="$t('homepage.aboutsection.environment_items.free_parking')"
								icon="pi pi-car"
							/>
							<Chip
								:label="$t('homepage.aboutsection.environment_items.private_yard')"
								icon="pi pi-sparkles"
							/>
							<Chip
								:label="$t('homepage.aboutsection.environment_items.pool')"
								icon="pi pi-check-circle"
							/>
						</div>
					</div>
					<div
						class="flex flex-col lg:flex-row flex-1 items-center border-b border-surface-200 dark:border-surface-700"
					>
						<div
							class="flex flex-none lg:flex-col self-stretch items-center lg:justify-center bg-surface-100 dark:bg-surface-800 border-r border-surface-200 dark:border-surface-700 gap-2 p-4 lg:w-36"
						>
							<i class="pi pi-home" style="font-size: 1.5rem"></i>
							<h1 class="text-lg">{{ $t("homepage.aboutsection.cottage") }}</h1>
						</div>
						<div class="flex flex-1 flex-wrap text-base gap-2 p-4">
							<Chip
								:label="$t('homepage.aboutsection.cottage_items.two_cottages')"
								icon="pi pi-home"
							/>
							<Chip
								:label="$t('homepage.aboutsection.cottage_items.balcony_view')"
								icon="pi pi-sparkles"
							/>
							<Chip
								:label="$t('homepage.aboutsection.cottage_items.full_comfort')"
								icon="pi pi-star-fill"
							/>
							<Chip
								:label="$t('homepage.aboutsection.cottage_items.fully_equipped')"
								icon="pi pi-star-fill"
							/>
							<Chip
								:label="$t('homepage.aboutsection.cottage_items.modern_furniture')"
								icon="pi pi-star-fill"
							/>
							<Chip
								:label="$t('homepage.aboutsection.cottage_items.three_bedrooms')"
								icon="pi pi-check-circle"
							/>
							<Chip
								:label="
									$t('homepage.aboutsection.cottage_items.fully_equipped_kitchen')
								"
								icon="pi pi-check-circle"
							/>
							<Chip
								:label="$t('homepage.aboutsection.cottage_items.central_heating')"
								icon="pi pi-check-circle"
							/>
							<Chip
								:label="$t('homepage.aboutsection.cottage_items.air_conditioning')"
								icon="pi pi-check-circle"
							/>
							<Chip
								:label="$t('homepage.aboutsection.cottage_items.washer_dryer')"
								icon="pi pi-check-circle"
							/>
							<Chip
								:label="$t('homepage.aboutsection.cottage_items.tv')"
								icon="pi pi-desktop"
							/>
							<Chip
								:label="$t('homepage.aboutsection.cottage_items.wifi')"
								icon="pi pi-wifi"
							/>
							<Chip
								:label="$t('homepage.aboutsection.cottage_items.capacity')"
								icon="pi pi-user"
							/>
						</div>
					</div>
				</div>
				<div class="container-4 flex flex-col lg:flex-row h-min gap-2">
					<div
						class="booking-section phastr-card flex-col flex-1 bg-linear-to-br! from-surface-100! to-surface-50! dark:from-surface-900! dark:to-surface-800! p-0!"
					>
						<div
							class="flex flex-row items-center gap-2 p-5 border-b border-surface-200 dark:border-surface-700"
						>
							<i class="pi pi-calendar-clock" style="font-size: 1.125rem"></i>
							<h1 class="text-lg">{{ $t("homepage.bookingsection.title") }}</h1>
						</div>

						<div class="flex flex-1 items-end gap-2 p-5">
							<div class="space-y-3 flex-1">
								<DatePicker
									v-model="dates"
									selectionMode="range"
									showIcon
									:placeholder="$t('homepage.bookingsection.check_in_out')"
									class="w-full"
									inputClass="w-full"
								/>

								<div class="grid grid-cols-2 gap-2">
									<InputText
										:placeholder="$t('homepage.bookingsection.adults')"
										class="w-full"
									/>
									<InputText
										:placeholder="$t('homepage.bookingsection.children')"
										class="w-full"
									/>
								</div>
								<div class="flex flex-row justify-start gap-2 mt-2">
									<strong class="text-base">{{
										$t("homepage.bookingsection.check_in")
									}}</strong
									><span class="text-base">3:00pm</span
									><strong class="text-base">{{
										$t("homepage.bookingsection.check_out")
									}}</strong
									><span class="text-base">12:00pm</span>
								</div>
								<Button
									:label="$t('homepage.bookingsection.check_availability')"
									severity="contrast"
									class="w-full p-button-lg transition-all"
								/>
							</div>
						</div>
					</div>
					<div class="contact-section phastr-card flex-col flex-1 p-0!">
						<div
							class="flex flex-row items-center gap-2 p-5 border-b border-surface-200 dark:border-surface-700"
						>
							<i class="pi pi-address-book" style="font-size: 1.125rem"></i>
							<h1 class="text-lg">{{ $t("homepage.contactsection.title") }}</h1>
						</div>
						<div class="flex flex-col flex-1 justify-end gap-2 p-5">
							<a
								href="https://maps.google.com/?q=26+მაისი+49ა+Surami+Georgia+5700"
								target="_blank"
								rel="noopener noreferrer"
								class="contact-item flex flex-row items-center gap-3 no-underline text-color"
							>
								<i class="pi pi-map-marker" style="font-size: 1.5rem"></i>
								<span>{{ $t("homepage.contactsection.address") }}</span>
							</a>
							<a
								href="mailto:m.udzilauri@hotmail.com"
								class="contact-item flex flex-row items-center gap-3 no-underline text-color"
							>
								<i class="pi pi-envelope" style="font-size: 1.5rem"></i>
								<span>{{ $t("homepage.contactsection.email") }}</span>
							</a>
							<a
								href="https://www.facebook.com/profile.php?id=61578309970699"
								target="_blank"
								rel="noopener noreferrer"
								class="contact-item flex flex-row items-center gap-3 no-underline text-color"
							>
								<i class="pi pi-facebook" style="font-size: 1.5rem"></i>
								<span>{{ $t("homepage.contactsection.facebook") }}</span>
							</a>
							<a
								href="tel:+995511185041"
								class="contact-item flex flex-row items-center gap-3 no-underline text-color"
							>
								<i class="pi pi-phone" style="font-size: 1.5rem"></i>
								<span>{{ $t("homepage.contactsection.phone") }}</span>
							</a>
							<a
								href="https://wa.me/995511185041"
								target="_blank"
								rel="noopener noreferrer"
								class="contact-item flex flex-row items-center gap-3 no-underline text-color"
							>
								<i class="pi pi-whatsapp" style="font-size: 1.5rem"></i>
								<span>{{ $t("homepage.contactsection.whatsapp") }}</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref } from "vue";

	const hotelImages = ref([
		{
			itemImageSrc: "/images/1.jpg",
			thumbnailImageSrc: "/images/1.jpg",
			alt: "Hotel bedroom",
			title: "Room 6"
		},
		{
			itemImageSrc: "/images/2.jpg",
			thumbnailImageSrc: "/images/2.jpg",
			alt: "Hotel room view",
			title: "Room 1"
		},
		{
			itemImageSrc: "/images/3.jpg",
			thumbnailImageSrc: "/images/3.jpg",
			alt: "Hotel view",
			title: "Room 2"
		},
		{
			itemImageSrc: "/images/4.jpg",
			thumbnailImageSrc: "/images/4.jpg",
			alt: "Hotel facilities",
			title: "Room 3"
		},
		{
			itemImageSrc: "/images/5.jpg",
			thumbnailImageSrc: "/images/5.jpg",
			alt: "Hotel amenities",
			title: "Room 4"
		},
		{
			itemImageSrc: "/images/6.jpg",
			thumbnailImageSrc: "/images/6.jpg",
			alt: "Hotel exterior",
			title: "Room 5"
		},
		{
			itemImageSrc: "/images/7.jpg",
			thumbnailImageSrc: "/images/7.jpg",
			alt: "Hotel living area",
			title: "Room 7"
		},
		{
			itemImageSrc: "/images/8.jpg",
			thumbnailImageSrc: "/images/8.jpg",
			alt: "Hotel bathroom",
			title: "Room 8"
		},
		{
			itemImageSrc: "/images/9.jpg",
			thumbnailImageSrc: "/images/9.jpg",
			alt: "Hotel terrace",
			title: "Room 9"
		},
		{
			itemImageSrc: "/images/10.jpg",
			thumbnailImageSrc: "/images/10.jpg",
			alt: "Hotel dining",
			title: "Room 10"
		},
		{
			itemImageSrc: "/images/11.jpg",
			thumbnailImageSrc: "/images/11.jpg",
			alt: "Hotel lounge",
			title: "Room 11"
		},
		{
			itemImageSrc: "/images/12.jpg",
			thumbnailImageSrc: "/images/12.jpg",
			alt: "Hotel pool area",
			title: "Room 12"
		},
		{
			itemImageSrc: "/images/13.jpg",
			thumbnailImageSrc: "/images/13.jpg",
			alt: "Hotel garden",
			title: "Room 13"
		},
		{
			itemImageSrc: "/images/14.jpg",
			thumbnailImageSrc: "/images/14.jpg",
			alt: "Hotel entrance",
			title: "Room 14"
		},
		{
			itemImageSrc: "/images/15.jpg",
			thumbnailImageSrc: "/images/15.jpg",
			alt: "Hotel courtyard",
			title: "Room 15"
		},
		{
			itemImageSrc: "/images/16.jpg",
			thumbnailImageSrc: "/images/16.jpg",
			alt: "Hotel suite",
			title: "Room 16"
		},
		{
			itemImageSrc: "/images/17.jpg",
			thumbnailImageSrc: "/images/17.jpg",
			alt: "Hotel suite 2",
			title: "Room 17"
		},
		{
			itemImageSrc: "/images/18.jpg",
			thumbnailImageSrc: "/images/18.jpg",
			alt: "Hotel view sunset",
			title: "Room 18"
		}
	]);

	const responsiveOptions = ref([
		{
			breakpoint: "1300px",
			numVisible: 4
		},
		{
			breakpoint: "575px",
			numVisible: 2
		}
	]);
</script>
<style></style>
