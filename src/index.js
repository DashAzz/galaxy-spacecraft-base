import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';

import App from './App.vue';
import List from 'components/List.vue';
import Card from 'components/Card.vue';

Vue.use(VueRouter);

new Vue({
    el:'#app',
    render: h => h(App),
    router: new VueRouter({
        routes: [
            {
                path: '/',
                name: 'List',
                component: List
            },

            {path: '*', component: Card}
        ]
    }),
    // created() {
    //     axios.get('https://swapi.co/api/starships/', {
    //         params: {
    //             search: 'H'
    //         }
    //     })
    //         .then(function (response) {
    //             console.log(response);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }
});
