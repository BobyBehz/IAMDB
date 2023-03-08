<template>
    <div class="trailer-font flex gap-5 mb-10 items-center">
        <TrailerBtn/>
        <ShareBtn/>
        <LikeBtn/>
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


export default {
    components: {
        LikeBtn,ShareBtn,TrailerBtn
    },

}
</script>