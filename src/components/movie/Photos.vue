<template>
    <div class="paddingx-15">
        <PhotosList>
            <PhotosItem/>
        </PhotosList>
    </div>
</template>

<script>
import PhotosList from '../movie/photos/PhotosList.vue'
import PhotosItem from '../movie/photos/PhotosItem.vue'

export default {
    components: {
        PhotosItem, PhotosList
    }
}
</script>