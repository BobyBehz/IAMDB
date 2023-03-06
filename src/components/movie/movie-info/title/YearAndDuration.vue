<template>
    <div class="flex gap-3 items-center m-0 pb-5 smaller-t">
        <div class="shrink-0 grow-0">2008 </div>
        <div class="w-2 h-2 bg-white rounded-full shrink-0 grow-0"></div>
        <div class="shrink-0 grow-0">PG-13</div>
        <div class="w-2 h-2 bg-white rounded-full shrink-0 grow-0"></div>
        <div class="shrink-0 grow-0">2h 6m</div>
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