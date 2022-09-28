<template>
    <el-space wrap>
        <el-button type="primary" round v-if="prolactin_flag" @click="clickProlactin">空孕催乳剂</el-button>
        <el-button type="info" round v-else disabled>空孕催乳剂</el-button>
    </el-space>
</template>
<script>
    import { reactive, ref, toRefs } from 'vue';
    import { useStore } from 'vuex'
    import { judgeFlag, changeAttributes } from '../../Attributes/Attributes'
    import { handleInstantEvents } from '../../../views/Events'
    import { addLog } from '../../LogArea/LogUtils'
    export default {
        name:"modify_buttons",
        setup(){
            const store = useStore()
            let current_lili = store.state.current_lili
            const name = store.state.name

            const flags = reactive({ // 定义按钮状态
                prolactin_flag:false, // 催乳剂
            })

            // 改变按钮状态
            const handleFlags=()=>{
                flags.prolactin_flag = judgeFlag({current_lili:current_lili, stop_state:['泌乳'], pose_arm:[10, Infinity], pose_waist:['自由', '竖直', '后仰']})
            }

            // 初始化数据与状态
            if(store.state.current_id != null&&current_lili.whereabouts != '派遣中'){
                handleFlags()
            }
            // 每个按钮执行后的通用操作
            const handleButtons=()=>{
                handleFlags()
                store.commit('changeCurrentLiLi', current_lili)
                handleInstantEvents()
            }

            const clickProlactin=()=>{
                store.commit('addTime', 30)
                addLog('modify', `${name}为${current_lili.name}注入催乳剂，${current_lili.name}开始泌乳。`, true)
                current_lili = changeAttributes({input_lili:current_lili, add_state:['泌乳', '胀奶']})
                handleButtons()
            }
            
            return {
                ...toRefs(flags),
                clickProlactin,
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