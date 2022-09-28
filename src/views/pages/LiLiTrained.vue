<template>
    <div class="main">
        <div class="top">
            <div class="top-left">
                <div class="train-log-header">
                    <p class="train-log-title">调教日志</p>
                </div>
                <div class="train-log-main">
                    <el-scrollbar ref="train_log_scroll">
                        <TrainLogItem v-for="item in data.train_log" :key="item" :flag="item.flag" :content="item.content" />
                    </el-scrollbar>
                </div>
                <div class="train-log-footer">
                    <el-button type="success" size="small" color="blue" class="train-log-button" plain @click="clickClearTrainLog">清空日志</el-button>
                </div>
            </div>
            <div class="top-center">
                <img class="image" src="../../assets/characters/original.png" alt="">
            </div> 
            <div class="top-right">
                <el-scrollbar>
                    <TrainCard />
                </el-scrollbar>
            </div>
        </div>
        <div class="bottom">
            <div class="bottom-left">
                <el-container>
                    <el-aside width="130px" class="train-aside">
                        <el-scrollbar>
                            <el-menu background-color="rgb(234, 242, 249)" class="train-menu">
                                <el-menu-item-group v-if="true">
                                    <el-menu-item class="train-item" index="1" @click="clickBondageMenu">捆绑紧缚</el-menu-item>
                                    <el-menu-item class="train-item" index="2" @click="clickIndoorTrainMenu">日常调教</el-menu-item>
                                    <el-menu-item class="train-item" index="3" @click="clickModifyMenu">永久改造</el-menu-item>
                                    <el-menu-item class="train-item" index="4" @click="clickOutdoorTrainMenu">道具背包</el-menu-item>
                                    <el-menu-item class="train-item" index="5" @click="clickOutdoorTrainMenu">扩展游戏</el-menu-item>
                                </el-menu-item-group>
                                <el-menu-item-group v-else>
                                    <el-menu-item class="train-item" index="1" disabled>捆绑紧缚</el-menu-item>
                                    <el-menu-item class="train-item" index="2" disabled>日常调教</el-menu-item>
                                    <el-menu-item class="train-item" index="3" disabled>永久改造</el-menu-item>
                                    <el-menu-item class="train-item" index="4" disabled>道具背包</el-menu-item>
                                    <el-menu-item class="train-item" index="5" disabled>扩展游戏</el-menu-item>
                                </el-menu-item-group>
                            </el-menu>
                        </el-scrollbar>
                    </el-aside>
                    <el-main class="buttons">
                        <el-scrollbar>
                            <BondageButtons v-if="flags.train_flag=='bondage'" />
                            <IndoorTrainButtons v-if="flags.train_flag=='indoor_train'" />
                            <OutdoorTrainButtons v-if="flags.train_flag=='outdoor_train'" />
                            <ModifyButtons v-if="flags.train_flag=='modify'" />
                        </el-scrollbar>
                    </el-main>
                </el-container>
            </div>
            <div class="bottom-right">
                <TrainButtonsDisplay />
            </div>
        </div>
    </div>
