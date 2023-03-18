<template>
    <li v-if="photos" v-for="(item, index) in 10" class="photos-list-item xl:basis-1/5 xl:max-w-20% basis-1/2 shrink-0 grow-0">
        <div class="photo-card w-full flex justify-center py-1.5 pl-3">
            <div @click="addScreen(index)" class="w-216p photo after:absolute after:flex after:items-center after:inset-0 after:rounded-xl after:-z-10 relative rounded-xl flex items-center justify-center">
                <img class="w-full h-full object-cover object-center relative rounded-xl aspect-1.5" :src="photos[index].image" alt="pictures of the movie">
            </div>
        </div>
    </li>
</template>

<style scoped>
.w-216p {
    width: 158.9px;
    height: 102.4px;
}
@media (min-width: 1200px) {
    .w-216p {
    width: 216px;
    height: 144px;
}
}
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
import { mapStores } from 'pinia'
import {useIdStore} from '@/stores/Id'

export default {
    data() {
        return {
            photos: null,
        }
    },
    computed: {
        ...mapStores(useIdStore)
    },
    methods: {
        addScreen(index) {
            this.idStore.overScreen = true;
            this.idStore.overScreenImage = this.photos[index].image;
        },
    },
    mounted() {
        fetch('https://imdb-api.com/en/API/Images/k_i6429ou2/' + this.idStore.movieId + '/Short')
            .then(res => res.text())
            .then(res => JSON.parse(res))
            .then(res => {
                console.log(res)
                this.photos = res.items
            })
    }
}

</script>