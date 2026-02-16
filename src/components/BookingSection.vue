<template>
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
					:invalid="showInvalid"
					showIcon
					showClear
					:placeholder="$t('homepage.bookingsection.check_in_out')"
					class="w-full"
					inputClass="w-full"
					@date-select="handleDateSelect"
					@focus="handleFocus"
					@update:model-value="checkAvailability"
				/>
				<div class="flex flex-row justify-start gap-2 mt-2">
					<strong class="text-base">{{ $t("homepage.bookingsection.check_in") }}</strong
					><span class="text-base">3:00pm</span
					><strong class="text-base">{{ $t("homepage.bookingsection.check_out") }}</strong
					><span class="text-base">12:00pm</span>
				</div>
				<Button
					:label="$t('homepage.bookingsection.check_availability')"
					severity="contrast"
					class="w-full p-button-lg transition-all"
					:loading="checkingAvailability"
					@click="onCheckAvailabilityClick"
				/>
			</div>
		</div>
	</div>
</template>
<script setup>
	import { ref, computed } from "vue";
	import { useDateRange } from "@/composables/useDateRange";

	const { dates, showInvalid, handleDateSelect, handleFocus } = useDateRange();

	const emit = defineEmits(["openBookingMenu"]);

	const onCheckAvailabilityClick = data => {
		emit("openBookingMenu", data);
	};
</script>
