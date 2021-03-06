/*
 * @Description: store 管理
 * @Version: v1.0
 * @Author: herman
 * @Date: 2021-03-30 10:17:20
 * @LastEditors: herman
 * @LastEditTime: 2021-04-06 13:57:44
 * @FilePath: /vue-js-herman/src/store/index.ts
 */
import { createStore } from 'vuex'
import getters from './getters'

const store = createStore({
    state: {
        loading: false,
    },
    mutations: {
        Loading: (state, loading: boolean) => (state.loading = loading),
    },
    actions: {
        setLoading: (ctx, loading: boolean) => ctx.commit('Loading', loading),
    },
    modules: {},
    getters,
})
export default store