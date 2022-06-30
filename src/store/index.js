import { createStore } from "vuex";

export default createStore({
    state: {
        likes: 2,
        isAuth: true
    },
    getters: {
        doubleLikes(state) {
            return state.likes * 2
        }
    },
    mutations: {
        incrementLikes(state) {
            state.likes = ++state.likes
        },
        decrementLikes(state) {
            state.likes = --state.likes
        }
    },
    actions: {

    }
})