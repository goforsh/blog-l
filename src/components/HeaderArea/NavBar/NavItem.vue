<script>
export default {
    functional:true,
    props:['route'],
    render(h,{props}) {
        function createItem(route, base) {
            return h('el-menu-item', {
                attrs:{
                    index: base + route.path
                }
            },[
                h('i', {
                    'class': route.meta.icon
                }),
                h('span', {
                    attrs:{
                        slot: 'title'
                    }
                }, route.meta.title)
            ])
        }

        function createSubMenu(routes, base) {
            if (!routes.children) {
                return createItem(routes, base)
            } else {
                return h('el-submenu', [
                    //not elegant here, but it works:P
                    <template slot="title"><i class={routes.meta.icon}></i>{routes.meta.title}</template>,
                    ...routes.children.map(route => {
                        return createSubMenu(route, routes.path)
                    })
                ])
            }
        }

        return createSubMenu(props.route, '')
    }
}
</script>
<style lang='scss' scoped>
</style>