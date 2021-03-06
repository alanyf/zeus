import config from '../../config';
const isDev = window.CURENT_ENV === 'development'; // 拿到当前环境，判断是否为测试环境
console.log('current environment:', window.CURENT_ENV);
module.exports = {
    protocal: 'http', // 协议名，用来判断请求的url是否带有host
    host: 'http://aaa.com', // 选择线上接口时使用的host
    localhost: 'http://localhost:' + config.dev.port, // 选择本地接口时使用的host
    website: '/zeus/', // 当前站点名称
    useMock: false // 通过判断是否为测试环境，决定是否使用本地mock数据
};
