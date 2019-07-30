import { get } from './resources';

/**
 * Returns Promise for request a list starships
 * @param {Object} params
 */
export function getStarships(params) {
    return get('starships/', params);
}

/**
 * Returns Promise for request information about a starship
 * @param {number} id
 */
export function getStarship(id) {
    return get(`starships/${id}/`);
}
