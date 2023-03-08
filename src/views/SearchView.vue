<template>
    <div class="search-background paddingx-15 bg-cover bg-center absolute inset-0">
        <Iamdb/>
        <Search/>
    </div>       
</template>

<style>
    .search-background {
        background-image: url(../assets/images/search-background.png);
    }
</style>

<script>
import Iamdb from '@/components/search/Iamdb.vue'
import Search from '@/components/search/Search.vue'


export default {
    components: {
        Iamdb,Search
    },
}
</script>