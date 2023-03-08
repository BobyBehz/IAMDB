<template>
    <div class="paddingx-15 container">
        <Iamdb/>
        <Search/>
    </div>       
</template>

<script>
import Iamdb from '@/components/search/Iamdb.vue'
import Search from '@/components/search/Search.vue'


export default {
    components: {
        Iamdb,Search
    },
}
</script>