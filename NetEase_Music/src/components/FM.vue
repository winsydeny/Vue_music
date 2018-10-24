<template>
        <div id="recent" data-mu-loading-color="secondary" data-mu-loading-overlay-color="rgba(0, 0, 0, .7)" v-loading="loading2">
            <h2>catelist</h2>
            <div class="categories">
                <div class="cate-item" v-for="(item, index) in catelist" :key="index">
                    <img :src="item.pic84x84IdUrl" alt="index" @click="getinfo">
                    <span>{{ item.name }}</span>
                </div>
            </div>
            <h2 style="padding-bottom:18px;">recommend</h2>
            <div class="radio-list">
                <div class="items" v-for="(item, index) in radioList" :key="index">
                    <img :src="item.picUrl" alt="index"><span>{{ item.name }}</span>
                    <p>{{ item.copywriter }}</p>
                </div>
            </div>
            
        </div>
    </template>
    <script>
        export default {
            name:'recent',
            data(){
                return {
                    radioList:[],
                    catelist:[],
                    loading2:true
                }
            },
            methods:{
                
                getinfo(){
                    alert("This feature is under development. . .");
                },
                getfm(){
                    this.$http.get(`${domain.url}/dj/recommend`)
                    .then((data) => {
                        this.loading2 = false;
                        console.log(data);
                        data.body.djRadios.forEach((element,index) => {
                            if(index < 9){
                            this.radioList.push(element);
                            }
                        });
                    },(err) => {
                        alert(err);
                    })
                },
                getcate(){
                    this.$http.get(`${domain.url}/dj/catelist`)
                    .then((data) => {
                        console.log(data);
                        data.body.categories.forEach((element,index) => {
                            if(index < 10){
                            this.catelist.push(element);
                            }
                        });
                    },(err) => {
                        alert(err);
                    })
                }
            },
            created() {
                this.getfm();
                this.getcate();
            },
        }
    </script>
    <style scoped>
        #recent{
            margin:60px 0 0 0;
        }
        .categories{
            width: 100%;
            height: 200px;
            display:flex;
            flex-wrap: wrap;
            align-items: center;

        }
        .cate-item{
            width: 20%;
            height: 60px;
            position: relative;
            /* background: gray;   */
            /* border-radius: 50%;       */
         }
         .cate-item img{
             width: 50%;
             height: auto;
         }
         .cate-item span{
             bottom: 0px;
             right: 7px;
             font-size: 12px;
             color: rgb(71, 27, 53);
         }
        .radio-list{
            width: 100%;
            height: auto;
            display: flex;
            flex-wrap: wrap;
        }
        .radio-list .items{
            width: 33%;
            height: auto;
            /* background: gray; */
            margin: 0.1%;
            font-size: 12px; font-weight: 400;
            border-radius: 4px;
            position: relative;
            margin-top: 2px;
            
        }
        span{
            position:absolute;
            left: 6px;
            bottom: 38px;
            color: white;
            font-weight: bolder;
            /* top: 0; */
        }
        img{
            width: 100%;
            height: auto;
        }
        h2{
            text-align:left;
            padding-left:10px;
            color:#2196f3;
            font-weight: bolder;
        }
    </style>