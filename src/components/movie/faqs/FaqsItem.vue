<template>
    <li v-if="faqs" v-for="(item, index) in answerVisibility">
        <p @click="showParagraph(index)" class="fw-700 medium-t p-0 mb-3 cursor-pointer inline-block">{{ faqs[index].question }}</p>
        <div :class="['py-1', 'pl-6', 'mb-4', 'border-l-4', 'border-solid', 'border-light-red', answerVisibility[index] ? 'block' : 'hidden']">
            <p class="answer-font w-full m-0 opacity-60 xl:w-full ">{{ faqs[index].answer }}</p>
        </div>
    </li>
</template>

<style scoped>
.width-306 {
    width: 330px
}
</style>
<script>
import { mapStores } from 'pinia'
import {useIdStore} from '@/stores/Id'

export default {
    data() {
        return {
            answerVisibility: [false, false, false, false, false, false, false, false, false],
            faqs: null,
        }
    },
    computed: {
        ...mapStores(useIdStore)
    },
    methods: {
        showParagraph(index) {
            if (this.answerVisibility[index] === false) {
                this.answerVisibility[index] = true
            } else {
                this.answerVisibility[index] = false
            }
            console.log(this.answerVisibility[index])
        },
        getAPI() {
            fetch('https://imdb-api.com/en/API/FAQ/k_i6429ou2/' + this.idStore.movieId)
            .then(res => res.text())
            .then(res => JSON.parse(res))
            .then(res => {
                console.log(res)
                this.faqs = res.items
            })
        }
    },
    mounted() {
        fetch('https://imdb-api.com/en/API/FAQ/k_i6429ou2/' + this.idStore.movieId)
            .then(res => res.text())
            .then(res => JSON.parse(res))
            .then(res => {
                console.log(res)
                this.faqs = res.items
            })
    }
    

}
</script>