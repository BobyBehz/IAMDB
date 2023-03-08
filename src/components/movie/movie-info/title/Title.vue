<template>
    <h1 class="movie-title fw-700">Iron Man</h1>
    <h3 class="small-t mb-5 mt-1.5">Directors: Jon Favreau</h3>
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