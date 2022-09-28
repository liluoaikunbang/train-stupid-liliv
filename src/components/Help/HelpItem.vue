<template>
    <div class="item" v-if="help_flag">
        <div class="image-content">
            <img class="image" src="../../assets/avatar.jpg" alt="">
        </div>
        <div class="content" style="background: rgb(34, 189, 241);">
            <div class="left_triangle" style="border-color:transparent rgb(34, 189, 241) transparent transparent;"></div>
            <div class="content-text">
                <span>璃落：{{ help_content }}</span>
            </div>
        </div> 
    </div>
    <div class="item" v-else>
        <div class="image-content">
            <img class="image" src="../../assets/avatar1.jpg" alt="">
        </div>
        <div class="content" style="background: rgb(68, 200, 102);">
            <div class="left_triangle" style="border-color:transparent rgb(68, 200, 102) transparent transparent;"></div>
            <div class="content-text">
                <span>{{ name }}：{{ help_content }}</span>
            </div>
        </div>
    </div>
</template>
<script>
    import { useStore } from 'vuex'
    import { reactive, toRefs } from 'vue'
    export default {
        name:"log_item",
        props:['help_flag', 'help_content'],
        setup(){
            const store = useStore()
            const data = reactive({
                name:store.state.name
            })

            return {
                ...toRefs(data)
            }
        }
    }
</script>
<style scoped>
    .item {
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 10px;
        margin-top: 15px;
        font-size: 20px;
        width: 90%;
    }
    .image-content {
        float: left;
        margin: 0px;
        padding: 0px;
        width: 30px;
        height: 30px;
    }
    .image {
        width: 100%;
        height: 100%;
    }
    .content{
        border-radius:7px;
        margin-left: 40px;
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 0px;
        padding-right: 5px;
        width: fit-content;
    }
    .left_triangle{
        height:0px;  
        width:0px;  
        border-width:8px;  
        border-style:solid;
        position: relative;
        left:-16px;
        top:4px;
        float: left;
        margin: 0px;
        padding: 0px;
    }
    .content-text {
        margin-left: 15px;
        margin-right: 10px;
        width: 100%;
    }
</style>