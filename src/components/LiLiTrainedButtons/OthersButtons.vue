<template>
    <el-space wrap>
        <!-- <el-button type="primary" round @click="clickNextDay">跳过当天</el-button> -->
        <el-button type="primary" round @click="clickClearLog">清空日志</el-button>
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
                store.commit('changeHour', store.state.time.hour+12)
            }
            const clickClearLog=()=>{ // 清空日志
                store.commit('changeLog', `欢淫来到笨笨学园。\n`)
            }

            return {
                clickNextDay,
                clickClearLog,
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
        font-size: 20px;
        font-weight: bold;
        margin-left: 10px;
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