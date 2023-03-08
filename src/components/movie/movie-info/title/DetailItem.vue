<template>
    <li v-for="(item, index) in 3" class="flex items-center border-solid border-fade-secondary-color border-b-2">
        <div class="basis-1/2 xl:basis-1/3 col-xl-4 grow-0 shrink-0">
            <h3 class="small-t m-0 fw-700">{{ details[index].detailsTitle }}</h3>
        </div>
        <div class="basis-1/2 xl:basis-2/3 col-xl-8 grow-0 shrink-0">
            <p v-if="details[index].detailsContent" class="my-3 mx-0 smaller-t opacity-60">{{ details[index].detailsContent }}</p>
        </div>
    </li>
    <li class="flex items-center">
        <div class="basis-1/2 xl:basis-1/3 col-xl-4 grow-0 shrink-0">
            <h3 class="small-t m-0 fw-700">{{ details[3].detailsTitle }}</h3>
        </div>
        <div class="basis-1/2 xl:basis-2/3 col-xl-8 grow-0 shrink-0">
            <p v-if="details[3].detailsContent" class="my-3 mx-0 smaller-t opacity-60">{{ details[3].detailsContent }}</p>
        </div>
    </li>
    <li class="flex items-center xl:hidden">
        <div class="basis-1/2 xl:basis-1/3 col-xl-4 grow-0 shrink-0">
            <h3 class="small-t m-0 fw-700">{{ details[4].detailsTitle }}</h3>
        </div>
        <div class="basis-1/2 xl:basis-2/3 col-xl-8 grow-0 shrink-0">
            <p v-if="details[4].detailsContent" class="my-3 mx-0 smaller-t opacity-60">{{ details[4].detailsContent }}</p>
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
        fetch('https://imdb-api.com/en/API/Title/k_i6429ou2/' + this.idStore.movieId)
            .then(res => res.text())
            .then(res => JSON.parse(res))
            .then(res => {
                console.log(res)
                this.details[0].detailsContent = res.writers
                this.details[1].detailsContent = res.genres
                this.details[2].detailsContent =  res.awards
                this.details[3].detailsContent = res.countries
                this.details[4].detailsContent = res.imDbRating
            })
    }

}
</script>
