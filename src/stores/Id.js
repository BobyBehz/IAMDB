import { defineStore } from 'pinia'

export const useIdStore = defineStore('id', {
    state: () => {
        return {
            movieId: 'tt0371746',
            overScreen: false,
            overScreenImage: null,
            liked: [],
            heart: null,
                
            
        }
    },
    actions: {
        likeMovie() {
            this.liked.push(this.movieId)
            console.log(this.liked)
        }
    }
})
