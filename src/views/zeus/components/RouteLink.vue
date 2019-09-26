<template>
    <span class="link-container">
        <span v-for="(route, i) in routes" :key="route.path">
            <router-link :to="route.path">{{route.name}}</router-link>
            <span v-if="i!==routes.length-1"> | </span> 
        </span>
    </span>
</template>

<script>
import routes from '../route.js';
export default {
	name: 'RouteLink',
	data(){
		return {
			routes
		}
	},
	mounted(){
		// console.log(this.routes);
	}
}
</script>

<style lang="less">
.link-container{
	a{
		color: rgb(44, 104, 233);;
		text-decoration: none;
	}
}
</style>
