<template>
    <div id="app">
        <RouteLink/>
        <router-view/>
    </div>
</template>

<script>
    import os from '@/utils/os.js';
    import RouteLink from './components/RouteLink';

    export default {
        name: 'App',
        provide() {
            return {
                $os: os
            };
        },
        components: {
            RouteLink
        },
        data() {
            return {};
        },
        mounted() {

        },
        methods: {

        }

    };

</script>

<style lang="less">
#app {
    font-family: 'Avenir', Helvetica, Arial;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
    background-color: #fff;
}
#app{
    width: 100%;
    height: 100%;
}
* {
    margin: 0;
    padding: 0;
}
p,h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}
h1{
    font-size: 28px;
}
html, body{
    padding: 0;
    width: 100%;
    height: 100%;
    font-size: 14px;
    color: black;
}
a {
    color: #2c3e50;
    text-decoration: none;
}
a:hover{
    color: #2c3e50;
    text-decoration: none;
}
</style>
