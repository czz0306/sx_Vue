import './static/css/reset.css';
import './static/fonts/iconfont';
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './src/router/config';
import App from './App.vue';
import './src/http/axios.js';
import { store } from './src/store/store.js';
Vue.use(ElementUI);
let vm = new Vue({
    el: '.container',
    router,
    store,
    render: function (createElement) {
        return createElement(App);
    }
});
if (module.hot) {
    module.hot.accept();
}
console.log(vm);
