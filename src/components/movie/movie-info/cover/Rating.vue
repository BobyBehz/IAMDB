<template>
    <div v-if="id" class="imdb-score flex items-center bg-main-color relative aspect-square rounded-full fw-700 m-1.5 pl-5 after:absolute after:inset-0 after:-m-1.5 after:-z-10 after:rounded-full bi">
        {{ idStore.score }}
    </div>
</template>

<style scoped>
.imdb-score {
    font-size: 25px;
    line-height: 29px;
    width: 74px;
}
.imdb-score::after {
    background-image: conic-gradient(var(--light-red) 300deg, rgb(238, 235, 221, 0.4) 0deg);
}
</style>

<script>
import { mapStores } from 'pinia'
import {useIdStore} from '@/stores/Id'

export default {
    computed: {
        ...mapStores(useIdStore)
    }
}
</script>