<template>
<div class="index-container">
	<Header class="header"/>
	<div class="artical">
		<div class="menu">
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
		<div class="content"></div>
	</div>
</div>
</template>

<script>
import Header from '../../components/Header';
import Tree from '../../components/Tree/Tree';
export default {
	name: 'Index',
	data(){
		return {
			treeData: [
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
		}
	},
	mounted(){
		
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
		Header,
		Tree
	},
	computed: {
		
	}
}
</script>

<style lang="less">

	.index-container{
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		font-size: 0.5rem;
		background-color: #fff;
		.artical{
			display: flex;
			.menu{
				flex-basis: 260px;
				min-height: 600px;
				padding: 20px;
				border-right: 1px solid #ccc;
			}
			.content{
				flex-basis: 800px;
				flex-grow: 1;
			}
		}
	}
</style>
