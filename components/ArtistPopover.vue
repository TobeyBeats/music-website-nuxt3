<template>
	<Popover>
		<slot />
		<template #body>
			<div>
				<LinkGroup :links="contributor.links" :colors="[constants.colorsDefault[0], constants.colorsDefault[1]]" :hide-button-if-inactive="true" />
			</div>
		</template>
	</Popover>
</template>


<script setup lang="ts">
import { useSlots } from "vue";

const config = useRuntimeConfig()
const slots = useSlots()

if (!slots.default) {
	throw new Error("default slot is empty")
}

const { data, error } = await useFetch<Contributor[]>("/contributors", {
	baseURL: config.public.baseUrlApi,
	query: {
		name: slots.default()[0].children
	}
})
if (!data.value) {
	throw error
}
const contributor = data.value[0]

</script>
