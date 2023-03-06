<template>
    <p class="mb-11 smaller-t opacity-60">After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.</p>
</template>


<script>
import {mapStores} from 'pinia'
import {useIdStore} from '@/stores/Id'

export default {
    computed: {
        ...mapStores(useIdStore)
    }
}
</script>