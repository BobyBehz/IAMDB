<template>
    <h1 v-if="idStore.title" class="movie-title fw-700">{{ idStore.title }}</h1>
    <h3 v-if="idStore.directors" class="small-t mb-5 mt-1.5">Directors: {{ idStore.directors }}</h3>
</template>

<style scoped>


</style>

<script>
import {mapStores} from 'pinia'
import {useIdStore} from '@/stores/Id'

export default {
    computed: {
        ...mapStores(useIdStore)
    },
    mounted() {
        console.log(this.idStore.movieId)

    }
}
</script>