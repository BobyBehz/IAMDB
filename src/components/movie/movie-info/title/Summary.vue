<template>
    <p v-if="idStore.Summary" class="mb-11 smaller-t opacity-60">{{ idStore.Summary }}</p>
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