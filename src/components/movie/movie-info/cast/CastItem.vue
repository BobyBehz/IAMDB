<template>
    <li v-if="idStore.cast" v-for="(item,index) in castIndex" class="flex items-center gap-3 py-3">
        <div>
            <img class="w-75p aspect-square rounded-full object-cover object-center" :src="idStore.cast[index].image" alt="">
        </div>
        <div>
            <h3 class="cast-name-font fw-700">{{ idStore.cast[index].name }}</h3>
            <p class="cast-char-font mt-1 opacity-60">as {{ idStore.cast[index].asCharacter }}</p>
        </div>
    </li>
    <li class=" mt-7 text-light-red medium-t gap-4 flex items-center justify-center justify-content-xl-start">
        <div class="show-all-font">Show {{ show }}</div>
        <button @click="addCast">
            <div class="show-all-vector flex items-center border-solid border-light-red border w-6 rounded-full aspect-square pl-2">
                <img src="@/assets/images/Vector.png" alt="vector">
            </div>
        </button>
    </li>
</template>

<script>
import { mapStores } from 'pinia'
import {useIdStore} from '@/stores/Id'

export default {
    data() {
        return {
            castIndex: 5,
            show: 'all',
        }
    },
    computed: {
        ...mapStores(useIdStore)
    },
    methods: {
        addCast() {
            if (this.castIndex === 5) {
                this.castIndex = 15
                this.show = 'less'
            } else {
                this.castIndex = 5
                this.show = 'all'
            }
        },
    },
    mounted() {
        // fetch('https://imdb-api.com/en/API/FullCast/k_i6429ou2/' + this.idStore.movieId)
        //     .then(res => res.text())
        //     .then(res => JSON.parse(res))
        //     .then(res => {
        //         console.log(res)
        //         this.cast = res.actors
        //     })
    }
}
</script>