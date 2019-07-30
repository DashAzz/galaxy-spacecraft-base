import Vue from 'vue';
import Router from 'vue-router';

import Card from 'containers/Card.vue';
import List from 'containers/List.vue';
import ErrorPage from 'containers/ErrorPage.vue';

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/starships', component: List },
        { path: '/starships/:id', component: Card },
        { path: '*', component: ErrorPage }
    ]
});
