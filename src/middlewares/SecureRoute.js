import store from "@/store"

const SecureRoute = (to, from, next) => {
    if (store.state.user) {
        next()
    } else {
        next({ name: 'Login' })
    }
}

export default SecureRoute