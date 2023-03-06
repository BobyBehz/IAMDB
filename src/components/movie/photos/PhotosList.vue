<template>
    <h2 class="big-t mt-4">Photos</h2>
    <ul class="photos-list flex flex-wrap p-0 list-none mt-2.5 mb-5 -ml-3">
        <slot/>
    </ul>
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