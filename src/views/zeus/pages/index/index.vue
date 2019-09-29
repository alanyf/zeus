<template>
<div class="index-container">
	<Header class="header"/>
	<div class="artical">
		<div class="menu"><Menu/></div>
		<div class="content">
			<div class="markdown">
				<MarkdownView/>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import MarkdownView from '../../components/MarkdownView';
export default {
	name: 'Index',
	data(){
		return {
			
		}
	},
	mounted(){
		
	},
	components: {
		Header,
		Menu,
		MarkdownView
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
				.markdown{
					padding: 10px 20px;
					width: 800px;
					margin: 0 auto;
				}
			}
		}
	}
</style>
