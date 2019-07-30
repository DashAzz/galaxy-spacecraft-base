<script>
import { mapActions } from 'vuex';

import NotFound from 'components/NotFound';

export default {
    name: 'ErrorPage',

    components: {
        NotFound
    },

    created() {
        this.setTitle('404');
    },

    methods: {
        ...mapActions([ 'setTitle' ])
    }
}
</script>

<template lang="pug">
NotFound
</template>
