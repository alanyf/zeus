import Index from './pages/index/index';
import HelloWorld from './components/HelloWorld';

let routes = [
    {
        path: '/zeus/index',
        name: 'Index',
        component: Index,
        children: [
            {path: 'helloWorld', component: HelloWorld}
        ]
    },
    {
        path: '/zeus/helloWorld',
        name: 'HelloWorld',
        component: HelloWorld
    }
];

module.exports = routes;
