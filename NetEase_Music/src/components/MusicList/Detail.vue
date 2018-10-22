<template>
    <div id="detail">
        {{id}}
    </div>
</template>
<script>
    export default{
        name:'detail',
        props:['id'],
        methods:{
            getdetail(id){
                this.$http.get(`${domain.url}/top/playlist/detail?id=${id}`)
                    .then((data) => {
                        data.body.playlists.forEach((ele,index)=>{
                            this.details[index] = ele;
                        })
                    },(err) => {
                        alert(err);
                    })
            }
        },
        created() {
            
        },
    }
</script>
<style>

</style>