import Vue from 'vue';
import axios from 'axios';
import router from 'router';
import store from 'store/index';

import App from './App.vue';

Vue.directive('title', {
    inserted: (el, { value }) => document.title = value,
    update: (el, { value }) => document.title = value
});

new Vue({
    el:'#app',
    router,
    store,
    render: h => h(App)
});
