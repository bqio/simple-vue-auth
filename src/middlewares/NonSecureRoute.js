import store from "@/store"

const NonSecureRoute = (to, from, next) => {
    if (!store.state.user) {
        next()
    } else {
        next({ name: 'Home' })
    }
}

export default NonSecureRoute