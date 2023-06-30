<template>
    <section :class="['bg-over-screen-color',idStore.overScreen ? 'xl:block' : ''  ,'absolute', 'h-full', 'inset-0', 'z-50', 'hidden']">
        <div class="screen-img block opacity-100 rounded-xl mx-auto sticky">
            <img v-if="idStore.overScreenImage" class="object-center object-cover rounded-xl" :src="idStore.overScreenImage" alt="movie img">
            <button @click="removeScreen" class="border-2 border-secondary-color border-solid w-10 aspect-square rounded-full right-4 top-4 left-auto absolute flex justify-center items-center">
                <img src="@/assets/images/exit.png" alt="exit">
            </button>
        </div>
    </section>
</template>

<style>
.screen-img {
    width: 946px;
    height: 631px;
    margin-top: 140vh;
}
</style>

<script>
import { mapStores } from 'pinia'
import {useIdStore} from '@/stores/Id'

export default {
    data() {

    },
    computed: {
        ...mapStores(useIdStore)
    },
    methods: {
        removeScreen() {
            this.idStore.overScreen = false
        }
    }

}
</script>