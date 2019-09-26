<template>
    <div class="index-container">
        <v-head
            :theme="theme"
            class="header"/>
    </div>
</template>

<script>
    import Head from '@/components/Header.vue';
    export default {
        name: 'Index',
        components: {
            VHead: Head
        },
        data() {
            return {};
        },
        computed: {},
        created() {},
        mounted() {},
        methods: {}
    };
</script>

<style lang="less">

.index-container{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #fff;
    position: relative;
    .header{
        flex-shrink: 0;
        box-shadow: 0 3px 8px 0 rgba(116, 129, 141, 0.1);
    }
}
</style>
