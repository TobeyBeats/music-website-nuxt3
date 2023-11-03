<template>
    <span class="tag rounded faded" :class="{ active: isActive() }">
        <span class="tag-hashtag">#</span>
        <span class="tag-name">{{ name }}</span>
    </span>
</template>

<style lang="scss">
.tag {
	white-space: nowrap;
	margin-right: calc(var(--space-unit) / 3);
	text-transform: capitalize;

	.tag-hashtag {
		margin-right: calc(var(--space-unit) / 8);
		font-weight: 700;
		opacity: 0.75;
	}

	&.active {
		.tag-name {
			font-weight: 800;
		}
	}
}
</style>

<script setup lang="ts">
const props = defineProps<{
	name: string,
	active?: boolean
}>()

const { currentRoute } = useRouter()

function isActive() {
	return props.active || currentRoute.value.query["tags"]?.includes(props.name)
}
</script>
