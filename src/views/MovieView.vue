<template>
    <div>
        <section class="background-img bg-cover bg-center">
        </section>
        <div class="paddingx-15 flex flex-wrap">
            <NameAndDetails/>
            <!-- <div class="basis-full">
                <h1 class="movie-title fw-700">Iron Man</h1>
                <h3 class="small-t mb-5 mt-1.5">Directors: Jon Favreau</h3>
                <div class="flex gap-3 items-center m-0 pb-5 smaller-t">
                    <div class="shrink-0 grow-0">2008 </div>
                    <div class="w-2 h-2 bg-white rounded-full shrink-0 grow-0"></div>
                    <div class="shrink-0 grow-0">PG-13</div>
                    <div class="w-2 h-2 bg-white rounded-full shrink-0 grow-0"></div>
                    <div class="shrink-0 grow-0">2h 6m</div>
                </div>
                <div class="trailer-font flex gap-5 mb-10">
                    <a class="rounded-full " href="#" title="whatch the trailer" target="_blank">
                        <div class="trailer-btn flex items-center w-44 h-11 bg-light-red py-3 px-6 trailer-font rounded-full gap-3 transition-all">
                            <div class="ml-3">Watch thrailer</div>
                            <img src="" alt="">
                        </div>
                    </a>
                    <a class="rounded-full" href="#" title="share" target="_blank">
                        <div class="share-div border-solid border-2 border-secondary-color rounded-full flex w-11 aspect-square p-2.5 items-center transition-all">
                            <img src="" alt="">
                        </div>
                    </a>
                    <button class="rounded-full">
                        <div class="border-solid border-2 border-secondary-color rounded-full flex w-11 aspect-square p-2.5 items-center transition-all">
                            L
                            <img src="" alt="">
                        </div>
                    </button>
                </div>
                <p class="mb-11 smaller-t opacity-60">After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.</p>
                <h2 class="details-h2 big-t mb-6">Details</h2>
                <ul class="pl-0 list-none">
                    <li v-for="detail in 5" :class="['flex details-row', 'items-center', 'border-solid', border ? 'border-b-2' : 'border-b-0' , 'border-fade-secondary-color']">
                        <div class="basis-1/2 col-xl-4 grow-0 shrink-0">
                            <h3 class="small-t m-0">Writers</h3>
                        </div>
                        <div class="basis-1/2 col-xl-8 grow-0 shrink-0">
                            <p class="my-3 mx-0 smaller-t opacity-60">Mark Fergus, Hawk Ostby, Art Marcum</p>
                        </div>
                    </li>
                </ul>
            </div> -->
            <!-- <div class="basis-full">
                <h2 class="big-t mt-14">Cast & Crew</h2>
                <ul class="mt-4 list-none pl-0">
                    <li v-for="item in castIndex" class="flex items-center gap-3 py-3">
                        <div>
                            <img class="w-75p aspect-square rounded-full" src="../assets/images/cast/robert downey.png" alt="">
                        </div>
                        <div>
                            <h3 class="small-t fw-700">Robert Downey Jr.</h3>
                            <p class="smaller-t mt-1 opacity-60">as Tony Stark</p>
                        </div>
                    </li>
                    <li class="show-all mt-7 text-light-red medium-t gap-4 flex items-center justify-center justify-content-xl-start">
                        Show {{ show }}
                        <button @click="addCast">
                            <div class="show-all-vector flex items-center border-solid border-light-red border w-6 rounded-full aspect-square pl-2">
                                <img src="../assets/images/Vector.png" alt="vector">
                            </div>
                        </button>
                    </li>
                </ul>
            </div> -->
            <CastAndCrew/>
        </div>
        <!-- <div class="paddingx-15">
            <h2 class="big-t mt-4">Photos</h2>
            <ul class="photos-list flex flex-wrap p-0 list-none mt-2.5 mb-5 -ml-3">
                <li v-for="item in 10" class="photos-list-item xl:basis-1/5 xl:max-w-20% basis-1/2 shrink-0 grow-0">
                    <div class="photo-card w-full py-1.5 pl-3">
                        <div class="photo after:absolute after:flex after:items-center after:inset-0 after:rounded-xl after:-z-10 w-full relative rounded-xl flex items-center">
                            <img class="w-full object-cover object-center relative rounded-xl aspect-1.5" src="../assets/images/screenshots/movie pic 1.png" alt="pictures of the movie">
                        </div>
                    </div>
                </li>
            </ul>
        </div> -->
        <Photos/>
        <div class="padding-left-15">
            <h2 class="big-t">More like this</h2>
            <ul class= "xl:gap-0 xl:mt-6 xl:-mb-6 gap-6 my-6 flex flex-nowrap pl-0 list-none overflow-y-hidden overflow-x-scroll">
                <li v-for="item in 4" class="xl:basis-1/4 grow-0 shrink-0">
                    <div class="xl:pl-6">
                        <img class=" mb-3 rounded-xl" src="../assets/images/movie covers/iron man 2.png" alt="movie cover">
                        <div class="flex items-center px-4">
                            <h3 class="small-t grow">Iron Man 2</h3>
                            <img src="../assets/images/star.png" alt="a little star">
                            <span class="small-t">6.9</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.padding-left-15 {
    padding-left: 15px;
    padding-right: 0px;
}
.movie-img {
    width: 230px;
    height: 342px;
}
@media (min-width: 1200px) {
    .movie-img {
        width: 100%;
        height: 409px;
    }
}
.background-img {
    background-image: url(@/assets/images/background.jpg);
    height: 41vh;
}
.movie-title {
    font-size: 32px;
    line-height: 40px;
}
</style>

<script>
import {mapStores} from 'pinia'
import {useIdStore} from '@/stores/Id'

import NameAndDetails from '../components/movie/movie-info/NameAndDetails.vue'
import CastAndCrew from '../components/movie/movie-info/CastAndCrew.vue'
import Photos from '../components/movie/Photos.vue'


export default {
    components: {
        NameAndDetails, CastAndCrew, Photos
    },
    data() {
        return {
            info: null,
            border: true,
            castIndex: 5,
            show: 'all'
        };
    },
    computed: {
        ...mapStores(useIdStore),
    },
    methods: {
        addCast() {
            if (this.castIndex === 5) {
                this.castIndex = 10
                this.show = 'less'
            } else {
                this.castIndex = 5
                this.show = 'all'
            }
        }
    },
    mounted() {
        // fetch('https://imdb-api.com/en/API/Title/k_i6429ou2/' + this.idStore.movieId +'/FullCast,Posters,Images,Trailer,Ratings,')
        //     // fetch('https://imdb-api.com/en/API/Title/k_i6429ou2/tt0371746/FullCast,Posters,Images,Trailer,Ratings,')
        //     .then(res => res.text())
        //     .then(res => JSON.parse(res))
        //     .then(res => {
        //         console.log(res)
        //         this.idStore.info = res
        //         console.log(this.idStore.info)
        // })
    },
}
</script>