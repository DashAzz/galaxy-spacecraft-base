<script>
import { mapState } from 'vuex';

export default {
    name: 'App',

    computed: mapState([ 'title' ])
}
</script>

<template lang="pug">
.container
    router-view(v-title="title")
</template>
