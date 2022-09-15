<template>
    <div class="main">
        <div class="left">
            <div class="train-button-group">
                <div>
                    <el-menu
                        class="train-button-menu"
                        background-color="rgb(204, 223, 248)"
                        text-color="black"
                        active-text-color="blue"
                        mode="horizontal"
                    >
                        <el-menu-item index="1" class="menu-item" @click="clickBondageMenu">捆绑类</el-menu-item>
                        <el-sub-menu index="2">
                            <template #title><p class="menu-item">调教类</p></template>
                            <el-menu-item index="2-1" class="menu-item" @click="clickIndoorTrainMenu">室内调教</el-menu-item>
                            <el-menu-item index="2-2" class="menu-item" @click="clickOutdoorTrainMenu">室外调教</el-menu-item>
                        </el-sub-menu>
                        <el-menu-item index="3" class="menu-item" @click="clickModifyMenu">改造类</el-menu-item>
                        <el-menu-item index="4" class="menu-item" @click="clickOthersMenu">功能类</el-menu-item>
                    </el-menu>
                </div>
                <BondageButtons v-if="flags.train_flag=='bondage'" />
                <IndoorTrainButtons v-if="flags.train_flag=='indoor_train'" />
                <OutdoorTrainButtons v-if="flags.train_flag=='outdoor_train'" />
                <ModifyButtons v-if="flags.train_flag=='modify'" />
                <OthersButtons v-if="flags.train_flag=='others'" />
            </div>
            <TrainButtonsDisplay/>
        </div>
        <div class="right">
            <CardTrainSale />
            <div class="messages">
                <textarea id="log_area" class="messages-comment" readonly v-model="train_log.log"></textarea>
            </div>
        </div>
    </div>
</template>
<script>
    import { reactive, watch } from 'vue';
    import { useStore } from 'vuex'
    import { addLog } from '../../utils'
    import { handleNextHourEvents, handleNextDayEvents } from '../Events'
    import CardTrainSale from '../../components/CardTrainSale.vue'
    import BondageButtons from '../../components/LiLiTrainedButtons/BondageButtons.vue';
    import IndoorTrainButtons from '../../components/LiLiTrainedButtons/IndoorTrainButtons.vue';
    import OutdoorTrainButtons from '../../components/LiLiTrainedButtons/OutdoorTrainButtons.vue';
    import ModifyButtons from '../../components/LiLiTrainedButtons/ModifyButtons.vue';
    import OthersButtons from '../../components/LiLiTrainedButtons/OthersButtons.vue';
    import TrainButtonsDisplay from '../../components/TrainButtonsDisplay.vue'
    export default {
        name:"lili_trained",
        components: {
            CardTrainSale,
            BondageButtons,
            IndoorTrainButtons,
            OutdoorTrainButtons,
            ModifyButtons,
            OthersButtons,
            TrainButtonsDisplay,
        },
        setup() {
            const store = useStore()
            const flags = reactive({
                train_flag:'bondage', // 当前显示的按钮组
            })
            const train_log = reactive({
                log:store.state.log,
            })

            const current_id = store.state.current_id

            // 控制menu从而使按钮组转换
            const clickBondageMenu=()=>{
                flags.train_flag = 'bondage'
            }
            const clickIndoorTrainMenu=()=>{
                flags.train_flag = 'indoor_train'
            }
            const clickOutdoorTrainMenu=()=>{
                flags.train_flag = 'outdoor_train'
            }
            const clickModifyMenu=()=>{
                flags.train_flag = 'modify'
            }
            const clickOthersMenu=()=>{
                flags.train_flag = 'others'
            }

            // 初始化过程
            if(current_id!=null){ // 如果current_id不为null，则有笨璃璃，train_flag设置为true，并进行展示
                flags.train_flag = 'bondage'
                console.log(`${current_id}号笨璃璃正在被调教。`)
                store.commit('changeLog', addLog(store.state.log, `${current_id}号笨璃璃正在被调教。`))
                train_log.log = store.state.log
            }


            // 监听全局time的变化，触发事件，因为可能存在一次度过多个小时的行为，使用循环判定
            watch(() => store.state.time, (val, old) => {
                let gap_day = val.day - old.day
                let gap_hour = val.hour - old.hour + gap_day*12
                // 事件判定
                if(gap_hour>=1){
                    for(let i=0; i<gap_hour; i++){ // 小时判定
                        handleNextHourEvents()
                    }
                }
                if(gap_day>=1){
                    handleNextDayEvents() // 天数判定
                }
            })
            // 监听train_log的变化，随时更新日志
            watch(() => store.state.log, (val, old) => {
                train_log.log = val
                // 日志栏默认到底
                var log_area = document.getElementById('log_area')
                log_area.scrollTop = log_area.scrollHeight
            })

            return {
                flags,
                train_log,
                clickBondageMenu,
                clickIndoorTrainMenu,
                clickOutdoorTrainMenu,
                clickModifyMenu,
                clickOthersMenu,
            }
        }
    }
</script>
<style scoped>
    .main {
        display: flex;
        justify-content: space-between;
    }
    .left {
        width: 50%;
        height: 90vh;
        margin-left: 50px;
        margin-top: 10px;
    }
    .train-button-group {
        background: rgb(234, 242, 249);
        border-style: solid;
        border-width: 1px;
        border-color: black;
        width: 100%;
        height: 60%;
        overflow: auto;
    }
    .train-button-menu {
        height: 35px;
    }
    .button-main-title-top {
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        margin-top: 5px;
    }
    .button-main-title {
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        margin-top: 10px;
        margin-bottom: 5px;
    }
    .button-title {
        text-align: center;
        font-size: large;
        font-weight: bold;
    }
    .button-group {
        margin-left: 10px;
        margin-right: 10px;
    }
    .right {
        width: 40%;
        height: 44vh;
        margin-right: 50px;
        margin-top: 10px;
    }
    .menu-item {
        font-size: 20px;
    }
    .messages {
        width: 100%;
        height: 100%;
        margin-right: 3px;
        margin-top: 5px;
    }
    .messages-comment {
        background: white;
        border-style: solid;
        border-width: 1px;
        border-color: black;
        width: 100%;
        height: 100%;
        font-size: 15px;
        resize: none;
    }
</style>