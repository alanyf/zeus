<template>
    <div class="tree-slot-container">
        <div class="tree-row" :style="{
            paddingLeft: userPadding*node.level+'px', 
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
            <TreeSlot v-for="e in node.children" :key="e.id" 
                :treeData="treeData"
                :option="e" 
                :userPadding="userPadding"
                :showIcon="showIcon"
                :activeColor="activeColor"
                :activeType="activeType"
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
        option: {
            type: Object,
            required: true
        },
        treeData: {
            type: Array,
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
    created(){
        this.node = this.deepClone(this.option);
    },
    methods: {
        openTrigger(node){
            if(node.disable){
                return;
            }
            this.$set(node, 'expand', !node.expand);
            this._BusEventForTree.$emit('toggleExpand', node, node.expand);
        },
        chooseNode(node){
            if(node.disable){
                return;
            }
            this.$set(node, 'active', true);
            this._BusEventForTree.$emit('changeSelectNode', node)
            //if(!this.showIcon && node.isFolder){
            // if( node.isFolder){
            //     setTimeout(()=>this.openTrigger(node), 500 );
            // }
            //setTimeout(()=>this._BusEventForTree.$emit('changeSelectNode', node), 200 )
        },
        deepClone(object){
            return  JSON.parse(JSON.stringify(object));
        }
    },
    components: {
        
    },
    watch: {
        // options(newVal){
        //     console.log(newVal.text);
        //     return newVal;
        // },
        // option: {
        //     render(){
        //         alert('loop');
        //     },
        //     deep: true
        // }
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
