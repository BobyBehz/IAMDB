<template>
    <li v-if="idStore.moreAlike" @click="getAlikeAPI(index)" v-for="(item, index) in idStore.moreAlike" class=" card-w grow-0 shrink-0 snap-center cursor-pointer hover:opacity-40 transition-all">
            <img class="img-size mb-3 rounded-xl card-w" :src="idStore.moreAlike[index].image" alt="movie cover">
            <div class="flex items-center px-4 gap-1.5">
                <h3 class=" small-t grow fw-700 h3-h">{{ idStore.moreAlike[index].title }}</h3>
                <img v-if="likedId === idStore.moreAlike[index].id" src="@/assets/images/redheart.png" alt="a small heart">
                <img src="@/assets/images/star.png" alt="a small star">
                <span class="small-t opacity-40">{{ idStore.moreAlike[index].imDbRating }}</span>
            </div>
    </li>
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

export default {
    data() {
        return {
            likedId: null,
        }
    },
    computed: {
        ...mapStores(useIdStore)
    },
    methods: {
        getAlikeAPI(index) {
            this.idStore.movieName = this.idStore.moreAlike[index].title
            console.log(this.idStore.movieName)
            this.idStore.getAPI()
            location.reload()
        }
    },
    mounted() {
        this.likedId = this.idStore.liked.find(id => (id === this.idStore.moreAlike[index].id ))
    }

}
</script>