<template>
    <div>
        <section class="background-img bg-cover bg-center">
        </section>
        <div class="paddingx-15 flex flex-wrap">
            <div class="info-col">
                <h1 class="movie-title fw-700">Iron Man</h1>
                <h3 class="small-t">Directors: Jon Favreau</h3>
                <div class="flex gap-3 items-center m-0 pb-5 smaller-t">
                    <div class="shrink-0 grow-0">2008 </div>
                    <div class="w-2 h-2 bg-white rounded-full shrink-0 grow-0"></div>
                    <div class="shrink-0 grow-0">PG-13</div>
                    <div class="w-2 h-2 bg-white rounded-full shrink-0 grow-0"></div>
                    <div class="shrink-0 grow-0">2h 6m</div>
                </div>
                <div class="trailer-share d-flex align-items-center">
                        <a class="rounded-full " href="#" title="whatch the trailer" target="_blank">
                            <div class="trailer-btn flex items-center w-44 h-11 bg-light-red py-3 px-6 trailer-font rounded-full gap-3 transition-all">
                                <div class="ml-3">Watch thrailer</div>
                                <img src="" alt="">
                            </div>
                        </a>
                        <a class="circle-a" href="#" title="share" target="_blank">
                            <div class="share-div">
                                <img class="share-img" src="" alt="">
                            </div>
                        </a>
                    </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
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
export default {
    data() {
        return {
            info: null
        }
    },
    computed: {
        ...mapStores(useIdStore)
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