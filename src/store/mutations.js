export default {
    getRoutes(state, payload) {
        state.navItems = payload.filter(item=>item.meta)
    }
}