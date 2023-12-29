<template>
	<Popover style="position: relative; display: inline;">
		<PopoverButton class="link">
			<slot />
		</PopoverButton>

		<Transition name="fade">
			<PopoverPanel class="popover-body dropdown-box box-shadow-default">
				<slot name="body" />
			</PopoverPanel>
		</Transition>
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
