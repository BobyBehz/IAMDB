<template>
    <div class="flex gap-3 items-center m-0 pb-5 smaller-t">
        <div v-if="idStore.year" class="shrink-0 grow-0">{{ idStore.year }}</div>
        <div class="w-2 h-2 bg-white rounded-full shrink-0 grow-0"></div>
        <div v-if="idStore.pg" class="shrink-0 grow-0">{{ idStore.pg }}</div>
        <div class="w-2 h-2 bg-white rounded-full shrink-0 grow-0"></div>
        <div v-if="idStore.duration" class="shrink-0 grow-0">{{ idStore.duration }}</div>
    </div>
</template>

<script>
import {mapStores} from 'pinia'
import {useIdStore} from '@/stores/Id'

export default {
    computed: {
        ...mapStores(useIdStore)
    }
}
</script>