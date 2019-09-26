<template>
    <header
        :style="{
            backgroundColor: theme === 'dark' ? '#000c17' : '#fff',
            color: theme === 'dark' ? '#fff' : '#000c17',
            borderBottom: `1px solid ${theme === 'dark' ? '#000c17' : '#eee'}`,
        }"
        :class="`head-container ${$os.isPc ? '' : 'head-container-mobile'}`"
    >
        <div
            v-if="user"
            :style="{width: $os.isPc ? '262px' : ''}"
            class="head-content"
        >
            <div class="head-img"><img :src="user.imgUrl"></div>
            <div class="user-info">
                <div class="username">{{ user.username }}</div>
                <!-- <div class="role">角色：{{ user.role }}</div> -->
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Head',
        inject: ['$os'],
        props: {
            theme: {
                type: String,
                default: 'dark'
            }
        },
        data() {
            return {
                user: {
                    imgUrl: 'static/images/head-img.jpeg',
                    username: 'Alan',
                    role: '管理员'
                }
            };
        }
    };
</script>

<style lang="less">

.head-container{
    height: 50px;
    background-color: #000c17;
    display: flex;
    align-items: center;
    padding: 0 20px;
    .head-content{
        // min-width: 280px;
        // flex-basis: 60px;
        flex-shrink: 0;
        flex-grow: 0;
        display: flex;
        align-items: center;
        .head-img{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 10px;
            height: 100%;
            img{
                border-radius: 50%;
                width: 40px;
                height: 40px;
            }
        }
        .user-info{
            height: 45px;
            display: flex;
            // flex-direction: column;
            align-items: center;
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
}
.head-container-mobile{
    display: flex;
    justify-content: center;
    .head-content{
        margin: 0;
        display: flex;
        justify-content: center;
    }
}
</style>
