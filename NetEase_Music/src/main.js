// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import domain from './domain/domain.js' //引入url
import vueResource from 'vue-resource'
// import Vue from 'vue';
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
// import theme from 'muse-ui/lib/theme'
import 'typeface-roboto'
// theme.use('dark');
import 'muse-ui-loading/dist/muse-ui-loading.css' 
import Loading from 'muse-ui-loading'
import 'typeface-roboto' // 字体
Vue.use(Loading)
Vue.use(MuseUI)
Vue.use(vueResource)
global.domain = domain // 定义全局url


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
//   components: { App },
//   template: '<App/>'
    render:h => (<App/>)
})


 //#endregion
// 检测是pc
 if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) ){
    console.log('移动端');
}else{
    console.log('pc端'); 
    let app = document.querySelector("#app");
    let info = document.querySelector("#infos");
    info.style.display = "block";
    info.style.textAlign = "center";
    app.style.display = "none";
}