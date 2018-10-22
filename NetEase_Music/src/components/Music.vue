<template>
    <div id="music">
            <mu-container style="position:fixed;z-index: 1">
                    <mu-tabs :value.sync="active1" inverse color="secondary" text-color="rgba(0, 0, 0, .54)"  center>
                      <router-link to="/music/hot" class="text"><mu-tab>Hot </mu-tab></router-link>
                      <router-link to="/music/category" class="text"><mu-tab>Category </mu-tab></router-link>
                      <router-link to="/music/search" class="text"><mu-tab>Search </mu-tab></router-link>
                    </mu-tabs>
            </mu-container>
            <aplayer class="p-bottom" v-bind:musicItem="song" ref="aplayer"></aplayer>
            <router-view></router-view>
        </div>
</template>
<script>
import aplayer from './Music-player'
import Bus from '../eventBus/bus.js'
export default {
    name:'music',
    data(){
        return {
            song:[],
            active1:0,
            cates:[],
            details:[],
            loading2:false
        }
    },
    components:{
        aplayer
    },
    methods:{
        loading(){
            this.loading2 = true;
                setTimeout(() => {
                    this.loading2 = false;
                }, 2000);
        },
        fromSearch(){
            Bus.$on('formusic',res => {
                console.log(res[0].name);
                this.song.push(res[0]);
                 this.$refs.aplayer.player();
                // console.log(this.$refs.aplayer.player());
                // console.log(this.song)
                this.song = [];
            })
            
            
        }
    },
    created() {
        this.loading();
    },
    mounted() {
        this.fromSearch();
    },
    
}
</script>
<style scoped> 
    #music{
        /* margin-top: 20px; */
        padding-top: 60px;
    }
    .mu-tab{
        min-width: 121px;
    }
    .demo-text{
        margin-top: 5px;    
    }
    .aplayer{
        margin: 0;
    }
    
    .cates:hover{
        background: gray;
        color: white;
    }
    .text{
        color: gray;
    }
    .p-bottom{
        position:fixed;
        width: 100%;
        bottom: 0;
        z-index: 2;
    }
</style>