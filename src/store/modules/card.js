import { getStarship } from 'api/starships';

export default {
    namespaced: true,

    state: {
        item: null
    },

    actions: {
        /**
         * Sets the data
         * @param {Function} dispatch
         * @param {Function} commit
         * @param {string} id
         */
        async setData({ dispatch, commit }, id) {
            dispatch('setLoading', true, { root: true });

            const response = await getStarship(id);

            if (!response) {
                dispatch('setTitle', '404', { root: true });
                dispatch('setLoading', false, { root: true });
                return;
            }

            commit('item', response);

            dispatch('setTitle', response.name, { root: true });
            dispatch('setLoading', false, { root: true });
        }
    },

    mutations: {
        /**
         * Mutates the state of the starship
         * @param {Object} state
         * @param {Object} value
         */
        item(state, value) {
            state.item = value;
        }
    }
};
