<template>
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
					:label="$t('homepage.aboutsection.resort_items.dry_subtropical_climate')"
					icon="pi pi-sparkles"
				/>
				<Chip
					:label="$t('homepage.aboutsection.resort_items.therapeutic_environment')"
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
					:label="$t('homepage.aboutsection.cottage_items.fully_equipped_kitchen')"
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
				<Chip :label="$t('homepage.aboutsection.cottage_items.tv')" icon="pi pi-desktop" />
				<Chip :label="$t('homepage.aboutsection.cottage_items.wifi')" icon="pi pi-wifi" />
				<Chip
					:label="$t('homepage.aboutsection.cottage_items.capacity')"
					icon="pi pi-user"
				/>
			</div>
		</div>
	</div>
</template>
<script setup></script>
