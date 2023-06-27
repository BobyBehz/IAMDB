<template>
    <div class="flex flex-col gap-2 justify-center xl:flex-row container">
        <input 
            class="m-auto input rounded-full border border-solid border-white py-3 pl-8 small-t xl:hidden" 
            placeholder="Your favorite movie ..." 
            @keyup.enter="idStore.getAPI(); directToMovie()" 
            type="text" v-model="idStore.searchedName"
        >
        <input 
            class="m-auto input rounded-full border border-solid border-white py-3 pl-8 hidden xl:block" 
            placeholder="Type the name of your favorite movie ..." 
            @keyup.enter="idStore.getAPI(); directToMovie()" 
            type="text" v-model="idStore.searchedName"
        >
        <button @click="idStore.getAPI(); directToMovie()" class="m-auto btn primary-red rounded-full">
            search
        </button>
    </div>
</template>

<style scoped>
.btn, .input {
    width: 330px;
    height: 44px;
}
.input {
    background-color: var(--primary-color);
    
}
::-webkit-input-placeholder {
    color: rgb(238, 235, 221, 0.3);
}
@media (min-width: 1200px) {
    .h1 {
        font-size: 96px;
        line-height: 112.5px;
    }
    .btn, .input {
        height: 61px;
    }
    .btn {
        width: 162px;
    }
    .input {
        width: 1018px;
        font-size: 21px;
        line-height: 24px;
    }
    ::-webkit-input-placeholder {
        font-size: 21px;
        line-height: 24px;
    }
}
</style>
<script>
import {mapStores} from 'pinia'
import {useIdStore} from '@/stores/Id'

export default {
    computed: {
        ...mapStores(useIdStore)
    },
    methods: {
        directToMovie() {
            setTimeout( () => {
                this.$router.push({ name : 'movie'})
            },3000)
        },
    },
}
</script>