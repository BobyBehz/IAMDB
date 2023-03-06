<template>
    <div class="basis-full">
        <h2 class="big-t mt-14">Cast & Crew</h2>
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