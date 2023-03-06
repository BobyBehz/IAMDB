<template>
    <li v-for="item in castIndex" class="flex items-center gap-3 py-3">
        <div>
            <img class="w-75p aspect-square rounded-full" src="@/assets/images/cast/robert downey.png" alt="">
        </div>
        <div>
            <h3 class="small-t fw-700">Robert Downey Jr.</h3>
            <p class="smaller-t mt-1 opacity-60">as Tony Stark</p>
        </div>
    </li>
    <li class="show-all mt-7 text-light-red medium-t gap-4 flex items-center justify-center justify-content-xl-start">
        Show {{ show }}
        <button @click="addCast">
            <div class="show-all-vector flex items-center border-solid border-light-red border w-6 rounded-full aspect-square pl-2">
                <img src="@/assets/images/Vector.png" alt="vector">
            </div>
        </button>
    </li>
</template>

<script>
import { mapStores } from 'pinia'
import {useIdStore} from '@/stores/Id'

export default {
    data() {
        return {
            castIndex: 5,
            show: 'all'
        }
    },
    computed: {
        ...mapStores(useIdStore)
    },
    methods: {
        addCast() {
            if (this.castIndex === 5) {
                this.castIndex = 10
                this.show = 'less'
            } else {
                this.castIndex = 5
                this.show = 'all'
            }
        }
    },

}
</script>