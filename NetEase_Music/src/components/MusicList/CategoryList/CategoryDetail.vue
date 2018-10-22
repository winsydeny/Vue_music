<template>
    <div id="categorydetail">
        <div class="top">
            <img :src="coverImgUrl" alt="1">
            <div><span>Introduce:</span><br>{{ description }}</div>
        </div>
        <div class="list" v-for="(item, index) in playlist" :key="index" @click="msg">
            <p>{{item.name}}</p>
            <p style="text-align:right">{{item.id}}</p>
        </div>
    </div>
</template>
<script>
    export default{
        name:'categorydetail',
        data(){
            return{
                playlist:[],
                coverImgUrl:'',
                description:''
            }
        },
        methods:{
            msg(){
                alert("can not play");
            },
            getlist(id){
                this.$http.get(`${domain.url}/playlist/detail?id=${id}`)
                .then((data) => {
                    let str = data.body.playlist.description;
                    // console.log(data.body.playlist.tracks[2].al.picUrl);
                    if(str . length > 60) str = str.substring(0,60) + '...';
                    this.coverImgUrl = data.body.playlist.coverImgUrl;
                    this.description = str;
                    data.body.playlist.tracks.forEach(element => {
                        let obj = {};
                        obj.id = element.id;
                        obj.name = element.name;
                        this.playlist.push(obj);
                    });                    
                },(err) => {
                    alert(err);
                })
            }
        },
        created() {
            this.getlist(this.$route.query.id);
        }
    }
</script>
<style scoped>
    #categorydetail{
        margin-top: 60px;
    }
    .top{
        height: 160px;
        width: 100%;
        padding: 4px;
        border-top: 2px solid #ff4081;
        background: ghostwhite;
        color: #607d8b;
        font-size: 12px;
        /* border: 1px solid rgba(61, 59, 59,.4); */
        box-shadow: 2px 2px 2px 2px rgba(61, 59, 59,.4);
    }
    .top img{
        height: 100%;
        width: auto;
        float: left;
    }
    .top div{
        height: 100%;
        width: 200px;
        text-align: left;
        overflow: hidden;
        float: right;
    }
    .top div span{
        font-size: 30px;
        line-height: 61px;
        color: rgba(45, 6, 117, 0.8);
    }
    .list{
        width: 100%;
        height: 40px;
        color: #009cff;
        line-height: 40px;
        background: rgba(245, 127, 88,.1);
        text-align: left;
        padding:0 30px;
    }
</style>