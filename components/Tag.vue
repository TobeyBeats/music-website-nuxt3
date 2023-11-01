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

	.tag-hashtag {
		margin-right: calc(var(--space-unit) / 8);
		font-weight: 700;
		opacity: 0.75;
	}

	&.active {
		// color: var(--text-color-default);
		// background-color: rgba(255, 255, 255, 0.1);
		// padding-inline: 0.25rem;
		.tag-name {
			font-weight: 800;
		}
	}
}
</style>

<script setup lang="ts">
const props = defineProps<{
	name: string
}>()

const { currentRoute } = useRouter()

function isActive() {
	return currentRoute.value.query["tags"]?.includes(props.name)
}
</script>
