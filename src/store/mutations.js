export default {
    getRoutes(state, payload) {
        state.navItems = payload.filter(item => item.children)
                            // .filter(item => item.children)
                            // .map(item => item.children[0])
                            // .filter(item => item.meta)
    }
}