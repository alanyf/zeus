<template>
<div class="index-container">
	<Header class="header"/>
	<div class="markdown">
		<MarkdownDoc/>
	</div>
</div>
</template>

<script>
import Header from '../../components/Header';
import MarkdownDoc from '@/docs/test.md';
export default {
	name: 'Index',
	data(){
		return {
			
		}
	},
	mounted(){
		
	},
	methods: {
		
	},
	components: {
		Header,
		MarkdownDoc
	},
	computed: {
		
	}
}
</script>

<style lang="less">
	.index-container{
		.markdown{
			width: 800px;
			margin: 0 auto;
			//overflow: hidden;
		}
	}
</style>
