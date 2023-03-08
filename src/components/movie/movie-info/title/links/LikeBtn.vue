<template>
    <button @click="likeThis()" class="rounded-full">
        <div :class="['border-solid', 'border-2', 'border-secondary-color', 'hover:bg-fade-white', 'rounded-full', 'flex', 'w-11', 'xl:w-14', 'aspect-square', 'p-2.5', 'items-center', 'justify-center', 'transition-all'
        ,idStore.heart ? 'bg-light-red hover:bg-light-red' : '']">
        <img class="xl:w-4 heart-w aspect-square mt-0.5" src="@/assets/images/heart.png" alt="">
        </div>
    </button>
</template>

<style scoped>
.heart-w {
    width: 21px
}
</style>

<script>
import { mapActions, mapStores } from 'pinia'
import {useIdStore} from '@/stores/Id'

export default {
    computed: {
        ...mapStores(useIdStore)
    },
    methods: {
        ...mapActions(useIdStore , ['likeMovie']),
        likeThis() {
            if (this.idStore.heart) {
                this.idStore.heart = null
                this.idStore.liked.splice(this.idStore.liked.length - 1, 1)
            } else {
                this.idStore.heart = this.idStore.movieId
                this.idStore.liked.push(this.idStore.movieId)
            }
        }
    },
}
</script>