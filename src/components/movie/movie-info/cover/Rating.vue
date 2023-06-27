<template>
    <div v-if="idStore.score" class="imdb-score flex items-center justify-center bg-main-color relative aspect-square rounded-full fw-700 m-1.5  after:absolute after:inset-0 after:-m-1.5 after:-z-10 after:rounded-full bi">
        {{ idStore.score }} 
    </div>
</template>

<style scoped>
:root {
    --degree: var()
}
.imdb-score {
    font-size: 25px;
    line-height: 29px;
    width: 74px;
}
.imdb-score::after {
    background-image: conic-gradient(#ce1212 300deg , rgb(238, 235, 221, 0.4) 0deg);
}   
</style>

<script>
import { mapStores } from 'pinia'
import {useIdStore} from '@/stores/Id'

export default {
    computed: {
        ...mapStores(useIdStore),
    },
}
</script>