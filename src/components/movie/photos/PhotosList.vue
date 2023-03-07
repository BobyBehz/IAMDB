<template>
    <ul class="photos-list flex flex-wrap p-0 list-none mt-2.5 mb-5 -ml-3">
        <PhotosItem/>
    </ul>
</template>

<script>
import {mapStores} from 'pinia'
import {useIdStore} from '@/stores/Id'

import PhotosItem from '../photos/PhotosItem.vue'

export default {
    components: {
        PhotosItem,
    },
    computed: {
        ...mapStores(useIdStore)
    }
}
</script>