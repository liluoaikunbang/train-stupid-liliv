<template>
    <div class="button-main">
        <el-collapse accordion>
            <h1 class="title">派遣笨璃璃</h1>
            <el-collapse-item title="劳务派遣" name="1">
                <el-space wrap>
                    <el-button type="primary" round v-if="cow_flag" @click="clickCow">奶牛榨乳坊</el-button>
                    <el-button type="info" round disabled v-else>奶牛榨乳坊</el-button>

                    <el-button type="primary" round v-if="pain_flag" @click="clickPain">刑讯实验室</el-button>
                    <el-button type="info" round disabled v-else>刑讯实验室</el-button>

                    <el-button type="primary" round v-if="power_flag" @click="clickPower">潮吹发电厂</el-button>
                    <el-button type="info" round disabled v-else>潮吹发电厂</el-button>

                    <el-button type="primary" round v-if="pet_flag" @click="clickPet">宠物咖啡厅</el-button>
                    <el-button type="info" round disabled v-else>宠物咖啡厅</el-button>

                    <el-button type="primary" round v-if="mermaid_flag" @click="clickMermaid">深海人鱼展</el-button>
                    <el-button type="info" round disabled v-else>深海人鱼展</el-button>

                    <el-button type="primary" round v-if="horse_flag" @click="clickHorse">小马娘车站</el-button>
                    <el-button type="info" round disabled v-else>小马娘车站</el-button>

                    <el-button type="primary" round v-if="sm_flag" @click="clickSM">绳摄工作室</el-button>
                    <el-button type="info" round disabled v-else>绳摄工作室</el-button>
                </el-space>
            </el-collapse-item>
            <el-collapse-item title="毕业出售" name="2">
                <el-space wrap>
                    <el-button type="primary" round v-if="overall_flag" @click="clickSale">学园拍卖场</el-button>
                    <el-button type="info" round disabled v-else>学园拍卖场</el-button>
                </el-space>
            </el-collapse-item>
            <el-collapse-item title="私人收藏" name="3">
                <el-space wrap>
                    <el-button type="primary" round v-if="overall_flag" @click="clickCollect">专属笨女仆</el-button>
                    <el-button type="info" round disabled v-else>专属笨女仆</el-button>
                </el-space>
            </el-collapse-item>
            <el-button class="single-button" type="primary" round v-if="recall_flag" @click="clickRecall">召回笨璃璃</el-button>
            <el-button class="single-button" type="info" round disabled v-else>召回笨璃璃</el-button>
        </el-collapse>
    </div>
