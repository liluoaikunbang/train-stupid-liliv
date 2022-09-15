<template>
    <el-collapse accordion>
        <el-collapse-item title="抚摸类调教" name="1">
            <el-space wrap>
                <el-button type="primary" v-if="torch_head_flag" round @click="clickTorchHead">摸头</el-button>
                <el-button type="info" v-else round disabled>摸头</el-button>

                <el-button type="primary" v-if="torch_breast_flag" round @click="clickTorchBreast">摸胸</el-button>
                <el-button type="info" v-else round disabled>摸胸</el-button>

                <el-button type="primary" v-if="torch_vagina_flag" round @click="clickTorchVagina">摸下体</el-button>
                <el-button type="info" v-else round disabled>摸下体</el-button>

                <el-button type="primary" v-if="torch_ear_flag" round @click="clickTorchEar">耳尖吹气</el-button>
                <el-button type="info" v-else round disabled>耳尖吹气</el-button>
            </el-space>
        </el-collapse-item>
        <el-collapse-item title="鞭打类调教" name="2">
            <el-space wrap>
                <el-button type="primary" v-if="whip_butt_flag" round @click="clickWhipButt">打屁股</el-button>
                <el-button type="info" v-else round disabled>打屁股</el-button>

                <el-button type="primary" v-if="whip_breast_flag" round @click="clickWhipBreast">打胸胸</el-button>
                <el-button type="info" v-else round disabled>打胸胸</el-button>

                <el-button type="primary" v-if="whip_hand_flag" round @click="clickWhipHand">打手心</el-button>
                <el-button type="info" v-else round disabled>打手心</el-button>

                <el-button type="primary" v-if="whip_foot_flag" round @click="clickWhipFoot">打脚心</el-button>
                <el-button type="info" v-else round disabled>打脚心</el-button>

                <el-button type="primary" v-if="whip_vagina_flag" round @click="clickWhipVagina">打下体</el-button>
                <el-button type="info" v-else round disabled>打下体</el-button>
            </el-space>
        </el-collapse-item>
        <el-collapse-item title="电击类调教" name="3">
            <el-space wrap>
                <el-button type="primary" v-if="electric_lap_flag" round @click="clickElectricLap">电大腿</el-button>
                <el-button type="info" v-else round disabled>电大腿</el-button>

                <el-button type="primary" v-if="electric_foot_flag" round @click="clickElectricFoot">电脚心</el-button>
                <el-button type="info" v-else round disabled>电脚心</el-button>

                <el-button type="primary" v-if="electric_vagina_flag" round @click="clickElectricVagina">体内电击</el-button>
                <el-button type="info" v-else round disabled>体内电击</el-button>
            </el-space>
        </el-collapse-item>
        <el-collapse-item title="情趣类调教" name="4">
            <el-space wrap>
                <el-button type="primary" v-if="sex_stop_flag" round @click="clickSexStop">寸止</el-button>
                <el-button type="info" v-else round disabled>寸止</el-button>

                <el-button type="primary" v-if="sex_orgasm_flag" round @click="clickSexOrgasm">强高</el-button>
                <el-button type="info" v-else round disabled>强高</el-button>

                <el-button type="primary" v-if="sex_walk_rope_flag" round @click="clickSexWalkRope">走绳</el-button>
                <el-button type="info" v-else round disabled>走绳</el-button>
            </el-space>
        </el-collapse-item>
        <el-collapse-item title="灌肠类调教" name="5">
            <el-space wrap>
                <el-button type="primary" v-if="enema_milk_flag" round>牛奶灌肠</el-button>
                <el-button type="info" v-else round disabled>牛奶灌肠</el-button>

                <el-button type="primary" v-if="enema_irritation_flag" round>刺激性液体灌肠</el-button>
                <el-button type="info" v-else round disabled>刺激性液体灌肠</el-button>
            </el-space>
        </el-collapse-item>
        <el-collapse-item title="挠痒类调教" name="6">
            <el-space wrap>
                <el-button type="primary" v-if="tk_foot_flag" round @click="clickTkFoot">挠脚心</el-button>
                <el-button type="info" v-else round disabled>挠脚心</el-button>

                <el-button type="primary" v-if="tk_toe_flag" round>挠脚趾</el-button>
                <el-button type="info" v-else round disabled>挠脚趾</el-button>

                <el-button type="primary" v-if="tk_armpit_flag" round @click="clickTkArmpit">挠腋窝</el-button>
                <el-button type="info" v-else round disabled>挠腋窝</el-button>

                <el-button type="primary" v-if="tk_lap_flag" round @click="clickTkLap">挠大腿</el-button>
                <el-button type="info" v-else round disabled>挠大腿</el-button>

                <el-button type="primary" v-if="tk_costal_flag" round @click="clickTkCostal">数肋骨</el-button>
                <el-button type="info" v-else round disabled>数肋骨</el-button>
            </el-space>
        </el-collapse-item>
        <el-collapse-item title="气味系调教" name="7">
            <el-space wrap>
                <el-button type="primary" v-if="smell_socks_flag" round @click="clickSmellSocks">闻袜子</el-button>
                <el-button type="info" v-else round disabled>闻袜子</el-button>

                <el-button type="primary" v-if="smell_panties_flag" round @click="clickSmellPanties">闻内裤</el-button>
                <el-button type="info" v-else round disabled>闻内裤</el-button>
            </el-space>
        </el-collapse-item>
        <el-collapse-item title="步行训练" name="8">
            <el-space wrap>
                <el-button type="primary" v-if="run_heels_flag" round>高跟鞋跑步</el-button>
                <el-button type="info" v-else round disabled>高跟鞋跑步</el-button>

                <el-button type="primary" v-if="run_pet_flag" round>宠物化跑步</el-button>
                <el-button type="info" v-else round disabled>宠物化跑步</el-button>
            </el-space>
        </el-collapse-item>
    </el-collapse>
