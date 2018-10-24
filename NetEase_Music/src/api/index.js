// 通过封装api接口 直接在页面中引入接口
import Vue from "vue";
let that = new Vue();
export let getHot = () => {
    return that.$http.get(`${domain.url}/playlist/hot`)
};
export let getHotlist = () => {
    return that.$http.get(`${domain.url}/playlist/detail?id=1`)
};

export let getAll = () => {
    return 
}