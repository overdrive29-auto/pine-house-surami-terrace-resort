<template>
	<div id="home">
		<div
			id="one"
			class="flex flex-col w-full bg-linear-to-b from-lime-200 to-lime-100 lg:flex-row gap-4"
		>
			<div id="two" class="flex flex-1 flex-col gap-4">
				<Card class="flex flex-1">
					<template #content>
						<h1
							class="text-6xl max-w-100 bg-linear-to-r from-primary-600 to-primary-400 dark:from-primary-200 dark:to-primary-100 bg-clip-text text-transparent text-pretty whitespace-pre-line font-medium tracking-tighter"
						>
							Pine House & Surami Terrace Resort
						</h1>
						<div
							class="pt-2 text-surface-500 dark:text-surface-400 text-lg leading-tight whitespace-pre-line"
						>
							{{ $t("homepage.intro") }}
						</div>
					</template>
				</Card>
				<Card
					class="flex"
					:pt="{
						body: { class: '!p-0' }
					}"
				>
					<template #content>
						<Galleria
							:pt="{
								root: { class: '!border-none !rounded-none' }
							}"
							:value="hotelImages"
							:responsiveOptions="responsiveOptions"
							:numVisible="4"
							:showItemNavigators="true"
							:showThumbnails="true"
							containerClass="w-full"
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
										style="
											width: calc(100%);
											height: calc(100%);
											object-fit: cover;
										"
									/>
								</div>
							</template>
						</Galleria>
					</template>
				</Card>
			</div>
			<div id="three" class="flex flex-col flex-2 gap-4">
				<Card class="flex flex-1">
					<template #content>
						<p>A</p>
					</template></Card
				>
				<!-- <div id="3-1" class="flex gap-4 flex-col lg:flex-row">
					<Card id="3-1-1" class="contact flex flex-1">
						<template #content>
							<p>gugugaga</p>
						</template>
					</Card>
					<Card id="3-1-2" class="booking flex-1">
						<template #content>
							<h2 class="text-3xl font-bold mb-8 text-center">
								{{ $t("book_now") }}
							</h2>

							<div class="space-y-6">
								<DatePicker
									v-model="dates"
									selectionMode="range"
									showIcon
									placeholder="Check-in — Check-out"
									class="w-full"
									inputClass="w-full"
								/>

								<div class="grid grid-cols-2 gap-4">
									<InputText placeholder="Adults" class="w-full" />
									<InputText placeholder="Children" class="w-full" />
								</div>

								<Button label="Check Availability" class="w-full p-button-lg" />
							</div>
						</template>
					</Card>
				</div>
				<Card id="3-2" class="book flex flex-1">
					<template #content>
						<div class="px-6 md:px-12 lg:px-20 py-20">
							<div class="flex flex-col gap-6 md:gap-10 lg:gap-10">
								<div class="flex flex-col gap-4">
									<div class="font-bold text-3xl leading-tight">
										<span class="text-lime-500 dark:text-lime-200 raleway-title"
											>Pine House & Surami Terrace Resort</span
										>
									</div>
									<div class="font-bold text-3xl leading-tight">
										<span class="text-surface-900 dark:text-surface-0">{{
											$t("contactpage.title")
										}}</span>
									</div>
									<div
										class="text-surface-500 dark:text-surface-400 text-lg leading-tight whitespace-pre-line"
									>
										{{ $t("contactpage.intro_1") }}
									</div>
								</div>
								<div
									class="flex flex-col gap-4 text-surface-900 dark:text-surface-0 text-lg leading-tight"
								>
									<div class="flex flex-row items-center gap-4">
										<i class="pi pi-map-marker" style="font-size: 1.5rem"></i>
										<span>{{ $t("contactpage.address") }}</span>
									</div>
									<div class="flex flex-row items-center gap-4">
										<i class="pi pi-phone" style="font-size: 1.5rem"></i>
										<span>{{ $t("contactpage.phone") }}</span>
									</div>
									<div class="flex flex-row items-center gap-4">
										<i class="pi pi-whatsapp" style="font-size: 1.5rem"></i>
										<span>{{ $t("contactpage.whatsapp") }}</span>
									</div>
									<div class="flex flex-row items-center gap-4">
										<i class="pi pi-facebook" style="font-size: 1.5rem"></i>
										<span>{{ $t("contactpage.facebook") }}</span>
									</div>
									<div class="flex flex-row items-center gap-4">
										<i class="pi pi-envelope" style="font-size: 1.5rem"></i>
										<span>{{ $t("contactpage.email") }}</span>
									</div>
								</div>
							</div>
						</div>
					</template>
				</Card> -->
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
<style scoped>
	/* :deep(.p-galleria-thumbnail-items) {
		gap: 4px;
	} */
</style>
