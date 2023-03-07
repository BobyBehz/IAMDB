<template>
    <ul class= "xl:gap-0 xl:mt-6 xl:-mb-6 gap-6 my-6 flex flex-nowrap pl-0 list-none overflow-y-hidden overflow-x-scroll xl:overflow-x-hidden">
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