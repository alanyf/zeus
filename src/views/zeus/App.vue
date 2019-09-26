<template>
	<div id="app">
		<RouteLink/>
		<router-view/>
	</div>
</template>

<script>
import RouteLink from './components/RouteLink';

export default {
	name: 'App',
	data(){
		return {}
	},
	components: {
		RouteLink
	},
	created(){
		this.init();
	},
	mounted(){
		
	},
	methods: {
		init(){
			
		}
	},
	
}

</script>

<style lang="less">
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		height: 100%;
		background-color: #fff;
	}
</style>
