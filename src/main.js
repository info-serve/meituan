import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/main.css'
//  store.dispatch('syncLocal')
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.directive('document-click',{//自定义document点击事件
  bind(el,binding){
   // eslint-disable-next-line no-console
  //  console.log('----bind',el,binding,vnode);
   document.addEventListener('click',binding.value,false)
  },
  inserted(){
    // eslint-disable-next-line no-console
    // console.log('----insert')

  },
  updata(){
    // eslint-disable-next-line no-console
    // console.log('----updata')

  }
  
      
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
