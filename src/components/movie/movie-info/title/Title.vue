<template>
    <h1 v-if="title" class="movie-title fw-700">{{ title }}</h1>
    <h3 v-if="directors" class="small-t mb-5 mt-1.5">Directors: {{ directors }}</h3>
</template>

<style scoped>


</style>

<script>
import {mapStores} from 'pinia'
import {useIdStore} from '@/stores/Id'

export default {
    data() {
        return {
            title: null,
            directors: null,
        }
    },
    computed: {
        ...mapStores(useIdStore)
    },
    methods: {
        getAPI() {
            fetch('https://imdb-api.com/en/API/Title/k_i6429ou2/' + this.idStore.movieId)
                .then(res => res.text())
                .then(res => JSON.parse(res))
                .then(res => {
                    this.title = res.title
                    this.directors = res.directors
                })
        }
    },
    // mounted() {
    //     console.log(this.idStore.movieId)
    //     fetch('https://imdb-api.com/en/API/Title/k_i6429ou2/' + this.idStore.movieId)
    //             .then(res => res.text())
    //             .then(res => JSON.parse(res))
    //             .then(res => {
    //                 this.title = res.title
    //                 this.directors = res.directors
    //             })
    // }
}
</script>