import './runBeforeRequire';
import Vue from 'vue';
import VueRouter from 'vue-router';
import configRouter from './route';
import App from './App.vue';
import '@/utils/ajax';
// import '@/utils/url';

Vue.use(VueRouter);

let routeConfig = {
    base: __dirname,
    routes: configRouter,
    mode: 'history',
    fallback: false
};
const router = new VueRouter(routeConfig);

router.beforeEach((to, from, next) => {
    // console.log(to, from);
    //  do something
    next();
});

/* eslint-disable no-new */
new Vue({
    render(h) {
        return h(App);
    },
    router
}).$mount('#app');
