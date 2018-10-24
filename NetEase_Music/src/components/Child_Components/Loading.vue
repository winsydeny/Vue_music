<template>
    <div id="loading">
            <mu-container data-mu-loading-color="secondary" data-mu-loading-overlay-color="rgba(0, 0, 0, .7)" v-loading="loading2" class="demo-loading-wrap">
            </mu-container>
    </div>
</template>
<script>
    export default{
        name:'loading',
        // methods:{
        //     loading () {
        //         this.loading2 = true;
        //         setTimeout(() => {
        //             this.loading2 = false;
        //         }, 2000)
        //         },
        // }
    }
</script>
<style>
    /* #loading{
        width: 100%;
        height: 600px;
        background: greenyellow;
    } */
    
</style>