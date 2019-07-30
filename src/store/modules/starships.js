import { getStarships } from 'api/starships';

/**
 * Returns the page number
 * @param {?string} page
 * @param {undefined|string} currentPage
 * @param {number} direction
 * @return {number}
 */
function getPage(page, currentPage, direction) {
    if (!page) {
        return null;
    }

    return (Number(currentPage) || 1) + direction;
}

/**
 * Returns the prepared item of list starships
 * @param {Object} item
 * @return {Object}
 */
function getItem(item) {
    const splittedUrl = item.url.split('/');
    const id = splittedUrl[splittedUrl.length - 2];

    return { ...item, id };
}

export default {
    namespaced: true,

    state: {
        count: 0,
        items: [],
        next: null,
        prev: null
    },

    actions: {
        /**
         * Sets the data
         * @param {Function} dispatch
         * @param {Function} commit
         * @param {Object} params
         */
        async setData({ dispatch, commit }, params) {
            dispatch('setLoading', true, { root: true });

            const response = await getStarships(params);

            if (!response) {
                dispatch('setLoading', false, { root: true });
                alert('Failed to load starships list');
                return;
            }

            const { count, next, previous, results } = response;
            const { page, search } = params;

            commit('count', count);
            commit('items', results.map(item => getItem(item)));
            commit('next', getPage(next, page, 1));
            commit('prev', getPage(previous, page, -1));

            dispatch('setTitle', `Starships / ${ search || '' }`, { root: true });
            dispatch('setLoading', false, { root: true });
        }
    },

    mutations: {
        /**
         * Mutates the state of the list starships count
         * @param {Object} state
         * @param {number} value
         */
        count(state, value) {
            state.count = value;
        },

        /**
         * Mutates the state of the prev page
         * @param {Object} state
         * @param {?number} value
         */
        prev(state, value) {
            state.prev = value;
        },

        /**
         * Mutates the state of the next page
         * @param {Object} state
         * @param {?number} value
         */
        next(state, value) {
            state.next = value;
        },

        /**
         * Mutates the state of the list starships
         * @param {Object} state
         * @param {Array} value
         */
        items(state, value) {
            state.items = value;
        }
    }
};
