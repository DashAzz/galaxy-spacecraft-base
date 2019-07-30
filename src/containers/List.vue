<script>
import { mapState, mapActions } from 'vuex';

import Item from 'components/Item';
import Pagination from 'components/Pagination';
import SearchForm from 'components/SearchForm';

export default {
    name: 'List',

    components: {
        Item,
        Pagination,
        SearchForm
    },

    computed: {
        ...mapState([ 'isLoading' ]),
        ...mapState('starships', [ 'count', 'items', 'next', 'prev' ])
    },

    created() {
        this.setData(this.$route.query);
    },

    methods: {
        ...mapActions('starships', [ 'setData' ]),

        /**
         * Goes to selected page
         * @param {number} page
         */
        goToPage(page) {
            this.search({ ...this.$route.query, ...{ page } });
        },

        /**
         * Updates search results and rout
         * @param {Object} query
         */
        search(query) {
            this.$router.push({ query });
            this.setData(query);
        }
    }
}
</script>

<template lang="pug">
.py-5
    SearchForm.mb-4(
        :isLoading="isLoading"
        @search="search"
    )

    p Starships found: {{count}}

    .list-group.mb-4(v-if="items.length")
        Item(
            v-for="item in items"
            :item="item"
            :key="item.id"
        )

    Pagination(
        v-if="prev || next"
        :prev="prev"
        :next="next"
        :isLoading="isLoading"
        @change="goToPage"
    )
</template>
