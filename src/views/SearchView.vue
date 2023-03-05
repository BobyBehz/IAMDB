<template>
    <div>
        <!-- <div class="flex">
            <h1 class="h1 mt-56 mb-36 font-roboto fw-700 m-auto xl:mr-0 xl:ml-auto xl:mb-32">IAMDB</h1>
        </div> -->
        <Iamdb/>
        <Search/>
        <!-- <div class="flex flex-col gap-2 justify-center xl:flex-row">
            <input class="m-auto input rounded-full border border-solid border-white py-3 pl-8 small-t xl:hidden" 
            placeholder="Your favorite movie ..." @keyup.enter="getMovieId" type="text" v-model="typedName">
            <input class="m-auto input rounded-full border border-solid border-white py-3 pl-8 hidden xl:block" 
            placeholder="Type the name of your favorite movie ..." @keyup.enter="getMovieId" type="text" v-model="typedName">
            <button @click="getMovieId" class="m-auto btn primary-red rounded-full">search</button>
        </div> -->
    </div>       
</template>

<style scoped>


</style>

<script>
import Iamdb from '@/components/search/Iamdb.vue'
import Search from '@/components/search/Search.vue'
// import {mapStores} from 'pinia'
// import {useIdStore} from '@/stores/Id'

export default {
    components: {
        Iamdb,Search
    },
    // data() {
    //     return {
    //         movieName: null,
    //     }
    // },
    // computed: {
    //     ...mapStores(useIdStore)
    // },
    // methods: {
    //     getMovieId() {
    //         this.movieName = this.typedName 
    //         fetch('https://imdb-api.com/en/API/SearchMovie/k_i6429ou2/' + this.movieName)
    //         .then(res => res.text())
    //         .then(res => JSON.parse(res))
    //         .then(res => {
    //             console.log(res)
    //             this.idStore.movieId = res.results[0].id
    //             console.log(this.idStore.movieId)
    //             console.log(this.movieName)
    //             this.$router.push({ name: 'movie'})
    //         })
    //     }
    // }
}
</script>