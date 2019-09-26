import Index from './pages/index';
import HelloWorld from './components/HelloWorld';

let routes = [
    {
        path: '/',
        name: 'Index',
        component: Index,
        children: [
            {path: 'helloWorld', component: HelloWorld}
        ]
    },
    {
        path: '/helloWorld',
        name: 'HelloWorld',
        component: HelloWorld
    }
];

module.exports = routes;
