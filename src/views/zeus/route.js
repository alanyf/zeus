import Index from './pages/index/index';
import HelloWorld from './components/HelloWorld';
import Count from './components/Count';

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
    },
    {
        path: '/zeus/count',
        name: 'Count',
        component: Count
    }
];

module.exports = routes;
