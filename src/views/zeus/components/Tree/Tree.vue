<template>
	<div class="tree-container">
        <div v-if="hackReset == true" >
            <div class="" v-for="node in treeData" :key="node.id">
                <TreeSlot  
                    :option="node" 
                    :treeData="treeData" 
                    :showIcon="showIcon" 
                    :activeColor="activeColor"
                    :activeType="activeType"
                    :userPadding="userPadding"
                    @changeSelectNode="changeSelectNode" 
                />
            </div>
        </div>
	</div>
</template>

<script>

import TreeSlot from './TreeSlot';
export default {
	name: 'Tree',
	data () {
		return {
            treeData: [], // 树处理后的数据 
            hackReset: true, // 强制刷新子组件
            selectNodeId: undefined, // 以选中的节点id
		}
    },
    props: {
        option: {
            type: Object,
            required: true
        },
        userPadding: {
            type: String,
            default: 20
        },
        showIcon: {
            type: Boolean,
            default: true
        },
        activeColor: {
            type: String,
            default: '#3eaf7c'
        },
        activeType: {
            type: String,
            default: 'color'
        },
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
        const result = recursionTraversal({id: -1, children: this.option});
        this.treeData = result.children;
        console.log(this.option);
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
            this.traversalTree(e=> this.$set(e, 'active', e.id === node.id));
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
