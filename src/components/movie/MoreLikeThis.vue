<template>
    <div class="padding-left-15 mt-12 container">
        <h2 class="h2-font fw-700">More like this</h2>
        <MoreList/>
    </div>
</template>

<style>
.padding-left-15 {
    padding-left: 15px;
    padding-right: 0px;
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