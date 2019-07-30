<script>
import { mapState, mapActions } from 'vuex';

import NotFound from 'components/NotFound';

export default {
    name: 'Card',

    components: {
        NotFound
    },

    data() {
        return {
            infoItems: [
                { name: 'Model', key: 'model' },
                { name: 'Class', key: 'starship_class' },
                { name: 'Manufacturer', key: 'manufacturer' },
                { name: 'Cost', key: 'cost_in_credits', unit: 'galactic credits' },
                { name: 'Length', key: 'length', unit: 'm' },
                { name: 'Crew', key: 'crew' },
                { name: 'Passengers', key: 'passengers' },
                { name: 'Speed', key: 'max_atmosphering_speed', unit: 'n/a' },
                { name: 'Rating', key: 'hyperdrive_rating' },
                { name: 'MGLT', key: 'MGLT' },
                { name: 'Cargo capacity', key: 'cargo_capacity', unit: 'kg' },
                { name: 'Consumables', key: 'consumables' }
            ]
        };
    },

    computed: {
        ...mapState([ 'isLoading' ]),
        ...mapState('card', [ 'item' ])
    },

    created() {
        this.setData(this.$route.params.id);
    },

    methods: {
        ...mapActions('card', [ 'setData' ])
    }
}
</script>

<template lang="pug">
div(v-if="!isLoading")
    .py-5(v-if="item")
        h2.mb-4 {{item.name}}

        ul.list-group
            li.list-group-item(v-for="infoItem in infoItems")
                b.mb-1 {{infoItem.name}}:
                span.ml-1 {{item[infoItem.key]}} {{item[infoItem.key] || ''}}

    NotFound(v-else)
</template>
