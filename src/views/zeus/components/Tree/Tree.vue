<template>
	<div class="tree-container">
        <div v-if="hackReset == true" >
            <div class="" v-for="node in treeData" :key="node.id">
                <TreeSlot  
                    :option="node" 
                    :treeData="treeData" 
                    @changeSelectNode="changeSelectNode" 
                    :showIcon="showIcon" 
                    :activeColor="activeColor"
                    :activeType="activeType"
                />
            </div>
        </div>
	</div>
</template>

<script>
const _treeData = [
    {
        text: '文件夹1',
        id: 1,
        expand: true,
        children: [
            {text: '叶子节点11', id: 11, to: '/md1'},
            {text: '叶子节点12', id: 12, to: '/md2'},
            {
                text: '文件夹1-3',
                id: 13,
                expand: true,
                children: [
                    {text: '叶子节点131', id: 131, to: '/md131'},
                    {text: '叶子节点132', id: 132, to: '/md132'},
                ]
            }
        ]
    },
    {
        text: '文件夹1',
        id: 2,
        expand: true,
        children: [
            {text: '叶子节点', id: 21, to: '/md3'},
            {text: '叶子节点', id: 22, to: '/md4'}
        ]
    }
];
import TreeSlot from './TreeSlot';
export default {
	name: 'Tree',
	data () {
		return {
            treeData: [], // 树的数据，数组
            userPadding: 20, // 缩进距离
            showIcon: false, // 是否显示展开|关闭按钮
            hackReset: true, // 强制刷新子组件
            activeColor: '#3eaf7c', // 选中响应颜色
            activeType: 'color', // 选中响应方式字体颜色|背景颜色 'color'|'backgroundColor'
            selectNodeId: undefined, // 以选中的节点id
		}
    },
    beforeCreate(){
        // 全局事件事件总线注册
        if(!Vue.prototype._BusEventForTree){
            Vue.prototype._BusEventForTree = new Vue();
        }
    },
    created(){
        this._BusEventForTree.$on('changeSelectNode', this.changeSelectNode);
        this._BusEventForTree.$on('toggleExpand', this.toggleExpand);
    },
    mounted(){
        const result = recursionTraversal({id: -1, children: _treeData});
        this.treeData = result.children;
        function recursionTraversal(node, deepth = -1){
            if(node.children){
                const children = node.children.map(e=>recursionTraversal(e, deepth+1));
                return Object.assign(node, {
                    level: deepth,
                    children: children,
                    isFolder: true
                });
            }else{
                return Object.assign(node, {level: deepth});
            }
        }
    },
    methods: {
        isOpenIsonStr(node){
            const result = (node.expand===true&&node.isLeafNode!==true)? '+' : '-';
            return result;
        },
        changeSelectNode(node){
            this.$emit('click', node);// 向父组件传递点击选中事件
            if(this.selectNodeId === node.id){
                return;
            }
            this.selectNodeId = node.id;
            this.$emit('select', node);// 向父组件传递选中节点改变事件
            this.traversalTree(e=>e.id !== node.id ? this.$set(e, 'active', false) :this.$set(e, 'active', true));
            this.forceUpdateChildComponent();
        },
        toggleExpand(node, expand){
            this.$emit('toggleExpand', node);// 向父组件传递节点展开|关闭事件
            expand === true ? this.$emit('expand', node) : this.$emit('shrink', node);
        },
        traversalTree(callback){
            recursionTraversal({id: -1, children: this.treeData});
            function recursionTraversal(node){
                callback(node);
                node.children&&node.children.forEach(e => recursionTraversal(e));
            }
        },
        forceUpdateChildComponent(){
            this.hackReset = false;
            this.$nextTick(() => {
                this.hackReset = true;
            });
        }
    },
    computed: {

    },
    components: {
        TreeSlot
    }
}
</script>

<style lang="less">
.tree-container{
    text-align: left;
    font-size: 16px;
}
</style>
