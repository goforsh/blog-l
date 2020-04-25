<script>
export default {
functional:true,
props:['route'],
render(h,{props}) {
    // if (!props.children) {
        return h('el-menu-item', {
            attrs:{
                index: props.route.path
            }
        },[
            h('i', {
                'class': 'el-icon-setting'
            }),
            h('span', {
                attrs:{
                    slot: 'title'
                }
            }, props.route.name)
        ])
    //}
    
}
}
</script>
<style lang='scss' scoped>
</style>