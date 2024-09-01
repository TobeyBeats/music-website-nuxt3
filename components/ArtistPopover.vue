<template>
    <Popover ref="popover">
        <div v-if="contributor" class="dropdown-box box-shadow-default">
            <LinkGroup :links="contributor.links" :colors="[constants.colorsDefault[0], constants.colorsDefault[1]]" :hide-button-if-inactive="true" />
        </div>
    </Popover>
</template>


<script setup lang="ts">
import Popover from "primevue/popover"
import { Contributor } from "#imports"

const popover = ref<InstanceType<typeof Popover>>()

const config = useRuntimeConfig()

const contributor = ref<Contributor | null>(null)

defineExpose({
    show: (event: MouseEvent, name: string) => {
        const target = event.target
        $fetch<ConstructorParameters<typeof Contributor>[0][]>(`/contributors`, {
            baseURL: config.public.baseUrlApi,
            query: {
                name
            }
        }).then(contributors => {
            contributor.value = new Contributor(contributors[0])
            if (popover.value) {
                popover.value.show(event, target)
            }
        })
    }
})

</script>