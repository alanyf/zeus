<template>
<div class="index-container">
	<Header class="header"/>
	<div class="artical">
		<div class="menu">
			<Tree @select="select" @expand="expand"/>
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
