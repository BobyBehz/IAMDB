<template>
    <div class="hidden xl:block basis-1/4 pl-16 -mt-11 -ml-16 mr-14">
        <img class="object-cover w-full mb-4 h-415" src="@/assets/images/iron man cover.png" alt="Movie man cover">
        <div class="flex items-center ml-3 gap-4 rating-div">
            <!-- <div class="imdb-score flex items-center bg-main-color relative aspect-square rounded-full fw-700 m-1.5 pl-5 after:absolute after:inset-0 after:-m-1.5 after:-z-10 after:rounded-full bi">
                7.9
            </div> -->
            <Rating/>
            <!-- <div class="flex flex-wrap flex-col gap-1.5">
                <span class="small-t">1,046,592 </span>
                <p class="smaller-t opacity-100 m-0">ratings on IMDB</p>
            </div> -->
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

export default {
    components: {
        Rating, Views
    }
}
</script>