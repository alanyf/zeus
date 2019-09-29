<template>
	<div class="menu-container">
        <Tree 
            :option="treeData"
            :userPadding="20"
            :showIcon="false"
            :onlyIconExpand="false"
            activeColor="#3eaf7c"
            activeType="color"
            @select="select"
            @expand="expand"
            @shrink="shrink"
            @click="click"
        />
	</div>
</template>

<script>
const _treeData = [
    {
        text: '文件夹1',
        expand: true,
        children: [
            {text: '叶子节点11', to: '/md1'},
            {text: '叶子节点12', to: '/md2'},
            {
                text: '文件夹1-3',
                expand: true,
                children: [
                    {text: '叶子节点131', to: '/md131'},
                    {text: '叶子节点132', to: '/md132', disable: true},
                ]
            }
        ]
    },
    {
        text: '文件夹2',
        expand: true,
        children: [
            {text: '叶子节点', to: '/md3'},
            {text: '叶子节点', to: '/md4'}
        ]
    },
    {text: '叶子节点3', to: '/md4'}
]
import Tree from './Tree/Tree';
export default {
	name: 'Menu',
	data () {
		return {
			treeData: _treeData
		}
    },
    methods: {
		select(node){
			console.log('select', node);
		},
		expand(node){
			console.log('expand', node);
		},
		shrink(node){
			console.log('shrink', node);
		},
		click(node){
			console.log('click', node);
		}
	},
	components: {
		Tree
	},
}
</script>

<style lang="less">
.menu-container{
    
}
</style>
