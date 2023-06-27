<template>
    <li class="flex items-center border-solid border-fade-secondary-color border-b-2">
        <div class="basis-1/2 xl:basis-1/3 col-xl-4 grow-0 shrink-0">
            <h3 class="small-t m-0 fw-700">Writers</h3>
        </div>
        <div class="basis-1/2 xl:basis-2/3 col-xl-8 grow-0 shrink-0">
            <p v-if="idStore.details[0]" class="my-3 mx-0 smaller-t opacity-60">{{ idStore.details[0] }}</p>
        </div>
    </li>
    <li class="flex items-center border-solid border-fade-secondary-color border-b-2">
        <div class="basis-1/2 xl:basis-1/3 col-xl-4 grow-0 shrink-0">
            <h3 class="small-t m-0 fw-700">Genres</h3>
        </div>
        <div class="basis-1/2 xl:basis-2/3 col-xl-8 grow-0 shrink-0">
            <p v-if="idStore.details[1]" class="my-3 mx-0 smaller-t opacity-60">{{ idStore.details[1] }}</p>
        </div>
    </li>
    <li class="flex items-center border-solid border-fade-secondary-color border-b-2">
        <div class="basis-1/2 xl:basis-1/3 col-xl-4 grow-0 shrink-0">
            <h3 class="small-t m-0 fw-700">Awards</h3>
        </div>
        <div class="basis-1/2 xl:basis-2/3 col-xl-8 grow-0 shrink-0">
            <p v-if="idStore.details[2]" class="my-3 mx-0 smaller-t opacity-60">{{ idStore.details[2] }}</p>
        </div>
    </li>
    <li class="flex items-center">
        <div class="basis-1/2 xl:basis-1/3 col-xl-4 grow-0 shrink-0">
            <h3 class="small-t m-0 fw-700">Country of Origin</h3>
        </div>
        <div class="basis-1/2 xl:basis-2/3 col-xl-8 grow-0 shrink-0">
            <p v-if="idStore.details[3]" class="my-3 mx-0 smaller-t opacity-60">{{ idStore.details[3] }}</p>
        </div>
    </li>
    <li class="flex items-center xl:hidden">
        <div class="basis-1/2 xl:basis-1/3 col-xl-4 grow-0 shrink-0">
            <h3 class="small-t m-0 fw-700">IMDB Rating</h3>
        </div>
        <div class="basis-1/2 xl:basis-2/3 col-xl-8 grow-0 shrink-0">
            <p v-if="idStore.details[4]" class="my-3 mx-0 smaller-t opacity-60">{{ idStore.details[4] }}</p>
        </div>
    </li>
</template>

<script>
import {mapStores} from 'pinia'
import {useIdStore} from '@/stores/Id'
export default {
    data() {
        return {
            details: [    
            {
                detailsTitle : 'Writers',
                detailsContent: null,
            }, 
            
            {
                detailsTitle : 'Genres',
                detailsContent: null,
            }, 
            
            {
                detailsTitle : 'Awards',
                detailsContent: null,
            }, 
            
            {
                detailsTitle : 'Country of Origin',
                detailsContent: null,
            }, 
            
            {
                detailsTitle : 'IMDB Rating',
                detailsContent: null,
            },
            ]
        }
    },
    computed: {
        ...mapStores(useIdStore)
    },
    mounted() {
        // fetch('https://imdb-api.com/en/API/Title/k_i6429ou2/' + this.idStore.movieId)
        //     .then(res => res.text())
        //     .then(res => JSON.parse(res))
        //     .then(res => {
        //         console.log(res)
        //         this.details[0].detailsContent = res.writers
        //         this.details[1].detailsContent = res.genres
        //         this.details[2].detailsContent =  res.awards
        //         this.idStore.details[3] = res.countries
        //         this.idStore.details[4] = res.imDbRating
        //     })
    }

}
</script>
