import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {RecycleScroller} from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
import SldsVirtualTable from './components/VirtualTable/Index'

Vue.config.productionTip = false;

Vue.component('RecycleScroller', RecycleScroller);
Vue.component('slds-virtual-table', SldsVirtualTable);

new Vue({router, render: h => h(App),}).$mount('#app');
