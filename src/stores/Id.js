import { defineStore } from 'pinia'

export const useIdStore = defineStore('id', {
    state: () => {
        return {
            movieName: null,
            movieId: null,

            moreAlike: null,
            photos: null,
            cast: null,
            score: null,
            views: null,
            trailerLink: null,
            summary: null,
            details: [],
            title: null,
            cover: null,
            directors: null,
            year: null,
            duration: null,
            contentRating: null,
            faqs: null,

            overScreen: false,
            overScreenImage: null,
            liked: [],
            heart: null,
  
        }
    },
    actions: {
        getAPI() {
            fetch('https://imdb-api.com/en/API/SearchMovie/k_i6429ou2/' + this.movieName)
            .then(res => res.text())
            .then(res => JSON.parse(res))
            .then(res => {
                this.movieId = res.results[0].id
            })
            .then(this.getTitle)
            // .then(this.getFaqs)      
        },
        getTitle() {
                fetch('https://imdb-api.com/en/API/Title/k_i6429ou2/' + this.movieId + '/FullActor,FullCast,Posters,Images,Trailer,Ratings,')
                .then(res => res.text())
                .then(res => JSON.parse(res))
                .then(res => {
                    console.log(res)
                    this.photos = res.images.items
                    this.moreAlike = res.similars
                    this.cast = res.actorList
                    this.score = res.imDbRating
                    this.views = res.imDbRatingVotes
                    this.trailerLink = res.trailer.link
                    this.summary = res.plot
                    this.details = [res.writers, res.genres, res.awards, res.countries, res.imdbratings]
                    this.title = res.title
                    this.directors = res.directors
                    this.year = res.year
                    this.duration = res.runtimeStr
                    this.contentRating = res.contentRating
                    this.cover = res.image
                })
        },
        getFaqs() {
            fetch('https://imdb-api.com/en/API/FAQ/k_i6429ou2/' + this.movieId)
            .then(res => res.text())
            .then(res => JSON.parse(res))
            .then(res => {
                this.faqs = res.items
            })
        },
        b() {
            alert('ass')
        }
    },
    getters: {

    }
})
