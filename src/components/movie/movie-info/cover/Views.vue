<template>
    <div class="flex flex-wrap flex-col gap-1.5">  
        <span v-if="views" class="small-t">{{ views }}</span>
        <p class="smaller-t opacity-100 m-0">ratings on IMDB</p>
    </div>
</template>     

<script>
import { mapStores } from 'pinia'
import {useIdStore} from '@/stores/Id'

export default {
    data() {
        return {
            views: null,
        }
    },
    computed: {
        ...mapStores(useIdStore)
    },
    // mounted() {
    //     fetch('https://imdb-api.com/en/API/Title/k_i6429ou2/' + this.idStore.movieId)
    //         .then(res => res.text())
    //         .then(res => JSON.parse(res))
    //         .then(res => {
    //             this.views = res.imDbRatingVotes
    //         })
    // }
}
</script>