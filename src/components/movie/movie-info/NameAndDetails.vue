<template>
    <div class="basis-full xl:basis-2/4">
        <Title/>
        <YearAndDuration/>
        <Links/>
        <Summary/>
        <DetailList>
            <DetailItem/>
        </DetailList>
    </div>
</template>

<script>
import Title from '../movie-info/title/Title.vue'
import YearAndDuration from '../movie-info/title/YearAndDuration.vue'
import Links from '../movie-info/title/Links.vue'
import Summary from '../movie-info/title/Summary.vue'
import DetailList from '../movie-info/title/DetailList.vue'
import DetailItem from '../movie-info/title/DetailItem.vue'

export default {
    components: {
        Title,YearAndDuration,Links,Summary,DetailList,DetailItem,
    }
}
</script>