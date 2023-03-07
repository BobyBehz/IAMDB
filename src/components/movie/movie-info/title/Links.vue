<template>
    <div class="trailer-font flex gap-5 mb-10 items-center">
        <a class="rounded-full " href="#" title="whatch the trailer" target="_blank">
            <div class=" trailer-btn flex items-center bg-light-red hover:bg-dark-red px-6 xl:px-14 trailer-font rounded-full gap-3 transition-all">
                <div class="ml-3 xl:ml-4 xl:mb-1">Watch thrailer</div>
                <img src="" alt="">
            </div>
        </a>
        <a class="rounded-full" href="#" title="share" target="_blank">
            <div class="share-div border-solid border-2 border-secondary-color hover:bg-fade-white rounded-full flex w-11 xl:w-14 aspect-square p-2.5 items-center transition-all">
                <img src="" alt="">
            </div>
        </a>
        <button class="rounded-full">
            <div class="border-solid border-2 border-secondary-color hover:bg-fade-white rounded-full flex w-11 xl:w-14 aspect-square p-2.5 items-center transition-all">
                <img src="" alt="">
            </div>
        </button>
    </div>
</template>

<style>
.trailer-btn {
    width: 177px;
    height: 44px
}
@media (min-width: 1200px) {
    .trailer-btn {
        width: 277px;
        height: 61px
    }
}
</style>