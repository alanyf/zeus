<template>
    <div class="header-container">
		<div class="head-content" v-if="user">
			<div class="head-img"><img :src="user.picUrl"/></div>
			<div class="user-info">
				<div class="username">{{user.username}}</div>
				<div class="role">身份：{{user.role}}</div>
			</div>
		</div>
		<div class="button-content">
			<div class="button" @click="logout">退出登陆</div>
		</div>
    </div>
</template>

<script>
export default {
	name: 'Header',
	data(){
		return {
			user: null
		}
	},
	mounted(){
		this.fetchUserInfo();
	},
	methods: {
		logout(){
			this.$ajax.get('/zeus/get/logout').then(res=>{
				if(res.code === 1){
					alert('退出登陆成功');
					// window.location.href = res.data.url;
				}else{
					alert('退出登陆失败！');
					throw new Error('退出登陆失败！返回数据：'+JSON.stringify(res));
				}
			}).catch(err=>{
				console.error(err);
			});
		},
		fetchUserInfo(){
			this.$ajax.get('/zeus/userInfo').then(res=>{
				if(res.code === 1){
					this.user = res.data;
				}else{
					alert('获取用户信息失败！');
					throw new Error('获取用户信息失败！返回数据：'+JSON.stringify(res));
				}
			}).catch(err=>{
				console.error(err);
			});
		}
	}
}
</script>

<style lang="less">
	.header-container{
        height: 65px;
        background-color: #1e222e;
		// color: #7c8394;
		color: white;
		display: flex;
		align-items: center;
		.head-content{
			width: 200px;
			height: 100%;
			display: flex;
			align-items: center;
			.head-img{
				display: flex;
				align-items: center;
				justify-content: center;
				width: 80px;
				height: 100%;
				img{
					width: 45px;
					height: 45px;
				}
			}
			.user-info{
				height: 45px;
				display: flex;
				flex-direction: column;
				.username{
					flex-basis: 60%;
					display: flex;
					align-items: center;
					font-size: 18px;
					font-weight: bold;
				}
				.role{
					display: flex;
					align-items: center;
					font-size: 13px;
				}
			}
		}
		.button-content{
			flex: 1;
			text-align: right;
			width: 400px;
			margin-right: 10px;
			.button{
				font-size: 15px;
				display: inline-block;
				padding: 4px 10px;
				// border: 1px solid #ccc;
				border-radius: 5%;
				color: white;
				// 禁止文字被鼠标选中 
				-moz-user-select: none; 
				-o-user-select:none; 
				-khtml-user-select:none; 
				-webkit-user-select:none; 
				-ms-user-select:none; 
				user-select:none;
				&:hover{
					cursor: pointer;
					font-weight: bold;
				}
				&:active{
					transform: scale(0.96);//设置缩放比例
					-ms-transform: scale(0.96);
					-webkit-transform: scale(0.96);
					-o-transform: scale(0.96);
					-moz-transform: scale(0.96);
				}
			}
		}
    }
</style>
