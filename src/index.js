import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';

import Page from './Page.vue';

Vue.use(VueRouter);

const App = new Vue({
    el:'#app',
    render: h => h(Page),
    router: new VueRouter({
        routes: []
    }),
    created() {
        axios.get('https://swapi.co/api/starships/')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
});
