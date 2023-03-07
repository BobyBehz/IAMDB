<template>
    <div class="paddingx-15 mt-20 container">
        <h2 class="pb-6 mt-6 h2-font fw-700">FAQs</h2>
        <FaqsList/>
    </div>
</template>


<script>
import FaqsList from '../movie/faqs/FaqsList.vue'

export default {
    components: {
        FaqsList,
    }

}
</script>