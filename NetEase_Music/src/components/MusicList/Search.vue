<template>
    <div id="search">
                <mu-icon value="search" class="search"></mu-icon>   
                <mu-text-field v-model="form.input" @keyup.enter="search" class="input"></mu-text-field>        
            <div>
                <ul data-mu-loading-overlay-color="rgba(0, 0, 0, .7)" v-loading="loading2">
                    <li class="songlist"  v-for="(item, index) in songs" :key="index" @click="getInfo(index)">
                            <div>{{index+1}} {{ item.name }}</div>
                            <div>singer: {{ item.artists[0].name }}</div>                        
                    </li>
                </ul>
            </div>
            <div class="search-history" v-show="judge">
                <mu-chip class="demo-chip" delete v-for="(item, index) in history" :key="index">
                    {{ item }}
                </mu-chip>
            </div>
    </div>
</template>
<script>
    import Bus from '../../eventBus/bus.js'
    export default{
        name:'search',
        data(){
            return {
                loading2: false,
                song:[],
                labelPosition: 'top',
                form: {
                    input: '',
                },
                songs:[],
                history:[],
                hid:0,
                judge:true
        }
    },
    methods:{
        search(){
            this.loading2 = true;
            this.songs = [];
            let url = `${domain.url}/search?keywords=${this.form.input}`;
                    this.$http.get(url)
                    .then((data) => {
                        this.loading2 = false;
                       this.songs = data.body.result.songs;
                    },(err) => {
                        alert(err);
                    })
                this.hid = localStorage.length;
                localStorage.setItem(this.hid,this.form.input);
                this.hid++; 
                this.judge = false;
                // console.log(this.hid);
                
        },
        getInfo(index){
            console.log(this.songs[index].name);
            let forMusic = [];
            forMusic.push(this.songs[index]);
            Bus.$emit('formusic',forMusic);
         },
         getStorage(){
             if(this.songs.length){
                 console.log("have songs")
             }else{
                for(let i = 1;i<localStorage.length;i++){
                 this.history.push(localStorage.getItem(i));
             }
             }
             
         }
    },
    mounted() {
        this.getStorage();
    },
   
}
    
</script>
<style>
    #search{
        padding-top: 60px;
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
    .mu-text-field-input{
        color: rgba(10, 55, 92, 0.9);
        font-size: 20px;
        font-weight: 600;
    }
    .mu-demo-form{
        margin-top: 20px;
    }
    li{
        height: 60px;
        margin: 0 4px;
        position: relative;
        border-bottom: 1px solid #ff4081;

    }
    .songlist{
        width: 96%;
        height: 40px;
        display: block;
        border-bottom: 1px solid rgba(226, 18, 87,.2);
        margin:0 auto;
        color: #ff4081; 
    } 
    .songlist div{
        position:absolute;
        line-height: 40px;
        text-align: left;
    }
    .songlist div:nth-child(1){
        width: 200px;
        height: 40px;
        overflow: hidden;
    }
    .songlist div:nth-child(2){
        right: 10px;
        width: 130px;
        height: 40px;
        overflow: hidden;

    }
    .search-history{

    }
    .demo-chip{
        margin: 5px;
    }
</style>