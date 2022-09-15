<template>
    <el-collapse accordion>
        <el-collapse-item title="其他调教" name="1">
            <el-space wrap>
                <el-button type="primary" round v-if="exposure_flag" @click="clickExposure">拘束露出</el-button>
                <el-button type="info" round v-else disabled>拘束露出</el-button>

                <el-button type="primary" round v-if="disguise_flag" @click="clickDisguise">伪装拘束</el-button>
                <el-button type="info" round v-else disabled>伪装拘束</el-button>

                <el-button type="primary" round v-if="walk_flag" @click="clickWalk">步行训练</el-button>
                <el-button type="info" round v-else disabled>步行训练</el-button>

                <el-button type="primary" round v-if="swim_flag" @click="clickSwim">游泳训练</el-button>
                <el-button type="info" round v-else disabled>游泳训练</el-button>
            </el-space>
        </el-collapse-item>
        <el-collapse-item title="拘束放置" name="2">
            <el-space wrap>
                <el-button type="primary" round v-if="place_common_flag" @click="clickPlaceCommon">普通拘束放置</el-button>
                <el-button type="info" round v-else disabled>普通拘束放置</el-button>

                <el-button type="primary" round v-if="place_sensory_flag" @click="clickPlaceSensory">感官剥夺放置</el-button>
                <el-button type="info" round v-else disabled>感官剥夺放置</el-button>
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
        name:"outdoor_train_buttons",
        setup(){
            const store = useStore()
            let current_lili = store.state.current_lili
            const name = store.state.name

            const flags = reactive({ // 定义按钮状态
                exposure_flag:false, // 拘束露出
                disguise_flag:false, // 伪装拘束
                walk_flag:false, // 步行训练
                swim_flag:false, // 游泳训练
                // 拘束放置类调教
                place_common_flag:false, // 普通拘束放置
                place_sensory_flag:false, // 感官封闭放置
            })

            // 改变按钮状态
            const handleFlags=()=>{
                flags.exposure_flag = judgeFlag({current_lili:current_lili, bondage_arm:[1, Infinity]})
                flags.disguise_flag = judgeFlag({current_lili:current_lili, bondage_arm:[1, Infinity]})
                flags.walk_flag = judgeFlag({current_lili:current_lili, pose_foot:['踮脚']})
                flags.swim_flag = judgeFlag({current_lili:current_lili, need_state:['人鱼']})
                flags.place_common_flag = judgeFlag({current_lili:current_lili, bondage_ear:[0, 0], bondage_eye:[0, 0], bondage_mouth:[0, 0],
                    bondage_nose:[0, 0], bondage_arm:[10, Infinity], bondage_finger:[10, Infinity], bondage_foot:[10, Infinity], 
                    bondage_lap:[10, Infinity], bondage_shins:[10, Infinity], bondage_toe:[10, Infinity]})
                flags.place_sensory_flag = judgeFlag({current_lili:current_lili, bondage_ear:[10, 0], bondage_eye:[10, 0], bondage_mouth:[10, 0],
                    bondage_nose:[1, 0], bondage_arm:[10, Infinity], bondage_finger:[10, Infinity], bondage_foot:[10, Infinity], 
                    bondage_lap:[10, Infinity], bondage_shins:[10, Infinity], bondage_toe:[10, Infinity]})
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

            const clickExposure=()=>{ // 拘束露出
                store.commit('addLog', `${name}将${current_lili.name}捆绑好后强行牵到了外面，让${current_lili.name}带着满身拘束暴露在人群中。\n`)
                store.commit('addHour', 1)
                current_lili = changeAttributes({input_lili:current_lili, servility:10, favorability:-5})
                handleButtons()
            }

            const clickDisguise=()=>{ // 伪装拘束
                store.commit('addLog', `${name}将${current_lili.name}捆绑好后强行牵到了外面，但在她身上披了一件衣服，挡住了全身的拘束。\n`)
                store.commit('addHour', 1)
                current_lili = changeAttributes({input_lili:current_lili, servility:5, favorability:5})
                handleButtons()
            }

            const clickWalk=()=>{ // 步行训练
                store.commit('addLog', `${name}将${current_lili.name}捆绑好后牵到了院子里快步走了几圈。\n`)
                store.commit('addHour', 1)
                current_lili = changeAttributes({input_lili:current_lili, sen_foot:-1, manners_lady:2})
                handleButtons()
            }

            const clickSwim=()=>{ // 游泳训练
                store.commit('addLog', `${name}将${current_lili.name}捆绑好后牵到了后院游泳池中。\n`)
                store.commit('addMinute', 40)
                current_lili = changeAttributes({input_lili:current_lili, manners_mermaid:2, manners_lady:2})
                handleButtons()
            }

            const clickPlaceCommon=()=>{ // 普通拘束放置
                store.commit('addLog', `${name}将${current_lili.name}捆绑完全后放置在院子中。\n`)
                store.commit('addHour', 1)
                current_lili = changeAttributes({input_lili:current_lili, servility:10, favorability:-5})
                handleButtons()
            }

            const clickPlaceSensory=()=>{ // 感官封闭放置
                store.commit('addLog', `${name}将${current_lili.name}捆绑完全感官封闭后放置在院子中。\n`)
                store.commit('addHour', 1)
                current_lili = changeAttributes({input_lili:current_lili, servility:15, favorability:-10})
                handleButtons()
            }
            
            return {
                ...toRefs(flags),
                clickExposure,
                clickDisguise,
                clickWalk,
                clickSwim,
                clickPlaceCommon,
                clickPlaceSensory,
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