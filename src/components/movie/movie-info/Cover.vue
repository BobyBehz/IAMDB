<template>
    <div class="hidden xl:block basis-1/4 pl-16 -mt-11 -ml-16 mr-14">
        <img v-if="image" class="object-cover w-full mb-4 h-415" :src="image" alt="Movie man cover">
        <div class="flex items-center ml-3 gap-4 rating-div">
            <Rating/>
            <Views/>
        </div>
    </div>
</template>

<style scoped>
.h-415 {
    height: 415px;
    width: 276px;
}
.movie-img {
    width: 230px;
    height: 342px;
}
</style>
<script>
import Rating from '../movie-info/cover/Rating.vue'
import Views from '../movie-info/cover/Views.vue'

import { mapStores } from 'pinia'
import {useIdStore} from '@/stores/Id'

export default {
    components: {
        Rating, Views
    },
    data() {
        return {
            image: null,
        }
    },
    computed: {
        ...mapStores(useIdStore)
    },
    // mounted() {
    //     fetch('https://imdb-api.com/en/API/Title/k_i6429ou2/' + this.idStore.movieId)
    //             .then(res => res.text())
    //             .then(res => JSON.parse(res))
    //             .then(res => {
    //                this.image = res.image
    //             })
    // }
}
</script>