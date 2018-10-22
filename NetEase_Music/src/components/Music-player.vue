<template>
    <div id="player">
    <router-link to="/musicpage">
    </router-link>
    <aplayer :music="musics"></aplayer>    

    </div>
</template>
<script>
import aplayer from 'vue-aplayer'
// import Alice from '../assets/Alice Merton - Lash Out.mp3'
    export default{
        name:'player',
        props:['musicItem'],
        data(){
            return {
                musics:{},
                songs:[],
                songlist:[]
            }
        },
        computed:{
            // music([
            //     title,
            //     author,
            //     src
            // ])
        },
        components:{
            aplayer
        },
        methods:{
            player(){
                // console.log(this.musics);
                // this.musics.title = '';
                // this.musics.artist = '';
                // this.musics.src = '';
                console.log(this.musicItem[0].id);
                let title = this.musicItem[0].name;
                let author = this.musicItem[0].artists[0].name;
                // let pic = this.musicItem[0];
                let id = this.musicItem[0].id;
                let url = `${domain.url}/music/url?id=${id}`
                this.$http.get(url)
                .then((data) => {
                //  console.log(data.body);
                 console.log(data.body.data[0].url);
                if(data.body.data[0].url === null){
                    alert("Can't play temporarily");
                }
                // this.musics.src = data.body.data[0].url;
                // let src = data.body.data[0].url;
                // this.musics.artist = author;
                // this.musics.title = title;
                // console.log(this.musics.src);
                let obj = {
                    title:title,
                    author:author,
                    src:data.body.data[0].url
                }
                this.musics = obj;
            },(err) => {
                alert("不能播放");
            })
                }
        }
        
    }
</script>
<style>
</style>