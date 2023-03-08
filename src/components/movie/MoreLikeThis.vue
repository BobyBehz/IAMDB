<template>
    <div class="padding-left-15 mt-12">
        <h2 class="h2-font fw-700 container xl:pl-3.5">More like this</h2>
        <MoreList/>
    </div>
</template>

<style>
.padding-left-15 {
    padding-left: 15px;
    padding-right: 0px;
}
@media (min-width: 1200px) {
    .padding-left-15 {
        padding-left: 0px;
    }
}
</style>

<script>
import MoreList from '../movie/more-like-this/MoreList.vue'

export default {
    components: {
        MoreList,
    }
}
</script>