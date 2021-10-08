import Vue from "vue"
import VueRouter from "vue-router"
import store from "@/store";

Vue.use(VueRouter)

// Views
import Home from "@/views/Home"
import Login from "@/views/Login"
import Registration from "@/views/Registration";
import Protected from "@/views/Protected";
import Admin from "@/views/Admin";

// Middlewares
import NonSecureRoute from "@/middlewares/NonSecureRoute";
import SecureRoute from "@/middlewares/SecureRoute";
import AdminRoute from "@/middlewares/AdminRouter";

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
            beforeEnter: NonSecureRoute
        },
        {
            path: '/registration',
            name: 'Registration',
            component: Registration,
            beforeEnter: NonSecureRoute
        },
        {
            path: '/protected',
            name: 'Protected',
            component: Protected,
            beforeEnter: SecureRoute
        },
        {
            path: '/logout',
            component: {
                async beforeRouteEnter(to, from, next) {
                    await store.dispatch('logout')
                    next({ name: 'Login' })
                }
            }
        },
        {
            path: '/admin',
            component: Admin,
            beforeEnter: AdminRoute
        }
    ]
})

export default router