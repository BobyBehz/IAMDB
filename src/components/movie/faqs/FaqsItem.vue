<template>
    <li v-if="idStore.faqs" v-for="(item, index) in answerVisibility">
        <p @click="showParagraph(index)" class="fw-700 medium-t p-0 mb-3 cursor-pointer inline-block">{{ idStore.faqs[index].question }}</p>
        <div :class="['py-1', 'pl-6', 'mb-4', 'border-l-4', 'border-solid', 'border-light-red', answerVisibility[index] ? 'block' : 'hidden']">
            <p class="answer-font w-full m-0 opacity-60 xl:w-full ">{{ idStore.faqs[index].answer }}</p>
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
        },
    },
}
</script>