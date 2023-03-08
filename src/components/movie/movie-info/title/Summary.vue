<template>
    <p v-if="summary" class="mb-11 smaller-t opacity-60">{{ summary }}</p>
</template>


<script>
import {mapStores} from 'pinia'
import {useIdStore} from '@/stores/Id'

export default {
    data() {
        return {
            summary: null,
        }
    },
    computed: {
        ...mapStores(useIdStore)
    },
    mounted() {
        fetch('https://imdb-api.com/en/API/Title/k_i6429ou2/' + this.idStore.movieId)
                .then(res => res.text())
                .then(res => JSON.parse(res))
                .then(res => {
                    console.log(res)
                    this.summary = res.plot
                })
        
    }
}
</script>