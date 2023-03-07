<template>
    <div class="basis-full xl:basis-1/5 -mt-14 ml-14 fw-700">
        <h2 class="mt-14 h2-font">Cast & Crew</h2>
        <CastList>
            <CastItem/>
        </CastList>
    </div>
</template>

<script>
import CastList from '../movie-info/cast/CastList.vue'
import CastItem from '../movie-info/cast/CastItem.vue'

export default {
    components: {
        CastList, CastItem,
    }
}
</script>