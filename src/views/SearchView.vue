<template>
    <div>
        <h1>IAMDB</h1>
        <input type="text" v-model="typedName">
        <router-link :to="{ name: 'movie'}"><button @click="getMovieId">Search</button></router-link>
        <h2>{{ idStore.movieId }}</h2>
    </div>
</template>

<style scoped>
button{
    background-color: red;
}

</style>

<script>
import {mapStores} from 'pinia'
import {useIdStore} from '@/stores/Id'

export default {
    data() {
        return {
            movieName: null,
        }
    },
    computed: {
        ...mapStores(useIdStore)
    },
    methods: {
        getMovieId() {
            this.movieName = this.typedName 
            fetch('https://imdb-api.com/en/API/SearchMovie/k_i6429ou2/' + this.movieName)
            .then(res => res.text())
            .then(res => JSON.parse(res))
            .then(res => {
                console.log(res)
                this.idStore.movieId = res.results[0].id
                console.log(this.idStore.movieId)
                console.log(this.movieName)
            })
        }
    }
}
</script>