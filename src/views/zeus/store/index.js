import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        count: 0
    },
    getters: {
    },
    mutations: {
        changeCount(state, number) {
            state.count += number;
        }
    },
    actions: {
        changeCount(context) {
            setTimeout(() => {
                context.commit('changeCount', 1);
            }, 500);
        }
    }
});