</template>
<script>
    import { reactive, ref, toRefs, watch } from 'vue';
    import { useStore } from 'vuex'
    import { addLog } from '../LogArea/LogUtils'
    import { useRouter } from 'vue-router'
    import { changeLiLisState, getCurrentLiLi } from '../../utils'
    export default {
        name:"modify_buttons",
        setup(){
            const store = useStore()
            const router = useRouter()
            let current_lili = store.state.current_lili

            const flags = reactive({ // 定义按钮状态
                overall_flag:false, // 总flag，用于不需要单独flag的按钮，根据当前是否有选中的笨璃璃进行判断
                cow_flag:false, // 奶牛榨乳坊
                pain_flag:false, // 刑讯实验室
                power_flag:false, // 潮吹发电厂
                pet_flag:false, // 宠物咖啡厅
                mermaid_flag:false, // 深海人鱼展
                horse_flag:false, // 小马娘车站
                sm_flag:false, // 绳摄工作室
                recall_flag:false, // 召回笨璃璃
            })

            const handleFlags=()=>{
                if(current_lili.whereabouts.state == '未派遣'){
                    flags.overall_flag = true
                    flags.cow_flag = current_lili.specialty.includes('奶牛体质')
                    flags.pain_flag = current_lili.specialty.includes('恋痛体质')
                    flags.power_flag = current_lili.specialty.includes('涩涩先锋')
                    flags.pet_flag = current_lili.specialty.includes('可爱萌宠')
                    flags.mermaid_flag = current_lili.specialty.includes('性感人鱼')
                    flags.horse_flag = current_lili.specialty.includes('成熟马奴')
                    flags.sm_flag = current_lili.specialty.includes('资深绳模')
                }
                else{
                    flags.recall_flag = true
                }
            }

            // 初始化flags
            if(store.state.current_id != null){
                handleFlags()
            }

            const handleButtons=()=>{
                store.commit('changeCurrentId', null)
                // 这里不对全局变量的current_lili进行替换，方便ending页面读取派遣的笨璃璃的信息，直到exist页面重新给当前笨璃璃赋值。
                router.push('/ending') // 跳转到ending页面
            }

            // 劳务派遣类
            const handleDispatch=()=>{ // 劳务派遣按钮的通用操作
                // 因为此页面会将current_id删除，路由守卫不会存储笨璃璃的改变，需要手动将改变的笨璃璃信息存入全局变量
                changeLiLisState(current_lili.num, current_lili)
                store.commit('changeEndingDisplay', 'dispatch')
                handleButtons()
            }

            const clickCow=()=>{ // 奶牛榨乳坊
                addLog('sale', `${current_lili.num}号笨璃璃${current_lili.name}已被派遣至奶牛榨乳坊`)
                current_lili.whereabouts = {state:'派遣中', place:'奶牛榨乳坊'}
                handleDispatch()
            }

            const clickPain=()=>{ // 刑讯实验室
                addLog('sale', `${current_lili.num}号笨璃璃${current_lili.name}已被派遣至刑讯实验室`)
                current_lili.whereabouts = {state:'派遣中', place:'刑讯实验室'}
                handleDispatch()
            }

            const clickPower=()=>{ // 潮吹发电厂
                addLog('sale', `${current_lili.num}号笨璃璃${current_lili.name}已被派遣至潮吹发电厂`)
                current_lili.whereabouts = {state:'派遣中', place:'潮吹发电厂'}
                handleDispatch()
            }

            const clickPet=()=>{ // 宠物咖啡厅
                addLog('sale', `${current_lili.num}号笨璃璃${current_lili.name}已被派遣至宠物咖啡厅`)
                current_lili.whereabouts = {state:'派遣中', place:'宠物咖啡厅'}
                handleDispatch()
            }

            const clickMermaid=()=>{ // 深海人鱼展
                addLog('sale', `${current_lili.num}号笨璃璃${current_lili.name}已被派遣至深海人鱼展`)
                current_lili.whereabouts = {state:'派遣中', place:'深海人鱼展'}
                handleDispatch()
            }
            
            const clickHorse=()=>{ // 小马娘车站
                addLog('sale', `${current_lili.num}号笨璃璃${current_lili.name}已被派遣至小马娘车站`)
                current_lili.whereabouts = {state:'派遣中', place:'小马娘车站'}
                handleDispatch()
            }

            const clickSM=()=>{ // 绳摄工作室
                addLog('sale', `${current_lili.num}号笨璃璃${current_lili.name}已被派遣至绳摄工作室`)
                current_lili.whereabouts = {state:'派遣中', place:'绳摄工作室'}
                handleDispatch()
            }

            // 毕业出售类
            const clickSale=()=>{ // 学园拍卖场
                current_lili.whereabouts = {state:'派遣中', place:'学园拍卖场'}
                // 从全局笨璃璃中删除该笨璃璃
                let lilis = store.state.lilis
                lilis.splice(getCurrentLiLi(lilis, current_lili.num), 1)
                store.commit('changeLiLis', lilis)
                // 换回球币，为500+特长数*500
                const add_money = 50+current_lili.specialty.length*50
                store.commit('addMoney', add_money)
                addLog('sale', `${current_lili.num}号笨璃璃${current_lili.name}已在学院拍卖场被拍卖，获得${add_money}球币`)
                store.commit('changeEndingDisplay', 'sale')
                handleButtons()
            }

            // 私人收藏类
            const clickCollect=()=>{
                addLog('sale', `${current_lili.num}号笨璃璃${current_lili.name}已加入私人收藏：专属笨女仆`)
                current_lili.whereabouts = {state:'已收藏', place:'专属笨女仆'}
                changeLiLisState(current_lili.num, current_lili)
                store.commit('changeEndingDisplay', 'collect')
                handleButtons()
            }

            // 召回笨璃璃
            const clickRecall=()=>{
                addLog('sale', `${current_lili.num}号笨璃璃${current_lili.name}已召回`)
                current_lili.whereabouts = {state:'未派遣', place:'宿舍'}
                store.commit('changeCurrentLiLi', current_lili)
                handleFlags()
            }
            
            return {
                ...toRefs(flags),
                clickCow,
                clickPain,
                clickPower,
                clickPet,
                clickMermaid,
                clickHorse,
                clickSM,
                clickSale,
                clickCollect,
                clickRecall,
             }
        }
    }
</script>
<style scoped>
    .button-main {
        background: rgb(234, 242, 249, 0.9);
        border-style: solid;
        border-width: 3px;
        border-color: black;
        width: 100%;
        height: 100%;
        overflow: auto;
        border-radius:10px 10px 10px 10px;
    }
    .title {
        text-align: center;
        font-size: 20px;
    }
    .button-group {
        margin-left: 10px;
        margin-right: 10px;
    }
    /* .el-collapse需要深度选择器来覆盖样式 */
    :deep(.el-collapse) {
        box-sizing: border-box;
        border: none;
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
        border: none;
    }
    .button-title {
        text-align: center;
        font-size: large;
        font-weight: bold;
    }
    .single-button, .el-space{
        margin-top: 5px;
        margin-left: 20px;
    }
</style>