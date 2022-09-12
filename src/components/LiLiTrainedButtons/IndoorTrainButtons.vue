<template>
    <el-collapse accordion>
        <el-collapse-item title="抚摸类调教" name="1">
            <el-space wrap>
                <el-button type="primary" v-if="torch_head_flag" round @click="clickTorchHead">摸头</el-button>
                <el-button type="info" v-else round disabled>摸头</el-button>

                <el-button type="primary" v-if="torch_breast_flag" round>摸胸</el-button>
                <el-button type="info" v-else round disabled>摸胸</el-button>

                <el-button type="primary" v-if="torch_vagina_flag" round>摸下体</el-button>
                <el-button type="info" v-else round disabled>摸下体</el-button>

                <el-button type="primary" v-if="torch_ear_flag" round>耳尖吹气</el-button>
                <el-button type="info" v-else round disabled>耳尖吹气</el-button>
            </el-space>
        </el-collapse-item>
        <el-collapse-item title="鞭打类调教" name="2">
            <el-space wrap>
                <el-button type="primary" v-if="whip_butt_flag" round>打屁股</el-button>
                <el-button type="info" v-else round disabled>打屁股</el-button>

                <el-button type="primary" v-if="whip_breast_flag" round>打胸胸</el-button>
                <el-button type="info" v-else round disabled>打胸胸</el-button>

                <el-button type="primary" v-if="whip_hand_flag" round>打手心</el-button>
                <el-button type="info" v-else round disabled>打手心</el-button>

                <el-button type="primary" v-if="whip_foot_flag" round>打脚心</el-button>
                <el-button type="info" v-else round disabled>打脚心</el-button>

                <el-button type="primary" v-if="whip_vagina_flag" round>打下体</el-button>
                <el-button type="info" v-else round disabled>打下体</el-button>
            </el-space>
        </el-collapse-item>
        <el-collapse-item title="电击类调教" name="3">
            <el-space wrap>
                <el-button type="primary" v-if="electric_lap_flag" round>电大腿</el-button>
                <el-button type="info" v-else round disabled>电大腿</el-button>

                <el-button type="primary" v-if="electric_foot_flag" round>电脚心</el-button>
                <el-button type="info" v-else round disabled>电脚心</el-button>

                <el-button type="primary" v-if="electric_vagina_flag" round>体内电击</el-button>
                <el-button type="info" v-else round disabled>体内电击</el-button>
            </el-space>
        </el-collapse-item>
        <el-collapse-item title="情趣类调教" name="4">
            <el-space wrap>
                <el-button type="primary" v-if="sex_stop_flag" round>寸止</el-button>
                <el-button type="info" v-else round disabled>寸止</el-button>

                <el-button type="primary" v-if="sex_orgasm_flag" round>强高</el-button>
                <el-button type="info" v-else round disabled>强高</el-button>

                <el-button type="primary" v-if="sex_walk_rope_flag" round>走绳</el-button>
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
                <el-button type="primary" v-if="tk_foot_flag" round>挠脚心</el-button>
                <el-button type="info" v-else round disabled>挠脚心</el-button>

                <el-button type="primary" v-if="tk_toe_flag" round>挠脚趾</el-button>
                <el-button type="info" v-else round disabled>挠脚趾</el-button>

                <el-button type="primary" v-if="tk_armpit_flag" round>挠腋窝</el-button>
                <el-button type="info" v-else round disabled>挠腋窝</el-button>

                <el-button type="primary" v-if="tk_lap_flag" round>挠大腿</el-button>
                <el-button type="info" v-else round disabled>挠大腿</el-button>

                <el-button type="primary" v-if="tk_costal_flag" round>数肋骨</el-button>
                <el-button type="info" v-else round disabled>数肋骨</el-button>
            </el-space>
        </el-collapse-item>
        <el-collapse-item title="气味系调教" name="7">
            <el-space wrap>
                <el-button type="primary" v-if="smell_socks_flag" round>闻袜子</el-button>
                <el-button type="info" v-else round disabled>闻袜子</el-button>

                <el-button type="primary" v-if="smell_panties_flag" round>闻内裤</el-button>
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
            }
            
            const handleTorch=()=>{// 抚摸类调教通用操作
                handleButtons()
            }
            const clickTorchHead=()=>{ // 摸头
                store.commit('addTrainLog', `${name}摸了摸${current_lili.name}的头，${current_lili.name}蹭了蹭主人表示回应。\n`)
                current_lili = changeAttributes({input_lili:current_lili, servility:2, favorability:5})
                if(current_lili.state.includes('捆绑')){
                    current_lili = changeAttributes({input_lili:current_lili, servility:2, favorability:5})
                }
                handleTorch()
            }

            // torch_head_flag:false,
            // torch_breast_flag:false,
            // torch_vagina_flag:false, // 抚摸下体
            // torch_ear_flag:false, // 耳尖吹气
            // // 鞭打类调教
            // whip_butt_flag:false, // 打屁股
            // whip_breast_flag:false,
            // whip_hand_flag:false,
            // whip_foot_flag:false,
            // whip_vagina_flag:false,
            // // 电击类调教
            // electric_lap_flag:false, // 电大腿
            // electric_foot_flag:false,
            // electric_vagina_flag:false, // 体内电击
            // // 情趣类调教
            // sex_stop_flag:false, // 寸止
            // sex_orgasm_flag:false, // 强高
            // sex_walk_rope_flag:false, // 走绳
            // // 灌肠类调教
            // enema_milk_flag:false,
            // enema_irritation_flag:false, // 刺激性液体灌肠
            // // 挠痒类调教
            // tk_foot_flag:false, // 挠脚心
            // tk_toe_flag:false, // 挠脚趾
            // tk_armpit_flag:false, // 挠腋窝
            // tk_lap_flag:false,
            // tk_costal_flag:false, // 数肋骨
            // // 气味类调教
            // smell_socks_flag:false, 
            // smell_panties_flag:false,
            // // 步行训练
            // run_heels_flag:false,
            // run_pet_flag:false,

            return {
                ...toRefs(flags),
                clickTorchHead,
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