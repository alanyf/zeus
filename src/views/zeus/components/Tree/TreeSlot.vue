<template>
    <div class="tree-slot-container">
        <div class="tree-row" :style="{
            paddingLeft: userPadding*node._level+'px', 
            backgroundColor: (activeType==='backgroundColor'&&node.active) ? activeColor : ''
        }">
            <div class="isopen-icon" 
                v-if="showIcon"
                v-show="node.isFolder===true"
                @click.stop="openTrigger(node)"
            >{{node.expand!==true? '+' : '-'}}</div>
            <div class="isopen-icon border-none" v-if="showIcon" v-show="node.isFolder!==true"></div>
            <div
                class="text" 
                @click="chooseNode(node)" 
                :style="{
                    color: node.disable? '#aaa' : (activeType==='color'&&node.active) ? activeColor : '',
                    fontWeight: node.active?'bold':'normal'
                }"
                >{{node.text}}
            </div>
        </div>
        <div v-if="node.children && node.expand===true">
            <TreeSlot v-for="e in node.children" :key="e._uuid" 
                :treeData="treeData"
                :node="e" 
                :userPadding="userPadding"
                :showIcon="showIcon"
                :activeColor="activeColor"
                :activeType="activeType"
                :onlyIconExpand="onlyIconExpand"
            ></TreeSlot>
        </div>
    </div>
</template>

<script>
export default {
	name: 'TreeSlot',
	data () {
		return {
            node: {},
            forceUpdate: false
		}
    },
    props: {
        node: {
            type: Object,
            required: true
        },
        treeData: {
            type: Array,
            required: true
        },
        userPadding: String,
        showIcon: Boolean,
        activeColor: String,
        activeType: String,
        onlyIconExpand: Boolean
    },
    methods: {
        openTrigger(node){
            if(node.disable){
                return;
            }
            this._BusEventForTree.$emit('toggleExpand', node);
        },
        chooseNode(node){
            if(node.disable){
                return;
            }
            this._BusEventForTree.$emit('changeSelectNode', node);
            if(!this.showIcon && node.isFolder && !this.onlyIconExpand){
                this.openTrigger(node);
            }
        }
    }
}
</script>

<style lang="less">
.tree-slot-container{
	.tree-row{
        display: flex;
        align-items: center;
        padding: 5px 0;
        .isopen-icon{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 5px;
            border: 1px solid #000;
            width: 12px;
            height: 12px;
            font-size: 14px;
            user-select:none;
        }
        .border-none{
            width: 14px;
            height: 14px;
            border: none;
        }
        .text{
            flex-grow: 1;
            font-weight: normal;
            user-select:none;
        }
    }
}
</style>