</template>
<script scoped>
    import { reactive, ref, toRefs, watch, onMounted } from 'vue';
    import { useStore } from 'vuex'
    import { addLog } from '../../components/LiLiTrained/TrainLogUtils'
    import { assignObject, transformTime } from '../../utils'
    import TrainCard from '../../components/LiLiTrained/TrainCard.vue'
    import TrainButtonsDisplay from '../../components/LiLiTrained/TrainButtonsDisplay.vue'
    import BondageButtons from '../../components/LiLiTrained/Buttons/BondageButtons.vue'
    import IndoorTrainButtons from '../../components/LiLiTrained/Buttons/IndoorTrainButtons.vue'
    import OutdoorTrainButtons from '../../components/LiLiTrained/Buttons/OutdoorTrainButtons.vue'
    import ModifyButtons from '../../components/LiLiTrained/Buttons/ModifyButtons.vue'
    import OthersButtons from '../../components/LiLiTrained/Buttons/OthersButtons.vue'
    import TrainLogItem from '../../components/LiLiTrained/TrainLogItem.vue'
    export default {
        name:"help",
        components:{
            TrainCard,
            TrainButtonsDisplay,
            BondageButtons,
            IndoorTrainButtons,
            OutdoorTrainButtons,
            ModifyButtons,
            OthersButtons,
            TrainLogItem,
        },
        setup(){
            const store = useStore()
            const flags = reactive({
                train_flag:'bondage', // 当前显示的按钮组
            })
            const data = reactive({
                train_log:store.state.train_log,
            })

            const current_id = store.state.current_id

            const train_log_scroll = ref(null) // 获取dom元素

            // 日志栏滚动条置底
            const scrollDown=()=>{
                // 当前滚动条位置移动到40*日志条数的px。
                train_log_scroll.value.setScrollTop(40 * store.state.train_log.length)
            }

            // 清空日志
            const clickClearTrainLog=()=>{
                store.commit('changeTrainLog', [])
            }

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

            onMounted(() => {
                scrollDown()
            })

            // 监听train log，随时更新日志
            watch(() => store.state.train_log, (val, old) => {
                data.train_log = val

                // 滚动条置底
                setTimeout(()=>{ // 因为dom元素要在onMounted之后才能获取到，因此需要加入异步操作
                    scrollDown()
                },0)
            })

            // 初始化过程
            if(current_id!=null){ // 如果current_id不为null，则有笨璃璃，train_flag设置为true，并进行展示
                flags.train_flag = 'bondage'
                console.log(`${current_id}号笨璃璃正在被调教。`)
                addLog(true, `${current_id}号笨璃璃前来报道！`, false)
            }

            // 监听全局time的变化，触发事件，因为可能存在一次度过多个小时的行为，使用循环判定
            watch(() => store.state.time, (val, old) => {
                if(store.state.current_id != null){
                    let gap = assignObject(transformTime(val - old))
                    let gap_day = gap.day, gap_hour = gap.hour, gap_minute=gap.minute
                    gap_hour += 12*gap_day
                    gap_minute += 60*gap_hour
                    // 事件判定
                    if(gap_hour>=1){
                        for(let i=0; i<gap_hour; i++){ // 小时判定
                            handleNextHourEvents()
                        }
                    }
                    if(gap_day>=1){
                        handleNextDayEvents() // 天数判定
                    }
                }
            })

            return {
                flags, data, train_log_scroll,
                clickClearTrainLog,
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
        width: 1300px;
        height: 95vh;
        margin-top: 20px;
    }
    .top {
        background: rgba(234, 242, 249, 0.9);
        border-style: solid;
        border-width: 3px;
        border-color: black;
        width: 100%;
        height: 50vh;
        margin-left: 20px;
        margin-right: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius:10px 10px 10px 10px;
    }
    .top-left {
        position: relative; /* 父级元素需要相对定位，子级元素绝对定位，才能让子级元素相对父级元素定位 */
        border-right-style: solid;
        border-right-width: 3px;
        border-right-color: black;
        height: 100%;
        width: 630px;
    }
    .train-log-header {
        width: 100%;
        height: 10%;
        position: absolute;
        top: 0px;
        background: rgba(185, 221, 255, 0.5);
        border-radius:10px 0px 0px 0px;
    }
    .train-log-title {
        font-size: 17px;
        position: absolute; 
        left: 50%; top: 50%;
        margin-top: -10px;
        margin-left: -40px;
    }
    .train-log-main {
        position: absolute;
        width: 100%;
        height: 80%;
        top: 35px;
        bottom: 20px;
    }
    .train-log-footer {
        text-align: right;
        width: 100%;
        height: 10%;
        position: absolute;
        bottom: 0px;
        background: rgba(185, 221, 255, 0.5);
        border-radius:0px 0px 0px 10px;
    }
    .train-log-button {
        position: absolute;
        right: 30px;
        bottom: 5px;
    }
    .top-center {
        height: 100%;
        width: 270px;
    }
    .top-right {
        border-left-style: solid;
        border-left-width: 3px;
        border-left-color: black;
        height: 100%;
        width: 400px;
    }
    .image {
        width: 100%;
        height: 100%;
    }
    .bottom {
        opacity: 0.9;
        background: rgb(234, 242, 249, 0.9);
        border-style: solid;
        border-width: 3px;
        border-color: black;
        width: 100%;
        height: 35vh;
        margin-top: 5px;
        margin-left: 20px;
        margin-right: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius:10px 10px 10px 10px;
    }
    .bottom-left {
        background: rgb(234, 242, 249, 0.9);
        width: 800px;
        height: 100%;
        margin: 0px;
        padding: 0px;
        border-radius:10px 10px 10px 10px;
    }
    .train-aside {
        text-align: center;
        height: 35vh;
        border-right-width: 3px;
        border-right-style: solid;
        border-right-color: black;
        border-radius:10px 0px 0px 10px;
    }
    .train-item {
        height: 40px;
        font-size: 17px;
    }
    .buttons {
        width: 100%;
        height: 35vh;
        overflow-y: auto;
    }
    .bottom-right {
        background: rgb(234, 242, 249, 0.9);
        border-left-style: solid;
        border-left-width: 3px;
        border-left-color: black;
        width: 500px;
        height: 100%;
        border-radius:0px 10px 10px 0px; /* 左上角，右上角，右下角，左下角 */
    }
</style>