<template>
    <li v-for="item in 10" class="photos-list-item xl:basis-1/5 xl:max-w-20% basis-1/2 shrink-0 grow-0">
        <div class="photo-card w-full py-1.5 pl-3">
            <div class="photo after:absolute after:flex after:items-center after:inset-0 after:rounded-xl after:-z-10 w-full relative rounded-xl flex items-center">
                <img class="w-full object-cover object-center relative rounded-xl aspect-1.5" src="@/assets/images/screenshots/movie pic 1.png" alt="pictures of the movie">
            </div>
        </div>
    </li>
</template>

<style scoped>
.photo::after {
    content: url(@/assets/images/cross-Vector.png);
    background: rgb(0, 0, 0, 0.71);
    padding-left: 38.5%;
}
.photo:hover img {
    z-index: -20;
}
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