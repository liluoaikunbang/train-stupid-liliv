<template>
    <div class="item">
        <span class="content">第{{ log_time.day }}天{{ log_time.hour }}时{{ log_time.minute }}分：</span>
        <span class="content" style="color: darkcyan;" v-if="log_flag=='tip'">{{ log_content }}</span>
        <span class="content" style="color: darkblue;" v-if="log_flag=='bondage'">{{ log_content }}</span>
        <span class="content" style="color: blue;" v-if="log_flag=='train'">{{ log_content }}</span>
        <span class="content" style="color: darkmagenta;" v-if="log_flag=='modify'">{{ log_content }}</span>
        <span class="content" style="color: darksalmon;" v-if="log_flag=='event'">{{ log_content }}</span>
        <span class="content" style="color: green;" v-if="log_flag=='sale'">{{ log_content }}</span>
    </div>
</template>
<script>
    export default {
        name:"log_item",
        props:['log_flag', 'log_content', 'log_time'],
        setup(){
        }
    }
</script>
<style scoped>
    .item {
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 10px;
        margin-top: 10px;
        font-size: 20px;
        width: 90%;
        /* background: rgb(195, 225, 251); */
    }
    .content{
        margin: 0px;
        padding: 0px;
    }
</style>