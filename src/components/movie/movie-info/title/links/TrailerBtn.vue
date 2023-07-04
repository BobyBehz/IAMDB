<template>
    <a v-if="idStore.trailerLink" class="rounded-full " :href="idStore.trailerLink" title="whatch the trailer" target="_blank">
        <div class=" trailer-btn flex items-center justify-center bg-light-red hover:bg-dark-red px-6 xl:px-14 trailer-font rounded-full gap-3 transition-all">
            <div class="mb-1">Watch thrailer</div>
            <img class="play-img" src="@/assets/images/play image.png" alt="">
        </div>
    </a>
</template>

<style scoped>
.play-img {
    width: 14.66px;
    height: 18px;
}
.trailer-btn {
    width: 177px;
    height: 44px
}
    @media (min-width: 1200px) {
    .trailer-btn {
        width: 277px;
        height: 61px
    }
    .play-img {
        width: 17px;
        height: 21px;
    }
}
</style>

<script>
import { mapStores } from 'pinia'
import {useIdStore} from '@/stores/Id'

export default {
    computed: {
        ...mapStores(useIdStore)
    },
}
</script>