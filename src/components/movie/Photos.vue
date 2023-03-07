<template>
    <div class="paddingx-15 mt-20 container">
        <h2 class="h2-font mt-4 fw-700">Photos</h2>
        <PhotosList/>
    </div>
</template>

<script>
import PhotosList from '../movie/photos/PhotosList.vue'

export default {
    components: {
        PhotosList,
    }
}
</script>