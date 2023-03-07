<template>
    <h1 class="movie-title fw-700">Iron Man</h1>
    <h3 class="small-t mb-5 mt-1.5">Directors: Jon Favreau</h3>
</template>

<style scoped>
/* .movie-title {
    font-size: 32px;
    line-height: 40px;
} */

</style>

<script>
import {mapStores} from 'pinia'
import {useIdStore} from '@/stores/Id'

export default {
    computed: {
        ...mapStores(useIdStore)
    }
}
</script>