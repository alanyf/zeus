<template>
	<div class="count-container">
		<h1>count：{{count}}</h1>
        <br/>
        <button @click="clickHandle">点击增加计数</button>
	</div>
</template>

<script>
import {mapState} from 'vuex';
export default {
	name: 'Count',
	data () {
		return {
			
		}
    },
    methods: {
        clickHandle(){
            this.$store.commit('changeCount', 1);
        }
    },
    computed: {
		...mapState(['count'])
	}
}
</script>

<style lang="less">
.count-container{
    text-align: center;
    button{
        padding: 5px 10px;
    }
}
</style>
