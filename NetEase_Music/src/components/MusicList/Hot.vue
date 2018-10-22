<template>
    <div id="hot" >
        <div class="box">
                <!-- <div class="box_a"></div> -->
                <div class="box_a" v-for="(item, index) in hotlist" :key="index" @click=getinfo(item.id)>
                {{ item.name }}
                </div>
        </div>
        <mu-container data-mu-loading-color="secondary" data-mu-loading-overlay-color="rgba(0, 0, 0, .7)" v-loading="loading2">
                <mu-card class="card"" style="width: 40%; max-width: 375px;" v-for="(item, index) in bgurl" :key="index">
                  <mu-card-media :title="item.nickname" sub-title="Image Sub Title">
                    <img :src="item.backgroundUrl">
                  </mu-card-media>
                </mu-card>
        </mu-container>
    </div>
</template>
<script>
import player from '../Music-player';
import {getHot,getHotlist} from '../../api/index.js';
export default{
    name:'hot',
    components:{
        player
    },
    data(){
        return {
            hotlist:[],
            bgurl:[],
            loading2:false
        }
    },
    methods:{
        loading(){
            this.loading2 = true;
                setTimeout(() => {
                    this.loading2 = false;
                }, 2000);
        },
        getinfo(id){
            this.bgurl = [];
            this.$http.get(`${domain.url}/playlist/detail?id=${id}`)
                .then((data) => {
                    console.log(data.body.code);
                    if(data.body.code === 404){
                        alert('Nothing...')
                    }else{
                            data.body.playlist.subscribers.forEach(ele => {
                            this.bgurl.push(ele);
                        });
                    }
                   
                },(err) => {
                    alert(err);
                })

        },
        getHots(){
            getHot().then((data) => {
                this.hotlist = data.body.tags;
            },(err) => {
                alert(err);
            })
            this.gethotlist();
            // this.hotlist = body.tags;
            // hot.then((data) => { console.log(data.body.tags) })
            // console.log(hot);
        },
        gethotlist(){
            getHotlist().then((data) => {
                this.bgurl =  data.body.playlist.subscribers; 
            },(err) => {
                alert(err);
            })
        }
        // getHot(){
        //         this.$http.get(`${domain.url}/playlist/hot`)
        //         .then((data) => {
        //             console.log(data.body.tags);
        //             data.body.tags.forEach(element => {
        //                 this.hotlist.push(element);
        //             });
        //         },(err) => {
        //             alert(err);
        //         });
        //         this.$http.get(`${domain.url}/playlist/detail?id=1`)
        //         .then((data) => {
        //             console.log(data.body.playlist);
        //             data.body.playlist.subscribers.forEach(ele => {
        //                 this.bgurl.push(ele);
        //             })
        //         },(err) => {
        //             alert(err);
        //         });
        //         this.$nextTick(() => {
        //             // this.loading2 = true;
        //         })
        //     },
      
        },
        created() {
            this.getHots();
        },

    
}
</script>
<style>
    #hot{
        margin-top:50px;
    }
    /* #hot .top-bar{
        width: 457px;
        height: 30px;
        overflow-x: scroll;
    }
    #hot .top-bar div{
        float: left;
        padding:0 6px;
    } */
    .m-bottom{
        width: 100%;
        position: relative;
    }
    .aplayer {
        margin: 0;
    }




    .box{ 
        width: 100%;height: 80px;
        /* background: gray;  */
        margin-top: 60px;
		font-size: 0;
		overflow-x: scroll;
		white-space: nowrap;

	 }
	 .box::-webkit-scrollbar{
	 	display: none;
	 }
	.box_a{
		display: inline-block;
        line-height: 80px;
        padding: 2px 4px;
		height: 100%;	
        font-size: 24px;
        color: rgb(65, 38, 38);
	}
    
    .card{
        width: 40%;
        float: left;
        left: 7%;
        margin: 6px;
    }
    .mu-card-media-title{
        padding: 4px;
    }
    .mu-card-media-title .mu-card-title{
        font-size: 14px;
    }
    .mu-card-media-title .mu-card-sub-title{
        font-size: 10px;
    }


</style>