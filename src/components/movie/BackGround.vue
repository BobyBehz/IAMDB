<template>
    <div class="background-img bg-cover bg-center block">
    </div>
</template>

<style scoped>
.background-img {
    background-image: url(@/assets/images/background.jpg);
    min-height: 41vh;
}
@media (min-width: 1200px) {
    .background-img {
        height: 88vh;
    }
}
</style>