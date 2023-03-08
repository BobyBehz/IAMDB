<template>
    <ul class= "xl:mt-6 xl:-mb-6 gap-6 my-6 flex flex-nowrap pl-0 list-none overflow-y-hidden overflow-x-scroll no-scrollbar">
        <MoreItem/>
    </ul>
</template>


<script>
import MoreItem from '../more-like-this/MoreItem.vue'

export default {
    components:  {
        MoreItem,
    }
}
</script>