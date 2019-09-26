<template>
<div class="index-container">
	<Header class="header"/>
</div>
</template>

<script>
import Header from '../../components/Header';
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
		Header
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
		
	}
</style>
