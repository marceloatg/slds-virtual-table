import Vue from 'vue'
import Router from "vue-router";
import View1 from './components/View1'
import View2 from './components/View2'

Vue.use(Router);

const routes = [
    {
        path: '/view-1',
        name: 'view1',
        component: View1,
    },
    {
        path: '/view-2',
        name: 'view2',
        components: {
            default: View2
        }
    },
];

export default new Router({
    routes,
    mode: 'history'
});
