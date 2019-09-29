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
            {text: '叶子节点11'},
            {text: '叶子节点12'},
            {
                text: '文件夹1-3',
                expand: true,
                children: [
                    {text: '叶子节点131'},
                    {text: '叶子节点132', disable: true},
                ]
            }
        ]
    },
    {
        text: '文件夹2',
        expand: true,
        children: [
            {text: '树', to: '/zeus/index/markdown/tree'},
            {text: '测试', to: '/zeus/index/markdown/test'}
        ]
    },
    {text: '叶子节点3'}
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
            this.$router.push(node.to);
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
