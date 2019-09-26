import Vue from 'vue';
import axios from 'axios';
import config from './config';

if (!Vue.prototype.$http) {
    const host = config.useMock ? config.localhost : config.host;
    let methods = ['get', 'delete', 'head', 'options', 'post', 'put', 'patch', 'read', 'create', 'update'];
    const http = {};
    methods.forEach(e => {
        http[e] = function () {
            if (typeof arguments[0] === 'string') {
                arguments[0] = host + arguments[0];
            }
            return Vue.prototype.$ajax(...arguments);
        };
    });
    Vue.prototype.$http = http;
    Vue.prototype.$axios = axios;
}

export default Vue.prototype.$http;
