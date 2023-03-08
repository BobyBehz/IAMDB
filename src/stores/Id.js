import { defineStore } from 'pinia'

export const useIdStore = defineStore('id', {
    state: () => {
        return {
            movieId: 'tt0371746',
            overScreen: false,
        }
    },
})
