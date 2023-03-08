import { defineStore } from 'pinia'

export const useIdStore = defineStore('id', {
    state: () => {
        return {
            movieId: 'tt0371746',
            overScreen: false,
            title: null,
            director: null,
            year: null,
            pg: null,
            duration: null,
            image: null,
            score: null,
            views: null,
            writers: null,
            genres: null,
            awards: null,
            countries: null,
            moreAlike: null,
            summary: null,


        }
    },
    actions: {
        getAPI() {
            fetch('https://imdb-api.com/en/API/Title/k_i6429ou2/' + this.movieId)
            .then(res => res.text())
            .then(res => JSON.parse(res))
            .then(res => {
                console.log(res)
                this.title = res.title
                this.director = res.directors
                this.year = res.year
                this.pg = res.contentRating
                this.duration = res.runtimeStr
                this.image = res.image
                this.score = res.imDbRating
                this.views = res.imDbRatingVotes
                this.writers = res.writers
                this.genres = res.genres
                this.awards =  res.awards
                this.countries = res.countries
                this.moreAlike = res.similars
                this.summary = res.plot
            })
        }
    }
})
