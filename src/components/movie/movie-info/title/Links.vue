<template>
    <div class="trailer-font flex gap-5 mb-10 items-center">
        <TrailerBtn/>
        <ShareBtn/>
        <LikeBtn/>
        <!-- <a v-if="video" class="rounded-full " :href="video" title="whatch the trailer" target="_blank">
            <div class=" trailer-btn flex items-center justify-center bg-light-red hover:bg-dark-red px-6 xl:px-14 trailer-font rounded-full gap-3 transition-all">
                <div class="mb-1.5">Watch thrailer</div>
                <img class="play-img" src="@/assets/images/play image.png" alt="">
            </div>
        </a>
        <a class="rounded-full" href="#" title="share" target="_blank">
            <div class="share-div border-solid border-2 border-secondary-color hover:bg-fade-white rounded-full flex w-11 xl:w-14 aspect-square p-2.5 items-center justify-center transition-all">
                <img class="xl:w-5 w-4 mr-0.5 aspect-square" src="@/assets/images/Share.png" alt="share img">
            </div>
        </a>
        <button @click="likeThis()" class="rounded-full">
            <div :class="['border-solid', 'border-2', 'border-secondary-color', 'hover:bg-fade-white', 'rounded-full', 'flex', 'w-11', 'xl:w-14', 'aspect-square', 'p-2.5', 'items-center', 'justify-center', 'transition-all'
            ,idStore.heart ? 'bg-light-red hover:bg-light-red' : '']">
                <img class="xl:w-4 heart-w aspect-square mt-0.5" src="@/assets/images/heart.png" alt="">
            </div>
        </button> -->
    </div>
</template>

<style scoped>
.heart-w {
    width: 21px
}
.play-img {
    width: 14.66px;
    height: 18px;
}
.trailer-btn {
    width: 177px;
    height: 44px
}
@media (min-width: 1200px) {
    .trailer-btn {
        width: 277px;
        height: 61px
    }
    .play-img {
        width: 17px;
        height: 21px;
    }
}
</style>

<script>
import LikeBtn from '../title/links/LikeBtn.vue'
import ShareBtn from '../title/links/ShareBtn.vue'
import TrailerBtn from '../title/links/TrailerBtn.vue'

import { mapActions, mapStores } from 'pinia'
import {useIdStore} from '@/stores/Id'

export default {
    components: {
        LikeBtn,ShareBtn,TrailerBtn
    },
    data() {
        return {
            video: null,
        }
    },
    computed: {
        ...mapStores(useIdStore),
        isItLiked() {
            return this.heart = this.idStore.liked.find(element => element === idStore.movieId)    
        }
    },
    methods: {
        ...mapActions(useIdStore , ['likeMovie']),
        likeThis() {
            if (this.idStore.heart) {
                this.idStore.heart = null
                this.idStore.liked.splice(this.idStore.liked.length - 1, 1)
            } else {
                this.idStore.heart = this.idStore.movieId
                this.idStore.liked.push(this.idStore.movieId)
            }
            console.log(this.idStore.liked)
        }
    },
    mounted() {
        // fetch('https://imdb-api.com/en/API/Trailer/k_i6429ou2/' + this.idStore.movieId)
        //     .then(res => res.text())
        //     .then(res => JSON.parse(res))
        //     .then(res => {
        //         this.video = res.link
        //     })
    }

}
</script>