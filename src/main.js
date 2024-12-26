/** @format */

import Vue from 'vue';
import App from './App.vue';

import cpt3 from './components/03-cpt.vue';
Vue.component('cpt-3-globol', cpt3);

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App),
}).$mount('#app');
