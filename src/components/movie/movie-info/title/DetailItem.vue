<template>
    <li v-for="(item, index) in details" :class="['flex details-row', 'items-center', 'border-solid', border ? 'border-b-2' : 'border-b-0' , 'border-fade-secondary-color']">
        <div class="basis-1/2 xl:basis-1/3 col-xl-4 grow-0 shrink-0">
            <h3 class="small-t m-0">{{ details[index].detailsTitle }}</h3>
        </div>
        <div class="basis-1/2 xl:basis-2/3 col-xl-8 grow-0 shrink-0">
            <p v-if="details[index].detailsContent" class="my-3 mx-0 smaller-t opacity-60">{{ details[index].detailsContent }}</p>
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
            details: [    
            {
                detailsTitle : 'Writers',
                detailsContent: useIdStore.writers
            }, 
                
            {
                detailsTitle : 'Genres',
                detailsContent: useIdStore.genres
            }, 
                
            {
                detailsTitle : 'Awards',
                detailsContent: useIdStore.awards
            }, 
                
            {
                detailsTitle : 'Country of Origin',
                detailsContent: useIdStore.countries
            }, 
                
            {
                detailsTitle : 'IMDB Rating',
                detailsContent: useIdStore.score
            }
            ]
        }
    },
    computed: {
        ...mapStores(useIdStore)
    }
}
</script>
