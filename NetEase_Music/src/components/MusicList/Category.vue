<template>
        <div id="category">
                <mu-container data-mu-loading-color="secondary" data-mu-loading-overlay-color="rgba(0, 0, 0, .7)" v-loading="loading2" class="demo-loading-wrap">
                </mu-container>

            <router-link :to="'/music/category/categorydetail?id='+item.id" class="cate-list" v-for="(item, index) in details" :key="index">
                <div class="cate-img">
                    <img :src="item.coverImgUrl" :alt="index">
                </div>
                <div class="cate-text">{{item.name}}</div>
            </router-link> 


            <router-view></router-view>
        </div>
        
    </template>
    <script>
    export default{
        name:'category',
        data(){
            return {
                details:[],
                cates:[
                    {'name':'华语','id':5001},
                    {'name':'流行','id':1},
                    {'name':'摇滚','id':2},
                    {'name':'民谣','id':1001},
                    {'name':'电子','id':2004}
                ],
                loading2:true
            }
        },
        methods:{
            getCate(){
                    let id = 1;
                    // console.log(domain.url);
                    let url = `${domain.url}/top/playlist/detail?id=${id}`;
                    this.$http.get(url)
                    .then((data) => {
                        console.log(data);
                        data.body.playlists.forEach(element => {
                            this.details.push(element);
                        });
                        this.loading2 = false;
                        // console.log(this.details[0]);
                    },(err) => {
                        alert(err);
                    })
                    
                },
          
                getSongs(){
                // this.$http.get('http://localhost:3000/playlist/hot')
                // .then((data)=>{
                //     data.body.tags.forEach((element,index) => {
                //         this.cates[index] = element;
                //     });
                //     console.log(this.cates);
                // },(err)=>{
                //     alert(err);
                // })
                
            },
            
        },
        created() {
            this.getCate();
        },
        

    }
    </script>
    <style scoped>
    #category{
        padding-top: 40px;
        margin: 4px;
    }
    .list:hover{
        background: gray;
        font-size: 20px;
        color: white;
    }
    .cate-list{
        height: 60px;
        width: 100%;
        margin: 6px 2px;
        /* border:1px solid gray; */
        box-shadow: 1px 1px rgba(194, 194, 186,.3); 
        /* background: rgba(136, 132, 132,.2); */
    }
    .cate-img img{
        height: 60px;
        width: auto;
        float: left;
    }
    .cate-text{
        line-height: 60px;
        color: cadetblue;
    }
    </style>