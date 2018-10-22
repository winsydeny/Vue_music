<template>
  <div id="app">
      <div style="overflow:hidden;">
         <mu-container id="btn" class="top-bar">  
          <mu-bottom-nav>
              <router-link to="/">
                  <mu-bottom-nav-item title="Music" icon="music_note"></mu-bottom-nav-item>
              </router-link>
              <router-link to="/movies">
                  <mu-bottom-nav-item title="Movies" icon="movies"></mu-bottom-nav-item>
              </router-link>
              <router-link to="/recents">
                <mu-bottom-nav-item title="FM" icon="radio"></mu-bottom-nav-item>
            </router-link>
          </mu-bottom-nav>
        </mu-container>
      </div>       
    <!-- <router-link to="/homepage">
    </router-link> -->
    <router-view  ></router-view>
  </div>
</template>

<script>
  // import homepage from './components/HomePage'
export default {
  name: 'App',
  
}

</script>
<style>
@import 'http://fonts.useso.com/css?family=Roboto:300,400,500,700,400italic';
@import 'https://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css';
*{
  margin: 0;padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background:white;
  height: 100%;
  /* width: 100%;
  height: 120px; */
}
.top-bar{
        position: fixed;
        /* top: 20px; */
        width: 100%;
        /* background:#2196f3; */
        z-index: 2;
}
.mu-bottom-nav{
  height: 60px;
}
.container{
  padding: 0;
}
.mu-bottom-item-active{
  color:#ff4081;
}
.mu-bottom-item{
}
a{
  color: #86787d;
}
</style>
