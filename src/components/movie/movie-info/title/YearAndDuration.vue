<template>
    <div class="flex gap-3 items-center m-0 pb-5 smaller-t">
        <div v-if="year" class="shrink-0 grow-0">{{ year }}</div>
        <div class="w-2 h-2 bg-white rounded-full shrink-0 grow-0"></div>
        <div v-if="pg" class="shrink-0 grow-0">{{ pg }}</div>
        <div class="w-2 h-2 bg-white rounded-full shrink-0 grow-0"></div>
        <div v-if="duration" class="shrink-0 grow-0">{{ duration }}</div>
    </div>
</template>

<script>
import {mapStores} from 'pinia'
import {useIdStore} from '@/stores/Id'

export default {
    data() {
        return {
            year: null,
            pg: null,
            duration: null,
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
                    this.year = res.year
                    this.pg = res.contentRating
                    this.duration = res.runtimeStr
                })
    }

}
</script>