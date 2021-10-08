import Vue from "vue"
import Vuex from "vuex"

import REST from "@/api"

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: JSON.parse(localStorage.getItem('user')) || null,
        users: []
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        setUsers(state, users) {
            state.users = users
        },
        removeUser(state, id) {
            state.users = state.users.filter(user => user.id !== id)
        }
    },
    actions: {
        login({ commit }, formData) {
            return new Promise((resolve, reject) => {
                const candidate = REST.findUserByEmail(formData.email)

                if (!candidate) {
                    reject('User not found')
                }

                if (candidate.password === formData.password) {
                    commit('setUser', candidate)
                    localStorage.setItem('user', JSON.stringify(candidate))
                    resolve()
                } else {
                    reject('Incorrect password')
                }
            })
        },
        logout({ commit }) {
            commit('setUser', null)
            localStorage.clear()
        },
        register(_, formData) {
            return new Promise((resolve, reject) => {
                const candidate = REST.findUserByEmail(formData.email)

                if (candidate) {
                    reject('User already created')
                }

                REST.createUser(formData)
                resolve()
            })
        },
        getUsers({ commit }) {
            return new Promise((resolve) => {
                const users = REST.getUsers()
                commit('setUsers', users)
                resolve()
            })
        },
        removeUser({ commit }, id) {
            REST.removeUser(id)
            commit('removeUser', id)
        }
    }
})

export default store