</template>
<script>
    import { reactive, ref, toRefs } from 'vue';
    import { useStore } from 'vuex'
    import { judgeFlag, changeAttributes } from '../Attributes/Attributes'
    import { handleInstantEvents } from '../../views/Events'
    export default {
        name:"indoor_train_buttons",
        setup(){
            const store = useStore()
            let current_lili = store.state.current_lili
            const name = store.state.name

            const flags = reactive({ // 定义按钮状态
                // 抚摸类调教
                torch_head_flag:false,
                torch_breast_flag:false,
                torch_vagina_flag:false, // 抚摸下体
                torch_ear_flag:false, // 耳尖吹气
                // 鞭打类调教
                whip_butt_flag:false, // 打屁股
                whip_breast_flag:false,
                whip_hand_flag:false,
                whip_foot_flag:false,
                whip_vagina_flag:false,
                // 电击类调教
                electric_lap_flag:false, // 电大腿
                electric_foot_flag:false,
                electric_vagina_flag:false, // 体内电击
                // 情趣类调教
                sex_stop_flag:false, // 寸止
                sex_orgasm_flag:false, // 强高
                sex_walk_rope_flag:false, // 走绳
                // 灌肠类调教
                enema_milk_flag:false,
                enema_irritation_flag:false, // 刺激性液体灌肠
                // 挠痒类调教
                tk_foot_flag:false, // 挠脚心
                tk_toe_flag:false, // 挠脚趾
                tk_armpit_flag:false, // 挠腋窝
                tk_lap_flag:false,
                tk_costal_flag:false, // 数肋骨
                // 气味类调教
                smell_socks_flag:false, 
                smell_panties_flag:false,
                // 步行训练
                run_heels_flag:false,
                run_pet_flag:false,
            })

            // 改变按钮状态
            const handleFlags=()=>{
                // 抚摸类调教
                flags.torch_head_flag = true
                flags.torch_breast_flag = judgeFlag({current_lili:current_lili, pose_waist:['自由', '竖直', '弯腰', '后仰']})
                flags.torch_vagina_flag = true
                flags.torch_ear_flag = judgeFlag({current_lili:current_lili, bondage_ear:[0, 0]})
                // 鞭打类调教
                flags.whip_butt_flag = true
                flags.whip_breast_flag = judgeFlag({current_lili:current_lili, pose_waist:['自由', '竖直', '弯腰', '后仰']})
                flags.whip_hand_flag = judgeFlag({current_lili:current_lili, pose_finger:['自由', '伸展'], bondage_arm:[6, Infinity]})
                flags.whip_foot_flag = judgeFlag({current_lili:current_lili, bondage_arm:[10, Infinity]})
                flags.whip_vagina_flag = judgeFlag({current_lili:current_lili, pose_leg:['盘腿', '折叠', '交叉', '伸展'], bondage_arm:[1, Infinity]})
                // 电击类调教
                flags.electric_lap_flag = true
                flags.electric_foot_flag = true
                flags.electric_vagina_flag = judgeFlag({current_lili:current_lili, bondage_arm:[5, Infinity], bondage_shins:[5, Infinity]})
                // 情趣类调教
                flags.sex_stop_flag = judgeFlag({current_lili:current_lili, bondage_arm:[10, Infinity], bondage_shins:[5, Infinity]})
                flags.sex_orgasm_flag = judgeFlag({current_lili:current_lili, bondage_arm:[5, Infinity]})
                flags.sex_walk_rope_flag = judgeFlag({current_lili:current_lili, bondage_arm:[10, Infinity], bondage_shins:[0, 10], bondage_foot:[0, 10], bondage_toe:[0, 10], pose_leg:['自由', '并腿']})
                // 灌肠类调教  需要灌肠道具，暂时不开放
                flags.enema_milk_flag = false,
                flags.enema_irritation_flag = false,
                // 挠痒类调教
                flags.tk_foot_flag = judgeFlag({current_lili:current_lili, bondage_arm:[1, Infinity], bondage_shins:[1, Infinity]})
                flags.tk_toe_flag = false // 需要脚趾挠痒器具
                flags.tk_armpit_flag = judgeFlag({current_lili:current_lili, bondage_arm:[10, Infinity], bondage_shins:[1, Infinity]})
                flags.tk_lap_flag = judgeFlag({current_lili:current_lili, bondage_shins:[1, Infinity]})
                flags.tk_costal_flag = judgeFlag({current_lili:current_lili, bondage_shins:[10, Infinity], bondage_shins:[1, Infinity]})
                // 气味类调教
                flags.smell_socks_flag = true
                flags.smell_panties_flag = true
                // 步行训练  需要跑步机道具，暂时不开放
                flags.run_heels_flag = false
                flags.run_pet_flag = false
            }

            // 初始化数据与状态
            if(store.state.current_id != null){
                handleFlags()
            }
            // 每个按钮执行后的通用操作
            const handleButtons=()=>{
                handleFlags()
                store.commit('changeCurrentLiLi', current_lili)
                handleInstantEvents()
            }
            
            // 抚摸类调教
            const handleTorch=()=>{// 抚摸类调教通用操作
                handleButtons()
            }

            const clickTorchHead=()=>{ // 摸头
                store.commit('addLog', `${name}摸了摸${current_lili.name}的头，${current_lili.name}蹭了蹭主人表示回应。\n`)
                store.commit('addMinute', 2)
                current_lili = changeAttributes({input_lili:current_lili, servility:2, favorability:5})
                if(current_lili.state.includes('捆绑')){
                    current_lili = changeAttributes({input_lili:current_lili, servility:2, favorability:5})
                }
                handleTorch()
            }

            const clickTorchBreast=()=>{ // 摸胸
                store.commit('addLog', `${name}摸了摸${current_lili.name}的胸胸，${current_lili.name}有些害羞地躲开了。\n`)
                store.commit('addMinute', 5)
                current_lili = changeAttributes({input_lili:current_lili, delete_state:['胀奶'], servility:3, favorability:5})
                if(current_lili.state.includes('捆绑')){
                    current_lili = changeAttributes({input_lili:current_lili, servility:3, favorability:5})
                }
                if(current_lili.state.includes('泌乳')){
                    current_lili = changeAttributes({input_lili:current_lili, milk:1})
                }
                handleTorch()
            }

            const clickTorchVagina=()=>{ // 摸下体
                store.commit('addLog', `${name}摸了摸${current_lili.name}的下面，${current_lili.name}的性欲增加了。\n`)
                store.commit('addMinute', 10)
                current_lili = changeAttributes({input_lili:current_lili, servility:5, favorability:5, lust:5})
                if(current_lili.state.includes('捆绑')){
                    current_lili = changeAttributes({input_lili:current_lili, servility:5, favorability:5, lust:5})
                }
                handleTorch()
            }

            const clickTorchEar=()=>{ // 耳尖吹气
                store.commit('addLog', `${name}在${current_lili.name}的耳边轻轻吹气，${current_lili.name}的耳尖很快变红了。\n`)
                store.commit('addMinute', 2)
                current_lili = changeAttributes({input_lili:current_lili, lust:5})
                if(current_lili.state.includes('捆绑')){
                    current_lili = changeAttributes({input_lili:current_lili, lust:5})
                }
                handleTorch()
            }

            // 鞭打类调教
            const handleWhip=()=>{ // 鞭打类调教通用操作
                if(current_lili.state.includes('发情')){
                    current_lili = changeAttributes({input_lili:current_lili, pain_love:1})
                }
                handleButtons()
            }

            const clickWhipButt=()=>{ // 打屁股
                store.commit('addLog', `${name}抽打了一番${current_lili.name}，${current_lili.name}的小屁屁很快变红。\n`)
                store.commit('addMinute', 10)
                current_lili = changeAttributes({input_lili:current_lili, servility:5, favorability:-5, lust:-5})
                handleWhip()
            }

            const clickWhipBreast=()=>{ // 打胸胸
                store.commit('addLog', `${name}抽打了一番${current_lili.name}的胸胸，${current_lili.name}吃痛躲开。\n`)
                store.commit('addMinute', 10)
                current_lili = changeAttributes({input_lili:current_lili, servility:5, favorability:-5, lust:-10})
                handleWhip()
            }

            const clickWhipHand=()=>{ // 打手心 
                store.commit('addLog', `${name}抽打了一番${current_lili.name}的手心，${current_lili.name}缩回了手。\n`)
                store.commit('addMinute', 10)
                current_lili = changeAttributes({input_lili:current_lili, servility:3, favorability:-3, lust:-5})
                handleWhip()
            }

            const clickWhipFoot=()=>{ // 打脚心
                store.commit('addLog', `${name}抽打了一番${current_lili.name}的脚心，${current_lili.name}痛呼出声。\n`)
                store.commit('addMinute', 10)
                current_lili = changeAttributes({input_lili:current_lili, servility:5, favorability:-5, lust:-5})
                handleWhip()
            }

            const clickWhipVagina=()=>{ // 打下体
                store.commit('addLog', `${name}抽打了一番${current_lili.name}的下体，${current_lili.name}的性欲大幅度下降了。\n`)
                store.commit('addMinute', 5)
                current_lili = changeAttributes({input_lili:current_lili, servility:5, favorability:-10, lust:-20})
                handleWhip()
            }

            // 电击类调教
            const handleElectric=()=>{ // 电击类调教通用操作
                if(current_lili.state.includes('发情')){
                    current_lili = changeAttributes({input_lili:current_lili, pain_love:2})
                }
                handleButtons()
            }
            
            const clickElectricLap=()=>{ // 电大腿
                store.commit('addLog', `${name}将电击贴片贴在${current_lili.name}的大腿，并打开了电击器。\n`)
                store.commit('addMinute', 10)
                current_lili = changeAttributes({input_lili:current_lili, servility:5, favorability:-5, lust:-5})
                handleElectric()
            }

            const clickElectricFoot=()=>{ // 电脚心
                store.commit('addLog', `${name}将电击贴片贴在${current_lili.name}的脚心，并打开了电击器。\n`)
                store.commit('addMinute', 10)
                current_lili = changeAttributes({input_lili:current_lili, servility:5, favorability:-5, lust:-5})
                handleElectric()
            }

            const clickElectricVagina=()=>{ // 体内电击
                store.commit('addLog', `${name}将电击棒插入了${current_lili.name}的下体，并打开了电击器。\n`)
                store.commit('addMinute', 5)
                current_lili = changeAttributes({input_lili:current_lili, servility:-10, favorability:-20, lust:-50})
                handleElectric()
            }

            // 情趣类调教
            const handleSex=()=>{ // 情趣类调教通用操作
                handleButtons()
            }

            const clickSexStop=()=>{ // 寸止
                store.commit('addLog', `${name}将震动棒贴在${current_lili.name}下体，并在${current_lili.name}即将高潮时移开了震动棒。\n`)
                store.commit('addMinute', 30)
                current_lili = changeAttributes({input_lili:current_lili, servility:5, favorability:-5, lust:20})
                handleSex()
            }

            const clickSexOrgasm=()=>{ // 强高
                store.commit('addLog', `${name}将震动棒贴在${current_lili.name}下体，${current_lili.name}很快达到了高潮。\n`)
                store.commit('addMinute', 30)
                current_lili = changeAttributes({input_lili:current_lili, servility:10, favorability:10, lust:-100})
                handleSex()
            }

            const clickSexWalkRope=()=>{ // 走绳
                store.commit('addLog', `${name}将${current_lili.name}固定在一根布满绳结的粗麻绳上，并强迫${current_lili.name}来回走动。\n`)
                store.commit('addMinute', 60)
                current_lili = changeAttributes({input_lili:current_lili, servility:10, lust:10})
                handleSex()
            }

            // 灌肠类调教  需要灌肠道具，暂时不开放
            // enema_milk_flag:false,
            // enema_irritation_flag:false, // 刺激性液体灌肠

            // 挠痒类调教
            const handleTk=()=>{ // 挠痒类调教通用操作
                handleButtons()
            }

            const clickTkFoot=()=>{ // 挠脚心
                store.commit('addLog', `${name}挠了挠${current_lili.name}的脚心，${current_lili.name}发出银铃般的笑声。\n`)
                store.commit('addMinute', 20)
                current_lili = changeAttributes({input_lili:current_lili, servility:5})
                handleTk()
            }

            // 挠脚趾，需要道具，暂时不开放

            const clickTkArmpit=()=>{ // 挠腋窝
                store.commit('addLog', `${name}挠了挠${current_lili.name}的腋窝，${current_lili.name}发出银铃般的笑声。\n`)
                store.commit('addMinute', 20)
                current_lili = changeAttributes({input_lili:current_lili, servility:5})
                handleTk()
            }

            const clickTkLap=()=>{ // 挠大腿
                store.commit('addLog', `${name}挠了挠${current_lili.name}的大腿，${current_lili.name}发出银铃般的笑声。\n`)
                store.commit('addMinute', 20)
                current_lili = changeAttributes({input_lili:current_lili, servility:5})
                handleTk()
            }

            const clickTkCostal=()=>{ // 数肋骨
                store.commit('addLog', `${name}戳了戳${current_lili.name}的肋下，${current_lili.name}发出银铃般的笑声。\n`)
                store.commit('addMinute', 20)
                current_lili = changeAttributes({input_lili:current_lili, servility:5})
                handleTk()
            }

            // 气味系调教
            const handleSmell=()=>{ // 气味系调教通用操作
                if(current_lili.state.includes('宠物')){
                    current_lili = changeAttributes({input_lili:current_lili, manners_pet:2})
                }
                handleButtons()
            }

            const clickSmellSocks=()=>{ // 闻袜子
                store.commit('addLog', `${name}将臭袜子固定在${current_lili.name}的鼻尖，强迫${current_lili.name}呼吸酸臭的气味。\n`)
                store.commit('addMinute', 20)
                current_lili = changeAttributes({input_lili:current_lili, servility:10})
                handleSmell()
            }

            const clickSmellPanties=()=>{ // 闻内裤
                store.commit('addLog', `${name}将胖次固定在${current_lili.name}的鼻尖，强迫${current_lili.name}呼吸酸臭的气味。\n`)
                store.commit('addMinute', 10)
                current_lili = changeAttributes({input_lili:current_lili, servility:10})
                handleSmell()
            }

            // 步行训练缺乏道具，暂时不开放。
            // run_heels_flag:false,
            // run_pet_flag:false,

            return {
                ...toRefs(flags),
                clickTorchHead,
                clickTorchBreast,
                clickTorchVagina,
                clickTorchEar,
                clickWhipButt,
                clickWhipBreast,
                clickWhipHand,
                clickWhipFoot,
                clickWhipVagina,
                clickElectricLap,
                clickElectricFoot,
                clickElectricVagina,
                clickSexStop,
                clickSexOrgasm,
                clickSexWalkRope,
                clickTkFoot,
                clickTkArmpit,
                clickTkLap,
                clickTkCostal,
                clickSmellSocks,
                clickSmellPanties,
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