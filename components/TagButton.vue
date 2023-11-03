<template>
    <button class="tag--button rounded link" @click="toggleTag" :class="{ active: isActive() }">
        <span class="tag-hashtag"># </span>
        <span class="tag-name">{{ name }}</span>
    </button>
</template>

<style lang="scss">
.tag--button {
	white-space: nowrap;
	margin-right: calc(var(--space-unit) / 3);
	background-color: hsla(0, 0%, 100%, 0.2);
	cursor: pointer;
	padding-inline: 0.25rem;
	padding-top: 0.08rem;
	height: 1.45rem;

	.tag-hashtag {
		font-weight: 700;
		opacity: 0.75;
	}

	&.active {
		.tag-name {
			font-weight: 800;
		}
		&:hover {
			text-decoration: line-through white;
		}
	}

	&:hover {
		background-color: hsla(0, 0%, 100%, 0.4);
	}
}
</style>

<script setup lang="ts">
const props = defineProps<{
	name: string
}>()

const { push, currentRoute } = useRouter()

function toggleTag() {
	push({
		query: {
			...currentRoute.value.query,
			"tags": isActive() ?
				(getTagsQuery().length == 1 ? undefined : getTagsQuery().filter(x => x != props.name))
				: [...getTagsQuery(), props.name]
		}
	})
}

function isActive() {
	return currentRoute.value.query["tags"]?.includes(props.name)
}

function getTagsQuery() {
	let q = currentRoute.value.query["tags"] || []
	if (!Array.isArray(q)) {
		q = [q]
	}
	return q.map(x => String(x))
}
</script>
