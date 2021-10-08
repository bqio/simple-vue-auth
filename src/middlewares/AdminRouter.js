import store from "@/store"

const AdminRoute = (to, from, next) => {
    if (store.state.user && store.state.user.role === 0) {
        next()
    } else {
        next({ name: 'Home' })
    }
}

export default AdminRoute