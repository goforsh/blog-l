<script>
export default {
    functional:true,
    props:['route'],
    render(h,{props}) {
        function createItem(route, base) {
            return h('el-menu-item', {
                attrs:{
                    index: base == '/' ? route.path : base.slice(1) + '/' + route.path
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
            if (routes.children.length == 1) {
                return routes.children[0].meta && createItem(routes.children[0], base + routes.path)
            } else {
                return h('el-submenu', [
                    //else分支没试过，随便那么一写，大概率是错的:P
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