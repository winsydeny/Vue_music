<template>
    <div id="list">
        <p class="title">{{mvinfo.name}}</p>
        
        <video :src="src" controls></video>
        <mu-expansion-panel style="width:100%;font-size: 12px;">
            <div slot="header">{{mvinfo.artistName}}</div>
            Desc: {{mvinfo.desc}}
        </mu-expansion-panel>
        
        <mu-chip class="demo-chip pub">
                {{mvinfo.publishTime}}
        </mu-chip>
    </div>
</template>
<script>
    export default{
        name:'list',
        data(){
            return {
                mvinfo:[],
                src:''
            }
        },
        methods:{
            getmv(id){
                this.$http.get(`${domain.url}/mv?mvid=${id}`)
                .then((data)=>{
                    console.log(data.body.data);
                    this.mvinfo = data.body.data;
                    this.src = data.body.data.brs[240];
                    // data.body.tags.forEach((element,index) => {
                    //     this.categories[index] = element;
                    // });
                    // console.log(this.categories);
                },(err)=>{
                    alert(err);
                })
            },
            getCate(id){
                console.log(id);
            }
        },
      
        created() {
            this.getmv(this.$route.query.id);

        },
    }
</script>
<style scoped>
    /* li{
        list-style: none;
        display: inline-block;
    } */
    #list{
        display: flex;
        flex-wrap: wrap;
        width: 90%;
        margin: 60px auto;
    }
    .box{
        width: 32.7%;
        margin:1px;
        height: 90px;
        background: gray;
        color: white;
        line-height: 90px;
    }
    .title{
        font-size: 20px;
        font-weight: 500;
        color: rgb(80, 10, 108);
        padding:5px 1px;
    }
    .detail{
        color: rebeccapurple;
        font-size: 24px;
        text-align: left;
    }
    .detail p{
        font-size: 12px;
    }
    video{
        width: 100%;
        height: 192px;
    }
    .pub{
        position: relative;
        top: 20px;
        left: 240px;
    }
    
</style>