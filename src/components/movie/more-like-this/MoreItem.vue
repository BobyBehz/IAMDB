<template>
    <!-- <Carousel> -->
        <!-- <Slide> -->
            <li v-if="moreAlike" v-for="(item, index) in moreAlike" class=" card-w grow-0 shrink-0">
                <div class="">
                    <img class="img-size mb-3 rounded-xl card-w" :src="moreAlike[index].image" alt="movie cover">
                    <div class="flex items-center px-4 gap-1.5">
                        <h3 class=" small-t grow fw-700 h3-h">{{ moreAlike[index].title }}</h3>
                        <img v-if="likedId === moreAlike[index].id" src="@/assets/images/redheart.png" alt="a small heart">
                        <img src="@/assets/images/star.png" alt="a small star">
                        <span class="small-t opacity-40">{{ moreAlike[index].imDbRating }}</span>
                    </div>
                </div>
            </li>
        <!-- </Slide> -->
    <!-- </Carousel> -->
</template>

<style scoped>
.card-w {
    width: 230px;
}
.img-size {
    height: 342px;
}
@media (min-width: 1200px) {
    .card-w {
        width: 276px;
        /* height: 409px; */
    }
    .img-size {
        height: 342px;
    }
}
.h3-h {
    height: 21px;
}
</style>

<script>
import { mapStores } from 'pinia'
import {useIdStore} from '@/stores/Id'

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
    components: {
        Carousel, Slide, Pagination, Navigation, 
    },
    data() {
        return {
            moreAlike: null,
            likedId: null,
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
                   this.moreAlike = res.similars
                })
        this.likedId = this.idStore.liked.find(id => (id === this.moreAlike[index].id ))
    }

}
</script>