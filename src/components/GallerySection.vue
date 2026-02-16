<template>
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
				<div class="w-full aspect-[4/3] lg:aspect-[16/9]" style="overflow: hidden">
					<img
						:src="slotProps.item.itemImageSrc"
						:alt="slotProps.item.alt"
						style="width: 100%; height: 100%; object-fit: cover; display: block"
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
