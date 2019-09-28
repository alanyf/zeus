<template>
	<div class="markdown-view-container">
		<router-view/>
	</div>
</template>

<script>
export default {
	name: 'MarkdownView',
	data () {
		return {
			
		}
	}
}
</script>

<style lang="less">
.markdown-view-container{
    min-width: 740px;
    font-size: 14px;
}
</style>
