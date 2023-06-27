<template>
    <p v-if="idStore.summary" class="mb-11 smaller-t opacity-60">{{ idStore.summary }}</p>
</template>


<script>
import {mapStores} from 'pinia'
import {useIdStore} from '@/stores/Id'

export default {
    computed: {
        ...mapStores(useIdStore)
    },
}
</script>