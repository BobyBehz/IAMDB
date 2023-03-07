<template>
    <li v-for="detail in 5" :class="['flex details-row', 'items-center', 'border-solid', border ? 'border-b-2' : 'border-b-0' , 'border-fade-secondary-color']">
        <div class="basis-1/2 xl:basis-1/3 col-xl-4 grow-0 shrink-0">
            <h3 class="small-t m-0">Writers</h3>
        </div>
        <div class="basis-1/2 xl:basis-2/3 col-xl-8 grow-0 shrink-0">
            <p class="my-3 mx-0 smaller-t opacity-60">Mark Fergus, Hawk Ostby, Art Marcum</p>
        </div>
    </li>
</template>

<script>
import {mapStores} from 'pinia'
import {useIdStore} from '@/stores/Id'
export default {
    data() {
        return {
            border: true,
        }
    },
    computed: {
        ...mapStores(useIdStore)
    }
}
</script>
