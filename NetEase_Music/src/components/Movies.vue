<template>
        <div id="movies">
            <mu-container data-mu-loading-color="secondary" data-mu-loading-overlay-color="rgba(0, 0, 0, .7)" v-loading="loading2" class="demo-loading-wrap">
                </mu-container>
                <mu-container>
                        <mu-tabs :value.sync="active1" inverse color="secondary" text-color="rgba(0, 0, 0, .54)"  center style="z-index: 1;">
                          <mu-tab>New</mu-tab>
                          <mu-tab>Recommend</mu-tab>
                          <mu-tab>Top 10</mu-tab>
                        </mu-tabs>
                        <div class="demo-text" v-if="active1 === 0">
                                <router-link :to="'/movies/video?id='+item.id" class="mv-list" v-for="(item, index) in mvs" :key="index">
                                        <div class="mv-img">
                                            <img :src="item.cover" alt="1">
                                        </div>
                                        <div class="mv-text">
                                                <p>{{ item.name }}</p>
                                                <p>{{ item.briefDesc }}</p> 
                                                <p style="text-align:right;margin:15px 0;">{{ item.artistName }}</p>
                                        </div>
                                </router-link>
                        </div>
                        <div class="demo-text" v-if="active1 === 1">
                            <div class="recommend">
                                    <router-link :to="'/movies/video?id='+item.id" class="mv-list" v-for="(item, index) in rmvs" :key="index">
                                    <div class="mv-img">
                                        <img :src="item.picUrl" alt="1">
                                    </div>
                                    <div class="mv-text">
                                            <p>{{ item.name }}</p>
                                            <p>{{ item.briefDesc }}</p> 
                                            <p style="text-align:right;margin:15px 0;">{{ item.artistName }}</p>
                                    </div>
                                </router-link>
            
                            </div>
                        </div>
                        <div class="demo-text" v-if="active1 === 2">
                                <div class="recommend">
                                        <router-link :to="'/movies/video?id='+item.id" class="mv-list" v-for="(item, index) in tops" :key="index">
                                        <div class="mv-img">
                                            <img :src="item.cover" alt="1">
                                        </div>
                                        <div class="mv-text">
                                                <p>{{ item.name }}</p>
                                                <p>{{ item.briefDesc }}</p> 
                                                <p style="text-align:right;margin:15px 0;">{{ item.artistName }}</p>
                                        </div>
                                </router-link>
                                </div>
                        </div>
                    </mu-container>
            
        </div>
</template>
<script>
    export default {
        name:'movies',
        components:{
        },
        data(){
            return {
                mvs:[],
                rmvs:[],
                loading2:true,
                active1:0,
                tops:[]
            }
        },
        methods:{
            getops(){
                this.$http.get(`${domain.url}/top/mv?limit=10`)
                    .then((data) => {
                        this.loading2 = false;
                        console.log(data);
                        data.body.data.forEach( ele => {
                            this.tops.push(ele);
                        })
                    },(err) => {
                        alert(err);
                    })
            },
            getmv(){

                this.$http.get(`${domain.url}/mv/first?limit=10`)
                .then((data) => {
                    console.log(data);
                    data.body.data.forEach(element => {
                        this.mvs.push(element);
                    });
                },(err) => {
                    alert(err);
                })
            },
            getRecommend(){
                // if(this.rmvs.length > 0){
                    // console.log(this.rmvs.length === 0);
                if(this.rmvs.length === 0){
                this.$http.get(`${domain.url}/personalized/mv`)
                .then((data) => {
                    console.log(data);
                    data.body.result.forEach(element => {
                        this.rmvs.push(element);
                    });
                },(err) => {
                    alert(err);
                })
                }
                // this.$nextTick(() => {
                //     alert("完成");
                // })
            }
        },
        mounted() {
            this.getmv();
            this.getRecommend();
            this.getops();
        },
        created() {
        },
    }
</script>
<style scoped>
    #movies{
        margin-top: 60px;
    }
    table{
        border: 1px solid red;
        border-collapse:collapse;
    }
    td{
        width: 100px;
        border: 1px solid red;
        background: rebeccapurple;
    }
    .mv-list{
        color: #0275ff;
        background: #e8b40714;
        border-radius: 4px;
        width: 98%;
        height: 76px;
        overflow: hidden;
        margin: 3px auto;
        display: block;
    }
    .mv-img{
        height: 76px;
        width: 33.3%;
        padding: 6px;
        float: left;

        /* background: green; */
    }
    .mv-text{
        float: left; 
        text-align: left; 
        font-size: 12px;      
        width: 64%;
        height: 100px;
    }
    .mv-text p:nth-child(1){
        padding-top: 6px;
    }
    .mv-text p:nth-child(2){
        font-size: 10px;
        color: rgb(42, 26, 92);
    }

    img{
        width: 100%;
        height: auto;
    }
    .mu-tab-wrapper{
        margin: 0 20px;
    }
    .search{
        position: absolute;
        top: 128px;
        color: gray;
        right: 62px;
    }
    .input{
        color: #ff4081;
        width: 190px;
    }
</style>