<template>
	<div class="tree-container">
        <div v-for="node in treeData" :key="node._uuid">
            <TreeSlot  
                :node="node" 
                :treeData="treeData" 
                :showIcon="showIcon" 
                :activeColor="activeColor"
                :activeType="activeType"
                :userPadding="userPadding"
                :onlyIconExpand="onlyIconExpand"
                @changeSelectNode="changeSelectNode" 
            />
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
        onlyIconExpand: {
            type: Boolean,
            default: true
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
        this.treeData = this.handleInputData(this.option);
        this.levelTraversalTree();
    },
    methods: {
        isOpenIsonStr(node){
            return (node.expand===true&&node.isLeafNode!==true)? '+' : '-';
        },
        changeSelectNode(node){
            this.$emit('click', node);// 向父组件传递点击选中事件
            if(this.selectNodeId === node._uuid){
                return;
            }
            this.selectNodeId = node._uuid;
            this.$emit('select', node);// 向父组件传递选中节点改变事件
            this.traversalTree(e=> this.$set(e, 'active', e._uuid === node._uuid));
        },
        toggleExpand(node, expand){
            this.traversalTree(e=> e._uuid === node._uuid&&this.$set(e, 'expand', !e.expand));
            this.$emit('toggleExpand', node);// 向父组件传递节点展开|关闭事件
            node.expand !== true ? this.$emit('expand', node) : this.$emit('shrink', node);
        },
        traversalTree(callback){
            recursionTraversal({children: this.treeData});
            function recursionTraversal(node){
                callback(node);
                node.children&&node.children.forEach(e => recursionTraversal(e));
            }
        },
        levelTraversalTree(callback){
            const rootNode = {_uuid: 1, children: this.treeData};
            const levelArray = [];
            let index = 0;
            levelArray.push(rootNode);
            recursionTraversal(rootNode);
            function recursionTraversal(node){
                if(index>=levelArray.length){
                    return;
                }
                node.children&&node.children.forEach((e, i) => {
                    e._uuid = node._uuid*10 + i+1;
                    levelArray.push(e);
                });
                recursionTraversal(levelArray[++index]);
            }
        },
        handleInputData(_treeData){
            const result = recursionTraversal({children: _treeData});
            return result.children;
            function recursionTraversal(node, deepth = -1){
                if(node.children){
                    const children = node.children.map(e=>recursionTraversal(e, deepth+1));
                    return Object.assign(node, {
                        _level: deepth,
                        children: children,
                        isFolder: true
                    });
                }else{
                    return Object.assign(node, {_level: deepth});
                }
            }
        }
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
