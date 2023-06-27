<template>
    <div class="flex flex-wrap flex-col gap-1.5">  
        <span v-if="idStore.views" class="small-t">{{ idStore.views }}</span>
        <p class="smaller-t opacity-100 m-0">ratings on IMDB</p>
    </div>
</template>     

<script>
import { mapStores } from 'pinia'
import {useIdStore} from '@/stores/Id'

export default {
    computed: {
        ...mapStores(useIdStore)
    },
}
</script>