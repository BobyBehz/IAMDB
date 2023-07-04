<template>
    <!-- <ul class= "xl:mt-6 xl:-mb-6 gap-6 my-6 flex flex-nowrap pl-0 list-none animation overflow-y-hidden no-scrollbar overflow-x-auto snap-x snap-mandatory">
        <MoreItem/>
    </ul> -->
    <!-- class=" card-w grow-0 shrink-0 snap-center cursor-pointer hover:opacity-40 transition-all" -->
    <carousel v-bind="settings" :breakpoints="breakpoints" class="xl:mt-6 xl:-mb-6 gap-6 my-6 pl-0 list-noneno-scrollbar overflow-x-auto snap-x snap-mandatory">
        <slide v-for="(item, index) in idStore.moreAlike" :key="slide" class=" block card-w grow-0 shrink-0 snap-center cursor-pointer hover:opacity-40 transition-all">
            <img class="img-size mb-3 rounded-xl card-w m-auto" :src="idStore.moreAlike[index].image" alt="movie cover">
            <div class="flex items-center px-4 gap-1.5">
                <h3 class=" small-t grow fw-700 h3-h text-left">{{ idStore.moreAlike[index].title }}</h3>
                <img v-if="likedId === idStore.moreAlike[index].id" src="@/assets/images/redheart.png" alt="a small heart">
                <img src="@/assets/images/star.png" alt="a small star">
                <span class="small-t opacity-40">{{ idStore.moreAlike[index].imDbRating }}</span>
            </div>
        </slide>

        <template #addons>
            <navigation />
        </template>
    </carousel>
</template>

<style scoped>
.card-w {
    min-width: 230px;
}
.img-size {
    height: 342px;
}
@media (min-width: 1200px) {
    .card-w {
        min-width: 276px;
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

import MoreItem from '../more-like-this/MoreItem.vue'

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
    data() {
        return {
            settings: {
                itemsToShow: 1.4,
                wrapAround: true,
            },
            breakpoints: {
                400: {
                    itemsToShow: 1.6,
                },
                500: {
                    itemsToShow: 2,
                },
                600: {
                    itemsToShow: 2.5,
                },
                800: {
                    itemsToShow: 3,
                },
                1000: {
                    itemsToShow: 4,
                },
                1400: {
                    itemsToShow: 5,
                },
                1600: {
                    itemsToShow: 5.5,
                },
                1700: {
                    itemsToShow: 6,
                },
                1800: {
                    itemsToShow: 6.3,
                }
            }
        }
    },
    components:  {
        MoreItem, Carousel, Slide, Pagination, Navigation
    },
    computed: {
        ...mapStores(useIdStore)
    }
}
</script>