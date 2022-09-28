<template>
    <!-- 首页 -->
    <div class="display-main" v-if="display_flag.flag==null">
        <h1>派遣地点介绍</h1>
        <p>注：鼠标放到按钮上即可显示对应派遣地点的介绍。</p>
    </div>
</template>
<script>
    import { reactive, watch } from 'vue'
    import { useStore } from 'vuex'
    export default {
        name:'sale_buttons_display',
        setup(){
            const store = useStore()
            const display_flag = reactive({
                flag:store.state.sale_display,
            })

            watch(() => store.state.sale_display, (val, old) => {
                display_flag.flag = val
            })

            return {
                display_flag
            }
        }
    }
</script>
<style scoped>
    .display-main {
        text-align: center;
        background: rgb(234, 242, 249, 0.9);
        border-style: solid;
        border-width: 3px;
        border-color: black;
        width: 100%;
        height: 100%;
        overflow: auto;
        border-radius:10px 10px 10px 10px;
    }
    .display-image-content {
        width: 40%;
        height: 90%;
        margin: 0px;
        padding: 0px;
        margin-left: 10px;
    }
    .display-image {
        width: 100%;
        height: 100%;
    }
    .display-information {
        text-align: center;
        margin-right: 20px;
        width: 50%;
        height: 100%;
        font-size: 16px;
    }
    .information-font {
        font-size: 15px;
    }
    :deep(.el-collapse) {
        box-sizing: border-box;
    }
    :deep(.el-collapse-item__header) {
        border: none;
        background-color: transparent;
        font-size: 15px;
        font-weight: bold;
        margin-left: 0px;
        height: 25px;
    }
    :deep(.el-collapse-item__wrap) {
        background-color: transparent;
    }
</style>