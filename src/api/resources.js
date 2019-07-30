import axios from 'axios';

/**
 * Returns Promise for request
 * @param {string} path
 * @param {Object} params
 * @param {string} baseUrl
 * @return {Promise}
 */
export function get(path, params = {}, baseUrl = 'https://swapi.co/api/') {
    return axios.get(`${ baseUrl }${ path }`, { params })
        .then(({ data }) => data)
        .catch(error => console.error(error));
}
