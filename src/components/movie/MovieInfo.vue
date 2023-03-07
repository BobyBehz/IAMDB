<template>
    <div class="paddingx-15 flex flex-wrap -mt-24 xl:-mt-32 container">
        <Cover/>
        <NameAndDetails/>
        <CastAndCrew/>
    </div>
</template>

<script> 
import Cover from '@/components/movie/movie-info/Cover.vue'
import NameAndDetails from '@/components/movie/movie-info/NameAndDetails.vue'
import CastAndCrew from '@/components/movie/movie-info/CastAndCrew.vue'

export default {
    components: {
        Cover, NameAndDetails, CastAndCrew
    }
}

</script>