<template>
    <div class="relative">
        <OverScreen/>
        <BackGround/>
        <MovieInfo/>           
        <Photos/>
        <MoreLikeThis/>
        <Faqs/>
    </div>
</template>



<script>
import {mapStores} from 'pinia'
import {useIdStore} from '@/stores/Id'

import OverScreen from '../components/movie/OverScreen.vue'
import BackGround from '../components/movie/BackGround.vue'
import MovieInfo from '../components/movie/MovieInfo.vue'
import Photos from '../components/movie/Photos.vue'
import MoreLikeThis from '../components/movie/MoreLikeThis.vue'
import Faqs from '../components/movie/Faqs.vue'



export default {
    components: {
        BackGround ,MovieInfo , Photos, Faqs, MoreLikeThis, OverScreen
    },
    data() {
        return {

        };
    },
    computed: {
        ...mapStores(useIdStore),
    },
    methods: {

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