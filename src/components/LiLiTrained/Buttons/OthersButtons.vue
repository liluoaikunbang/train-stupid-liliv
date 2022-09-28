<template>
    <el-space wrap>
        <el-button type="primary" round @click="clickNextDay">跳过当天</el-button>
    </el-space>
</template>
<script>
    import { reactive, ref, toRefs } from 'vue';
    import { useStore } from 'vuex'
    export default {
        name:"bondage_buttons",
        setup(){
            const store = useStore()

            const clickNextDay=()=>{ // 跳过当天
                store.commit('addTime', 60*12)
            }

            return {
                clickNextDay,
            }
        }
    }
</script>
<style scoped>
    /* .el-collapse需要深度选择器来覆盖样式 */
    :deep(.el-collapse) {
        box-sizing: border-box;
    }
    :deep(.el-collapse-item__header) {
        border: none;
        background-color: transparent;
        font-size: 15px;
        font-weight: bold;
    }
    :deep(.el-collapse-item__wrap) {
        background-color: transparent;
    }
    .button-title {
        text-align: center;
        font-size: large;
        font-weight: bold;
    }
    .el-space{
        margin-top: 5px;
        margin-left: 20px;
    }
</style>