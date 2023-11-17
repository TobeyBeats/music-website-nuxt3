<template>
	<Popover style="position: relative; display: inline;">
		<PopoverButton class="link">
			<slot />
		</PopoverButton>

		<PopoverPanel class="popover-body dropdown-box box-shadow-default">
			<slot name="body" />
		</PopoverPanel>
	</Popover>
</template>


<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
</script>

<style>
.popover-body {
	position: absolute;
}
</style>
