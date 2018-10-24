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
import VueLazyload from 'vue-lazyload'
Vue.use(Loading)
Vue.use(MuseUI)
Vue.use(vueResource)
// Vue.use(VueLazyload)
Vue.use(VueLazyload,{
    proLoad:1,
    error:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540361276687&di=4084a1a7fd49e7271d201075f8db4546&imgtype=0&src=http%3A%2F%2Fn1.itc.cn%2Fimg8%2Fwb%2Fsmccloud%2Ffetch%2F2015%2F07%2F09%2F197434604352147328.GIF',
    loading:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540360963919&di=e5007ea3b5a36c5bbcc8ca7d3a8cb28e&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01110e57bbc1400000012e7ec358d8.gif',
    attempt:1
})
global.domain = domain // 定义全局url
router.beforeEach(function(to,from,next){
    document.title = to.meta.title;
    next();
})



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