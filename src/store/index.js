import Vue from 'vue';
import Vuex from 'vuex';

import card from './modules/card';
import starships from './modules/starships';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',

    state: {
        title: 'GSB',
        isLoading: false
    },

    actions: {
        /**
         * Sets the page title
         * @param {Function} commit
         * @param {string} title
         */
        setTitle({ commit }, title) {
            commit('title', title);
        },

        /**
         * Sets the loading state
         * @param {Function} commit
         * @param {boolean} isLoading
         */
        setLoading({ commit }, isLoading) {
            commit('isLoading', isLoading);
        }
    },

    mutations: {
        /**
         * Mutates the state of the page title
         * @param {Object} state
         * @param {string} value
         */
        title(state, value) {
            state.title = `GSB | ${value}`;
        },

        /**
         * Mutates the state of the loading
         * @param {Object} state
         * @param {boolean} value
         */
        isLoading(state, value) {
            state.isLoading = value;
        }
    },

    modules: {
        card,
        starships
    }
});
