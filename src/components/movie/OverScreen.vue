<template>
    <section :class="['bg-over-screen-color',overScreen ? 'block' : 'hidden'  ,'absolute', 'h-full', 'inset-0', 'z-50']">
        <div class="screen-img block bg-cover bg-center opacity-100 rounded-xl mx-auto relative">
            <button @click="removeScreen" class="border-2 border-secondary-color border-solid w-10 aspect-square rounded-full right-4 top-4 left-auto block absolute">

            </button>
        </div>
    </section>
</template>

<style>
.screen-img {
    background-image: url(../../assets/images/screenshots/movie-pic-7.png);
    width: 946px;
    height: 631px;
    margin-top: 996px;
}
</style>

<script>
export default {
    data() {
        return {
            overScreen: false,
        }
    },
    methods: {
        removeScreen() {
            this.overScreen = false
        }
    }

}
</script>