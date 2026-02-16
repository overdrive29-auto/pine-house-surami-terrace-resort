import { ref, computed } from "vue";

export function useDateRange() {
	const dates = ref();
	const hasInteracted = ref(false);

	const isRangeComplete = computed(() => {
		return dates.value && dates.value[0] && dates.value[1];
	});

	const showInvalid = computed(() => {
		return hasInteracted.value && !isRangeComplete.value;
	});

	const handleDateSelect = () => {
		hasInteracted.value = true;
	};

	const handleFocus = () => {
		hasInteracted.value = true;
	};

	return {
		dates,
		hasInteracted,
		isRangeComplete,
		showInvalid,
		handleDateSelect,
		handleFocus
	};
}
