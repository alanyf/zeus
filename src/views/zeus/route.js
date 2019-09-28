import Index from './pages/index/index';
import HelloWorld from './components/HelloWorld';
import MarkdownView from './components/MarkdownView';
import TestMd from '@/docs/test.md';
import TreeMd from '@/docs/tree.md';

let routes = [
    {
        path: '/zeus/index',
        name: 'Index',
        component: Index,
        children: [
            {path: 'helloWorld', component: HelloWorld},
            {
                path: 'markdown',
                name: 'MarkdownView',
                component: MarkdownView,
                children: [
                    {path: 'test', component: TestMd},
                    {path: 'tree', component: TreeMd}
                ]
            }
        ]
    },
    {
        path: '/zeus/helloWorld',
        name: 'HelloWorld',
        component: HelloWorld
    },
    
];

module.exports = routes;
