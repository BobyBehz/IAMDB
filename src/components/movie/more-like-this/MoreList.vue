<template>
    <ul class= "xl:mt-6 xl:-mb-6 gap-6 my-6 flex flex-nowrap pl-0 list-none animation overflow-y-hidden no-scrollbar overflow-x-auto snap-x snap-mandatory">
        <MoreItem/>
    </ul>
</template>

<style scoped>

.animation {
    animation: scroll 1s linear infinite;
}

</style>

<script>
import MoreItem from '../more-like-this/MoreItem.vue'

export default {
    components:  {
        MoreItem,
    }
}
</script>