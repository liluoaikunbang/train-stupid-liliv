<template>
    <el-collapse accordion>
        <el-collapse-item title="头部拘束" name="1">
            <el-space wrap>
                <el-button type="primary" v-if="blindfold_flag==1" round @click="clickBlindfold" @mousemove="moveBlindfold">眼罩</el-button>
                <el-button type="success" v-if="blindfold_flag==2" round @click="untieBlindfold" @mousemove="moveBlindfold">解缚</el-button>
                <el-button type="info" v-if="!blindfold_flag" round disabled @mousemove="moveBlindfold">眼罩</el-button>

                <el-button type="primary" v-if="ballgag_flag==1" round @click="clickBallgag" @mousemove="moveBallgag">口球</el-button>
                <el-button type="success" v-if="ballgag_flag==2" round @click="untieBallgag" @mousemove="moveBallgag">解缚</el-button>
                <el-button type="info" v-if="!ballgag_flag" round disabled @mousemove="moveBallgag">口球</el-button>

                <el-button type="primary" v-if="earplug_flag==1" round @click="clickEarplug" @mousemove="moveEarplug">耳塞</el-button>
                <el-button type="success" v-if="earplug_flag==2" round @click="untieEarplug" @mousemove="moveEarplug">解缚</el-button>
                <el-button type="info" v-if="!earplug_flag" round disabled @mousemove="moveEarplug">耳塞</el-button>
            </el-space>
        </el-collapse-item>
        <el-collapse-item title="上身拘束" name="2">
            <el-space wrap>
                <el-button type="primary" v-if="front_hand_binding_flag==1" round @click="clickFrontHandBinding" @mousemove="moveFrontHandBinding">前手缚</el-button>
                <el-button type="success" v-if="front_hand_binding_flag==2" round @click="untieFrontHandBinding" @mousemove="moveFrontHandBinding">解缚</el-button>
                <el-button type="info" v-if="!front_hand_binding_flag" round disabled @mousemove="moveFrontHandBinding">前手缚</el-button>

                <el-button type="primary" v-if="back_hand_binding_flag==1" round @click="clickBackHandBinding">后手缚</el-button>
                <el-button type="success" v-if="back_hand_binding_flag==2" round @click="untieBackHandBinding">解缚</el-button>
                <el-button type="info" v-if="!back_hand_binding_flag" round disabled>后手缚</el-button>

                <el-button type="primary" v-if="box_binding_flag==1" round @click="clickBoxBinding">日式盒缚</el-button>
                <el-button type="success" v-if="box_binding_flag==2" round @click="untieBoxBinding">解缚</el-button>
                <el-button type="info" v-if="!box_binding_flag" round disabled>日式盒缚</el-button>

                <el-button type="primary" v-if="straight_arm_binding_flag==1" round @click="clickStraightArmBinding">欧式直臂</el-button>
                <el-button type="success" v-if="straight_arm_binding_flag==2" round @click="untieStraightArmBinding">解缚</el-button>
                <el-button type="info" v-if="!straight_arm_binding_flag" round disabled>欧式直臂</el-button>

                <el-button type="primary" v-if="back_prayer_binding_flag==1" round @click="clickBackPrayerBinding">后手观音</el-button>
                <el-button type="success" v-if="back_prayer_binding_flag==2" round @click="untieBackPrayerBinding">解缚</el-button>
                <el-button type="info" v-if="!back_prayer_binding_flag" round disabled>后手观音</el-button>

                <el-button type="primary" v-if="tape_wrap_fingers_flag==1" round @click="clickTapeWrapFingers">胶带包手</el-button>
                <el-button type="success" v-if="tape_wrap_fingers_flag==2" round @click="untieTapeWrapFingers">解缚</el-button>
                <el-button type="info" v-if="!tape_wrap_fingers_flag" round disabled>胶带包手</el-button>

                <el-button type="primary" v-if="tortoiseshell_binding_flag==1" round @click="clickTortoiseshellBinding">龟甲缚</el-button>
                <el-button type="success" v-if="tortoiseshell_binding_flag==2" round @click="untieTortoiseshellBinding">解缚</el-button>
                <el-button type="info" v-if="!tortoiseshell_binding_flag" round disabled>龟甲缚</el-button>
            </el-space>
        </el-collapse-item>
        <el-collapse-item title="下身拘束" name="3">
            <el-space wrap>
                <el-button type="primary" v-if="leg_binding_flag==1" round @click="clickLegBinding">并腿缚</el-button>
                <el-button type="success" v-if="leg_binding_flag==2" round @click="untieLegBinding">解缚</el-button>
                <el-button type="info" v-if="!leg_binding_flag" round disabled>并腿缚</el-button>

                <el-button type="primary" v-if="open_leg_binding_flag==1" round @click="clickOpenLegBinding">M字开腿</el-button>
                <el-button type="success" v-if="open_leg_binding_flag==2" round @click="untieOpenLegBinding">解缚</el-button>
                <el-button type="info" v-if="!open_leg_binding_flag" round disabled>M字开腿</el-button>

                <el-button type="primary" v-if="ball_binding_flag==1" round @click="clickBallBinding">桃缚</el-button>
                <el-button type="success" v-if="ball_binding_flag==2" round @click="untieBallBinding">解缚</el-button>
                <el-button type="info" v-if="!ball_binding_flag" round disabled>桃缚</el-button>

                <el-button type="primary" v-if="strand_rope_flag==1" round @click="clickStrandRope">股绳</el-button>
                <el-button type="success" v-if="strand_rope_flag==2" round @click="untieStrandRope">解缚</el-button>
                <el-button type="info" v-if="!strand_rope_flag" round disabled>股绳</el-button>
            </el-space>
        </el-collapse-item>
        <el-collapse-item title="全身加固" name="4">
            <div class="button-title">其他加固</div>
            <el-space wrap>
                <el-button type="primary" v-if="K9_binding_flag==1" round @click="clickK9Binding">K9宠物化</el-button>
                <el-button type="success" v-if="K9_binding_flag==2" round @click="untieK9Binding">解缚</el-button>
                <el-button type="info" v-if="!K9_binding_flag" round disabled>K9宠物化</el-button>

                <el-button type="primary" v-if="horse_binding_flag==1" round @click="clickHorseBinding">马奴拘束</el-button>
                <el-button type="success" v-if="horse_binding_flag==2" round @click="untieHorseBinding">解缚</el-button>
                <el-button type="info" v-if="!horse_binding_flag" round disabled>马奴拘束</el-button>

                <el-button type="primary" v-if="X_binding_flag==1" round @click="clickXBinding">X字架拘束</el-button>
                <el-button type="success" v-if="X_binding_flag==2" round @click="untieXBinding">解缚</el-button>
                <el-button type="info" v-if="!X_binding_flag" round disabled>X字架拘束</el-button>

                <el-button type="primary" v-if="mermaid_binding_flag==1" round @click="clickMermaidBinding">乳胶人鱼装</el-button>
                <el-button type="success" v-if="mermaid_binding_flag==2" round @click="untieMermaidBinding">解缚</el-button>
                <el-button type="info" v-if="!mermaid_binding_flag" round disabled>乳胶人鱼装</el-button>

                <el-button type="primary" v-if="mummified_head_binding_flag==1" round @click="clickMummifiedHeadBinding">木乃伊拘束（包头）</el-button>
                <el-button type="success" v-if="mummified_head_binding_flag==2" round @click="untieMummifiedHeadBinding">解缚</el-button>
                <el-button type="info" v-if="!mummified_head_binding_flag" round disabled>木乃伊拘束（包头）</el-button>
            </el-space>
            <div class="button-title">木乃伊拘束（不包头）</div>
            <el-space wrap>
                <el-button type="primary" v-if="ligature_mummified_binding_flag==1" round @click="clickLigatureMummifiedBinding">绷带木乃伊</el-button>
                <el-button type="success" v-if="ligature_mummified_binding_flag==2" round @click="untieLigatureMummifiedBinding">解缚</el-button>
                <el-button type="info" v-if="!ligature_mummified_binding_flag" round disabled>绷带木乃伊</el-button>

                <el-button type="primary" v-if="tape_mimmified_binding_flag==1" round @click="clickTapeMimmifiedBinding">胶带木乃伊</el-button>
                <el-button type="success" v-if="tape_mimmified_binding_flag==2" round @click="untieTapeMimmifiedBinding">解缚</el-button>
                <el-button type="info" v-if="!tape_mimmified_binding_flag" round disabled>胶带木乃伊</el-button>
            </el-space>
            <div class="button-title">丝袜全包</div>
            <el-space wrap>
                <el-button type="primary" v-if="one_stockings_flag==1" round @click="clickOneStockings">一层丝袜</el-button>
                <el-button type="success" v-if="one_stockings_flag==2" round @click="untieOneStockings">解缚</el-button>
                <el-button type="info" v-if="!one_stockings_flag" round disabled>一层丝袜</el-button>

                <el-button type="primary" v-if="two_stockings_flag==1" round @click="clickTwoStockings">两层丝袜</el-button>
                <el-button type="success" v-if="two_stockings_flag==2" round @click="untieTwoStockings">解缚</el-button>
                <el-button type="info" v-if="!two_stockings_flag" round disabled>两层丝袜</el-button>

                <el-button type="primary" v-if="three_stockings_flag==1" round @click="clickThreeStockings">三层丝袜</el-button>
                <el-button type="success" v-if="three_stockings_flag==2" round @click="untieThreeStockings">解缚</el-button>
                <el-button type="info" v-if="!three_stockings_flag" round disabled>三层丝袜</el-button>

                <el-button type="primary" v-if="five_stockings_flag==1" round @click="clickFiveStockings">五层丝袜</el-button>
                <el-button type="success" v-if="five_stockings_flag==2" round @click="untieFiveStockings">解缚</el-button>
                <el-button type="info" v-if="!five_stockings_flag" round disabled>五层丝袜</el-button>
            </el-space>
        </el-collapse-item>
        <el-button type="success" v-if="untie_flag" round @click="clickUntieAll">解开所有束缚</el-button>
        <el-button type="info" v-else round disabled>解开所有束缚</el-button>
    </el-collapse>
</template>
<script>
    import { reactive, ref, toRefs } from 'vue';
    import { useStore } from 'vuex'
    import { arrayDelete } from '../../utils'
    import { judgeFlag, changeAttributes } from '../Attributes/Attributes'
    export default {
        name:"bondage_buttons",
        setup(){
            const store = useStore()
            let current_lili = store.state.current_lili
            const name = store.state.name
            let special_button_flags = store.state.special_button_flags
            let special_bondage_flags = special_button_flags.bondage

            const flags = reactive({ // 定义按钮状态
                // 头部拘束
                blindfold_flag:false, // 眼罩
                ballgag_flag:false, // 口球
                earplug_flag:false, // 耳塞
                // 上身拘束
                front_hand_binding_flag:false, // 前手缚
                back_hand_binding_flag:false, // 后手缚
                box_binding_flag:false, // 日式盒缚
                straight_arm_binding_flag:false, // 欧式直臂
                back_prayer_binding_flag:false, // 后手观音缚
                tape_wrap_fingers_flag:false, // 胶带包手
                tortoiseshell_binding_flag:false, // 龟甲缚
                // 下身拘束
                leg_binding_flag:false, // 并腿缚
                open_leg_binding_flag:false,  // M字开腿缚
                ball_binding_flag:false, // 桃缚
                strand_rope_flag:false, // 股绳
                // 全身加固
                K9_binding_flag:false, // K9宠物拘束
                horse_binding_flag:false, // 马奴拘束
                X_binding_flag:false, // X架拘束
                mermaid_binding_flag:false, // 乳胶人鱼套装
                mummified_head_binding_flag:false, // 木乃伊拘束（包头）
                ligature_mummified_binding_flag:false, // 绷带木乃伊（不包头）
                tape_mimmified_binding_flag:false, // 胶带木乃伊（不包头）
                one_stockings_flag:false, // 单层丝袜拘束
                two_stockings_flag:false, // 两层丝袜拘束
                three_stockings_flag:false, // 三层丝袜拘束
                five_stockings_flag:false, // 五层丝袜拘束
                // 解开束缚
                untie_flag:false,
            })

            // 改变按钮状态
            const handleFlags=()=>{
                flags.blindfold_flag = 1
                flags.ballgag_flag = 1
                flags.earplug_flag = 1
                flags.tortoiseshell_binding_flag = 1
                flags.strand_rope_flag = 1
                flags.front_hand_binding_flag = judgeFlag({current_lili:current_lili, flag_true:1, pose_arm:['自由', '前手']})
                flags.back_hand_binding_flag = judgeFlag({current_lili:current_lili, flag_true:1, pose_arm:['自由', '后手']})
                flags.box_binding_flag = judgeFlag({current_lili:current_lili, flag_true:1, pose_arm:['自由', '后手']})
                flags.straight_arm_binding_flag = judgeFlag({current_lili:current_lili, flag_true:1, pose_arm:['自由', '后手']})
                flags.back_prayer_binding_flag = judgeFlag({current_lili:current_lili, flag_true:1, pose_arm:['自由', '后手']})
                flags.tape_wrap_fingers_flag = judgeFlag({current_lili:current_lili, flag_true:1, pose_finger:['自由', '握拳']})
                flags.leg_binding_flag = judgeFlag({current_lili:current_lili, flag_true:1, pose_leg:['自由', '并腿']})
                flags.open_leg_binding_flag = judgeFlag({current_lili:current_lili, flag_true:1, pose_leg:['自由', '折叠']})
                flags.ball_binding_flag = judgeFlag({current_lili:current_lili, flag_true:1, pose_leg:['自由', '盘腿']})
                flags.K9_binding_flag = judgeFlag({current_lili:current_lili, flag_true:1, 
                    pose_arm:['自由', '折叠'], pose_leg:['自由', '折叠']})
                flags.horse_binding_flag = judgeFlag({current_lili:current_lili, flag_true:1, 
                    pose_arm:['后手'], pose_leg:['自由', '并腿'], pose_foot:['踮脚'], pose_waist:['自由', '竖直'],
                    bondage_shins:[0, 9], bondage_foot:[0, 0]})
                flags.X_binding_flag = judgeFlag({current_lili:current_lili, flag_true:1, 
                    pose_arm:['自由', '伸展'], pose_leg:['自由', '伸展'], pose_waist:['自由', '竖直']})
                flags.mermaid_binding_flag = judgeFlag({current_lili:current_lili, flag_true:1, pose_leg:['自由', '并腿']})
                flags.mummified_head_binding_flag = judgeFlag({current_lili:current_lili, flag_true:1, 
                    pose_arm:['自由', '前手'], pose_waist:['自由', '竖直'], pose_leg:['自由', '并腿'], bondage_nose:[0, 0]})
                flags.ligature_mummified_binding_flag = judgeFlag({current_lili:current_lili, flag_true:1, 
                    pose_arm:['自由', '前手'], pose_waist:['自由', '竖直'], pose_leg:['自由', '并腿']})
                flags.tape_mimmified_binding_flag = judgeFlag({current_lili:current_lili, flag_true:1, 
                    pose_arm:['自由', '前手'], pose_waist:['自由', '竖直'], pose_leg:['自由', '并腿']})
                flags.one_stockings_flag = judgeFlag({current_lili:current_lili, flag_true:1, 
                    pose_arm:['自由', '前手', '后手'], pose_waist:['自由', '竖直'], pose_leg:['自由', '并腿'], bondage_nose:[0, 0]})
                flags.two_stockings_flag = judgeFlag({current_lili:current_lili, flag_true:1, 
                    pose_arm:['自由', '前手', '后手'], pose_waist:['自由', '竖直'], pose_leg:['自由', '并腿'], bondage_nose:[0, 0]})
                flags.three_stockings_flag = judgeFlag({current_lili:current_lili, flag_true:1, 
                    pose_arm:['自由', '前手', '后手'], pose_waist:['自由', '竖直'], pose_leg:['自由', '并腿'], bondage_nose:[0, 0]})
                flags.five_stockings_flag = judgeFlag({current_lili:current_lili, flag_true:1, 
                    pose_arm:['自由', '前手', '后手'], pose_waist:['自由', '竖直'], pose_leg:['自由', '并腿'], bondage_nose:[0, 0]})
                flags.untie_flag = 1

                // 处理特殊flags的buttons
                for(let i=0; i<special_bondage_flags.length; i++){
                    flags[special_bondage_flags[i]] = 2
                }
            }

            // 初始化数据与状态
            if(store.state.current_id != null){
                handleFlags()
            }
            // 每个按钮执行后的通用操作
            const handleButtons=()=>{
                handleFlags()
                store.commit('changeCurrentLiLi', current_lili)
                special_button_flags.bondage = special_bondage_flags
                store.commit('changeSpecialButtonFlags', special_button_flags)
            }
            // 捆绑按键的通用操作
            const handleBondage=()=>{
                current_lili = changeAttributes({input_lili:current_lili, servility:5, sub_value:5, add_state:['捆绑']})
                handleButtons()
            }
            // 解缚按键的通用操作
            const handleUntie=()=>{
                // 判断姿势
                if(!current_lili.details.bondage_values.arm){current_lili.details.pose.arm = '自由'}
                if(!current_lili.details.bondage_values.finger){current_lili.details.pose.finger = '自由'}
                if(!current_lili.details.bondage_values.waist){current_lili.details.pose.waist = '自由'}
                if(!current_lili.details.bondage_values.lap&&!current_lili.details.bondage_values.shins){current_lili.details.pose.leg = '自由'}
                if(!current_lili.details.bondage_values.foot&&!current_lili.details.bondage_values.toe){current_lili.details.pose.foot = '自由'}
                // 判断捆绑状态
                if(!current_lili.details.bondage_values.eye&&!current_lili.details.bondage_values.ear&&
                    !current_lili.details.bondage_values.nose&&!current_lili.details.bondage_values.mouth&&
                    !current_lili.details.bondage_values.neck&&!current_lili.details.bondage_values.arm&&
                    !current_lili.details.bondage_values.finger&&!current_lili.details.bondage_values.waist&&
                    !current_lili.details.bondage_values.lap&&!current_lili.details.bondage_values.shins&&
                    !current_lili.details.bondage_values.foot&&!current_lili.details.bondage_values.toe){
                        current_lili = changeAttributes({input_lili:current_lili, delete_state:['捆绑']})
                    }
                handleButtons()
            }
            // 头部拘束按钮
            const moveBlindfold=()=>{ // 介绍眼罩
                store.commit('changeTrainDisplay', 'blindfold')
            }
            const clickBlindfold=()=>{ // 戴上眼罩
                store.commit('addTrainLog', `${name}给${current_lili.name}戴上了眼罩，${current_lili.name}眼前漆黑一片。\n`)
                current_lili = changeAttributes({input_lili:current_lili, bondage_eye:10})
                flags.blindfold_flag = 2
                special_bondage_flags.push('blindfold_flag')
                handleBondage()
            }
            const untieBlindfold=()=>{ // 解开眼罩
                store.commit('addTrainLog', `${name}给${current_lili.name}摘下了眼罩。\n`)
                current_lili = changeAttributes({input_lili:current_lili, bondage_eye:-10})
                flags.blindfold_flag = 1
                special_bondage_flags = arrayDelete(special_bondage_flags, 'blindfold_flag')
                handleUntie()
            }

            const moveBallgag=()=>{ // 介绍口球
                store.commit('changeTrainDisplay', 'ballgag')
            }
            const clickBallgag=()=>{ // 戴上口球
                store.commit('addTrainLog', `${name}给${current_lili.name}戴上了口球，堵住了${current_lili.name}的小嘴。\n`)
                current_lili = changeAttributes({input_lili:current_lili, bondage_mouth:5})
                flags.ballgag_flag = 2
                special_bondage_flags.push('ballgag_flag')
                handleBondage()
            }
            const untieBallgag=()=>{ // 摘下口球
                store.commit('addTrainLog', `${name}给${current_lili.name}摘下了口球。\n`)
                current_lili = changeAttributes({input_lili:current_lili, bondage_mouth:-5})
                flags.ballgag_flag = 1
                special_bondage_flags = arrayDelete(special_bondage_flags, 'ballgag_flag')
                handleUntie()
            }

            const moveEarplug=()=>{ // 查看耳塞
                store.commit('changeTrainDisplay', 'earplug')
            }
            const clickEarplug=()=>{ // 戴上耳塞
                store.commit('addTrainLog', `${name}给${current_lili.name}戴上了耳塞，${current_lili.name}的耳边安静了一些。\n`)
                current_lili = changeAttributes({input_lili:current_lili, bondage_ear:5})
                flags.earplug_flag = 2
                special_bondage_flags.push('earplug_flag')
                handleBondage()
            }
            const untieEarplug=()=>{ // 摘下耳塞
                store.commit('addTrainLog', `${name}给${current_lili.name}摘掉了耳塞。\n`)
                current_lili = changeAttributes({input_lili:current_lili, bondage_ear:-5})
                flags.earplug_flag = 1
                special_bondage_flags = arrayDelete(special_bondage_flags, 'earplug_flag')
                handleUntie()
            }

            // 上身捆绑
            const moveFrontHandBinding=()=>{ // 介绍前手缚
                store.commit('changeTrainDisplay', 'front_hand_binding')
            }
            const clickFrontHandBinding=()=>{ // 捆绑前手缚
                store.commit('addTrainLog', `${name}将${current_lili.name}的双手在身前捆绑。\n`)
                current_lili = changeAttributes({input_lili:current_lili, bondage_arm:3, pose_arm:'前手'})
                flags.front_hand_binding_flag = 2
                special_bondage_flags.push('front_hand_binding_flag')
                handleBondage()
            }
            const untieFrontHandBinding=()=>{ // 解开前手缚
                store.commit('addTrainLog', `${name}给${current_lili.name}解开了双手的束缚。\n`)
                current_lili = changeAttributes({input_lili:current_lili, bondage_arm:-3})
                flags.front_hand_binding_flag = 1
                special_bondage_flags = arrayDelete(special_bondage_flags, 'front_hand_binding_flag')
                handleUntie()
            }

            const clickBackHandBinding=()=>{ // 捆绑后手缚
                store.commit('addTrainLog', `${name}将${current_lili.name}的双手在身后反绑。\n`)
                current_lili = changeAttributes({input_lili:current_lili, bondage_arm:6, pose_arm:'后手'})
                flags.back_hand_binding_flag = 2
                special_bondage_flags.push('back_hand_binding_flag')
                handleBondage()
            }
            const untieBackHandBinding=()=>{ // 解开后手缚
                store.commit('addTrainLog', `${name}给${current_lili.name}解开了双手的束缚。\n`)
                current_lili = changeAttributes({input_lili:current_lili, bondage_arm:-6})
                flags.back_hand_binding_flag = 1
                special_bondage_flags = arrayDelete(special_bondage_flags, 'back_hand_binding_flag')
                handleUntie()
            }

            const clickBoxBinding=()=>{ // 日式盒缚
                store.commit('addTrainLog', `${name}将${current_lili.name}的双手在身后平行反绑，多余的绳索缠绕过胸部上下，将她的胸胸勒得更加丰满。\n`)
                current_lili = changeAttributes({input_lili:current_lili, bondage_arm:10, pose_arm:'后手'})
                flags.box_binding_flag = 2
                special_bondage_flags.push('box_binding_flag')
                handleBondage()
            }
            const untieBoxBinding=()=>{ // 解开日式盒缚
                store.commit('addTrainLog', `${name}给${current_lili.name}解开了双手的束缚。\n`)
                current_lili = changeAttributes({input_lili:current_lili, bondage_arm:-10})
                flags.box_binding_flag = 1
                special_bondage_flags = arrayDelete(special_bondage_flags, 'box_binding_flag')
                handleUntie()
            }

            const clickStraightArmBinding=()=>{ // 欧式直臂
                store.commit('addTrainLog', `${name}将${current_lili.name}的双手反剪，从手腕到大臂均并拢捆紧，让她的双臂无法分开。\n`)
                current_lili = changeAttributes({input_lili:current_lili, bondage_arm:15, pose_arm:'后手'})
                flags.straight_arm_binding_flag = 2
                special_bondage_flags.push('straight_arm_binding_flag')
                handleBondage()
            }
            const untieStraightArmBinding=()=>{ // 解开欧式直臂
                store.commit('addTrainLog', `${name}给${current_lili.name}解开了双手的束缚。\n`)
                current_lili = changeAttributes({input_lili:current_lili, bondage_arm:-15})
                flags.straight_arm_binding_flag = 1
                special_bondage_flags = arrayDelete(special_bondage_flags, 'straight_arm_binding_flag')
                handleUntie()
            }

            const clickBackPrayerBinding=()=>{ // 后手观音
                store.commit('addTrainLog', `${name}将${current_lili.name}的双手在背后吊高，手指向上呈反拜姿势，将手腕到手肘分别捆紧，大小臂也折叠紧缚在一起。\n`)
                current_lili = changeAttributes({input_lili:current_lili, bondage_arm:30, pose_arm:'后手'})
                flags.back_prayer_binding_flag = 2
                special_bondage_flags.push('back_prayer_binding_flag')
                handleBondage()
            }
            const untieBackPrayerBinding=()=>{ // 解开后手观音
                store.commit('addTrainLog', `${name}给${current_lili.name}解开了双手的束缚。\n`)
                current_lili = changeAttributes({input_lili:current_lili, bondage_arm:-30})
                flags.back_prayer_binding_flag = 1
                special_bondage_flags = arrayDelete(special_bondage_flags, 'back_prayer_binding_flag')
                handleUntie()
            }

            const clickTapeWrapFingers=()=>{ // 胶带包手
                store.commit('addTrainLog', `${name}将${current_lili.name}的双手握拳，用胶带包裹成两个圆球。\n`)
                current_lili = changeAttributes({input_lili:current_lili, bondage_finger:10, pose_finger:'握拳'})
                flags.tape_wrap_fingers_flag = 2
                special_bondage_flags.push('tape_wrap_fingers_flag')
                handleBondage()
            }
            const untieTapeWrapFingers=()=>{ // 解开胶带包手
                store.commit('addTrainLog', `${name}给${current_lili.name}解开了手指的束缚。\n`)
                current_lili = changeAttributes({input_lili:current_lili, bondage_finger:-10})
                flags.tape_wrap_fingers_flag = 1
                special_bondage_flags = arrayDelete(special_bondage_flags, 'tape_wrap_fingers_flag')
                handleUntie()
            }

            const clickTortoiseshellBinding=()=>{ // 龟甲缚
                store.commit('addTrainLog', `${name}在${current_lili.name}的身前编织出龟甲状绳衣。\n`)
                // 龟甲缚事件
                flags.tortoiseshell_binding_flag = 2
                special_bondage_flags.push('tortoiseshell_binding_flag')
                handleBondage()
            }
            const untieTortoiseshellBinding=()=>{ // 解开龟甲缚
                store.commit('addTrainLog', `${name}给${current_lili.name}解开了身上的龟甲缚绳衣。\n`)
                // 解开龟甲缚事件
                flags.tortoiseshell_binding_flag = 1
                special_bondage_flags = arrayDelete(special_bondage_flags, 'tortoiseshell_binding_flag')
                handleUntie()
            }

            // 下身拘束
            const clickLegBinding=()=>{ // 并腿缚
                store.commit('addTrainLog', `${name}将${current_lili.name}的双腿并拢捆绑起来。\n`)
                current_lili = changeAttributes({input_lili:current_lili, bondage_lap:10, bondage_shins:10, pose_leg:'并腿'})
                flags.leg_binding_flag = 2
                special_bondage_flags.push('leg_binding_flag')
                handleBondage()
            }
            const untieLegBinding=()=>{ // 解开并腿缚
                store.commit('addTrainLog', `${name}给${current_lili.name}解开了双腿的束缚。\n`)
                current_lili = changeAttributes({input_lili:current_lili, bondage_lap:-10, bondage_shins:-10})
                flags.leg_binding_flag = 1
                special_bondage_flags = arrayDelete(special_bondage_flags, 'leg_binding_flag')
                handleUntie()
            }

            const clickOpenLegBinding=()=>{ // M字开腿缚
                store.commit('addTrainLog', `${name}将${current_lili.name}的双腿分别折叠捆紧。\n`)
                current_lili = changeAttributes({input_lili:current_lili, bondage_lap:10, bondage_shins:10, pose_leg:'折腿'})
                flags.open_leg_binding_flag = 2
                special_bondage_flags.push('open_leg_binding_flag')
                handleBondage()
            }
            const untieOpenLegBinding=()=>{ // 解开M字开腿
                store.commit('addTrainLog', `${name}给${current_lili.name}解开了双腿的束缚。\n`)
                current_lili = changeAttributes({input_lili:current_lili, bondage_lap:-10, bondage_shins:-10})
                flags.open_leg_binding_flag = 1
                special_bondage_flags = arrayDelete(special_bondage_flags, 'open_leg_binding_flag')
                handleUntie()
            }

            const clickBallBinding=()=>{ // 桃缚
                store.commit('addTrainLog', `${name}将${current_lili.name}的双腿分别折叠捆紧后将脚踝交叉捆绑，并连接绳索到脖颈，将${current_lili.name}头部和脚踝逐渐拉近。\n`)
                current_lili = changeAttributes({input_lili:current_lili, bondage_lap:10, bondage_shins:20, bondage_waist:10, pose_leg:'盘腿'})
                flags.ball_binding_flag = 2
                special_bondage_flags.push('ball_binding_flag')
                handleBondage()
            }
            const untieBallBinding=()=>{ // 解开桃缚
                store.commit('addTrainLog', `${name}给${current_lili.name}解开了桃缚。\n`)
                current_lili = changeAttributes({input_lili:current_lili, bondage_lap:-10, bondage_shins:-20, bondage_waist:-10})
                flags.ball_binding_flag = 1
                special_bondage_flags = arrayDelete(special_bondage_flags, 'ball_binding_flag')
                handleUntie()
            }

            const clickStrandRope=()=>{ // 股绳
                store.commit('addTrainLog', `${name}给${current_lili.name}绑上股绳，并在下体敏感位置留下几个大大的绳结。\n`)
                // 股绳事件
                flags.strand_rope_flag = 2
                special_bondage_flags.push('strand_rope_flag')
                handleBondage()
            }
            const untieStrandRope=()=>{ // 解开股绳
                store.commit('addTrainLog', `${name}给${current_lili.name}解开了股绳。\n`)
                // 解开股绳事件
                flags.strand_rope_flag = 1
                special_bondage_flags = arrayDelete(special_bondage_flags, 'strand_rope_flag')
                handleUntie()
            }

            // 全身加固
            const clickK9Binding=()=>{ // K9拘束衣
                store.commit('addTrainLog', `${name}给${current_lili.name}套上K9拘束服，打扮成四肢着地的宠物样子。\n`)
                current_lili = changeAttributes({input_lili:current_lili, add_state:['宠物'], bondage_arm:10, bondage_lap:10, bondage_shins:10, pose_arm:'折叠', pose_leg:'折叠'})
                flags.K9_binding_flag = 2
                special_bondage_flags.push('K9_binding_flag')
                handleBondage()
            }
            const untieK9Binding=()=>{ // 解开K9拘束衣
                store.commit('addTrainLog', `${name}给${current_lili.name}解开了K9拘束衣。\n`)
                current_lili = changeAttributes({input_lili:current_lili, delete_state:['宠物'], bondage_arm:-10, bondage_lap:-10, bondage_shins:-10})
                flags.K9_binding_flag = 1
                special_bondage_flags = arrayDelete(special_bondage_flags, 'K9_binding_flag')
                handleUntie()
            }

            const clickHorseBinding=()=>{ // 马奴拘束
                store.commit('addTrainLog', `${name}给${current_lili.name}打扮成马驹的样子。\n`)
                current_lili = changeAttributes({input_lili:current_lili, bondage_lap:10, pose_leg:'并腿'})
                flags.horse_binding_flag = 2
                special_bondage_flags.push('horse_binding_flag')
                handleBondage()
            }
            const untieHorseBinding=()=>{ // 解开马奴拘束
                store.commit('addTrainLog', `${name}给${current_lili.name}解开了马奴拘束衣。\n`)
                current_lili = changeAttributes({input_lili:current_lili, bondage_lap:-10})
                flags.horse_binding_flag = 1
                special_bondage_flags = arrayDelete(special_bondage_flags, 'horse_binding_flag')
                handleUntie()
            }

            const clickXBinding=()=>{ // X架拘束
                store.commit('addTrainLog', `${name}将${current_lili.name}禁锢到X型拘束架上。\n`)
                current_lili = changeAttributes({input_lili:current_lili, bondage_arm:10, bondage_lap:10, bondage_shins:10, 
                    bondage_waist:10, pose_arm:'伸展', pose_leg:'伸展', pose_waist:'伸展'})
                flags.X_binding_flag = 2
                special_bondage_flags.push('X_binding_flag')
                handleBondage()
            }
            const untieXBinding=()=>{ // 解开X架拘束
                store.commit('addTrainLog', `${name}将${current_lili.name}从X型拘束架上放下来。\n`)
                current_lili = changeAttributes({input_lili:current_lili, bondage_arm:-10, bondage_lap:-10, bondage_shins:-10, bondage_waist:-10})
                flags.X_binding_flag = 1
                special_bondage_flags = arrayDelete(special_bondage_flags, 'X_binding_flag')
                handleUntie()
            }

            const clickMermaidBinding=()=>{ // 乳胶人鱼拘束衣
                store.commit('addTrainLog', `${name}给${current_lili.name}套上乳胶人鱼拘束衣。\n`)
                current_lili = changeAttributes({input_lili:current_lili, add_state:['人鱼'], bondage_lap:10, bondage_shins:10, bondage_toe:10, pose_leg:'并腿'})
                flags.mermaid_binding_flag = 2
                special_bondage_flags.push('mermaid_binding_flag')
                handleBondage()
            }
            const untieMermaidBinding=()=>{ // 解开乳胶人鱼拘束衣
                store.commit('addTrainLog', `${name}给${current_lili.name}脱掉乳胶人鱼拘束衣。\n`)
                current_lili = changeAttributes({input_lili:current_lili, delete_state:['人鱼'], bondage_arm:-10, bondage_lap:-10, bondage_shins:-10, bondage_toe:-10})
                flags.mermaid_binding_flag = 1
                special_bondage_flags = arrayDelete(special_bondage_flags, 'mermaid_binding_flag')
                handleUntie()
            }

            const handleMummifiedBinding=()=>{ // 木乃伊拘束的通用操作
                current_lili = changeAttributes({input_lili:current_lili, pose_arm:'前手', pose_leg:'并腿', pose_finger:'握拳'})
            }
            
            const clickMummifiedHeadBinding=()=>{ // 绷带木乃伊（包头）
                store.commit('addTrainLog', `${name}用绷带将${current_lili.name}从头到脚层层包裹起来。\n`)
                current_lili = changeAttributes({input_lili:current_lili, bondage_ear:2, bondage_mouth:1, bondage_nose:3, bondage_eye:10,
                    bondage_arm:10, bondage_finger:10, bondage_lap:10, bondage_shins:10, bondage_foot:10, bondage_toe:10})
                handleMummifiedBinding()
                flags.mummified_head_binding_flag = 2
                special_bondage_flags.push('mummified_head_binding_flag')
                handleBondage()
            }
            const untieMummifiedHeadBinding=()=>{ // 解开绷带木乃伊（包头）
                store.commit('addTrainLog', `${name}给${current_lili.name}解开了木乃伊拘束。\n`)
                current_lili = changeAttributes({input_lili:current_lili, bondage_ear:-2, bondage_mouth:-1, bondage_nose:-3, bondage_eye:-10,
                    bondage_arm:-10, bondage_finger:-10, bondage_lap:-10, bondage_shins:-10, bondage_foot:-10, bondage_toe:-10})
                flags.mummified_head_binding_flag = 1
                special_bondage_flags = arrayDelete(special_bondage_flags, 'mummified_head_binding_flag')
                handleUntie()
            }

            const clickLigatureMummifiedBinding=()=>{ // 绷带木乃伊（不包头）
                store.commit('addTrainLog', `${name}用绷带将${current_lili.name}脖颈之下层层包裹起来。\n`)
                current_lili = changeAttributes({input_lili:current_lili, bondage_arm:10, bondage_finger:10, bondage_lap:10, 
                    bondage_shins:10, bondage_foot:10, bondage_toe:10})
                handleMummifiedBinding()
                flags.ligature_mummified_binding_flag = 2
                special_bondage_flags.push('ligature_mummified_binding_flag')
                handleBondage()
            }
            const untieLigatureMummifiedBinding=()=>{ // 解开绷带木乃伊（不包头）
                store.commit('addTrainLog', `${name}给${current_lili.name}解开了木乃伊拘束。\n`)
                current_lili = changeAttributes({input_lili:current_lili, bondage_arm:-10, bondage_finger:-10, bondage_lap:-10, 
                    bondage_shins:-10, bondage_foot:-10, bondage_toe:-10})
                flags.ligature_mummified_binding_flag = 1
                special_bondage_flags = arrayDelete(special_bondage_flags, 'ligature_mummified_binding_flag')
                handleUntie()
            }

            const clickTapeMimmifiedBinding=()=>{ // 胶带木乃伊（不包头）
                store.commit('addTrainLog', `${name}用胶带将${current_lili.name}脖颈之下层层包裹起来。\n`)
                current_lili = changeAttributes({input_lili:current_lili, bondage_arm:10, bondage_finger:10, bondage_lap:10, 
                    bondage_shins:10, bondage_foot:10, bondage_toe:10})
                handleMummifiedBinding()
                flags.tape_mimmified_binding_flag = 2
                special_bondage_flags.push('tape_mimmified_binding_flag')
                handleBondage()
            }
            const untieTapeMimmifiedBinding=()=>{ // 解开胶带木乃伊（不包头）
                store.commit('addTrainLog', `${name}给${current_lili.name}解开了木乃伊拘束。\n`)
                current_lili = changeAttributes({input_lili:current_lili, bondage_arm:-10, bondage_finger:-10, bondage_lap:-10, 
                    bondage_shins:-10, bondage_foot:-10, bondage_toe:-10})
                flags.tape_mimmified_binding_flag = 1
                special_bondage_flags = arrayDelete(special_bondage_flags, 'tape_mimmified_binding_flag')
                handleUntie()
            }

            const handleStockings=()=>{ // 丝袜全包通用操作
                current_lili = changeAttributes({input_lili:current_lili, pose_leg:'并腿'})
            }

            const clickOneStockings=()=>{ // 一层丝袜拘束
                store.commit('addTrainLog', `${name}用一层丝袜将${current_lili.name}包裹起来。\n`)
                current_lili = changeAttributes({input_lili:current_lili, bondage_nose:1, bondage_arm:1, bondage_finger:1, bondage_lap:1, 
                    bondage_shins:1, bondage_foot:1, bondage_toe:1})
                handleStockings()
                flags.one_stockings_flag = 2
                special_bondage_flags.push('one_stockings_flag')
                handleBondage()
            }
            const untieOneStockings=()=>{ // 解开一层丝袜拘束
                store.commit('addTrainLog', `${name}给${current_lili.name}解开了丝袜拘束。\n`)
                current_lili = changeAttributes({input_lili:current_lili, bondage_nose:-1, bondage_arm:-1, bondage_finger:-1, bondage_lap:-1, 
                    bondage_shins:-1, bondage_foot:-1, bondage_toe:-1})
                flags.one_stockings_flag = 1
                special_bondage_flags = arrayDelete(special_bondage_flags, 'one_stockings_flag')
                handleUntie()
            }

            const clickTwoStockings=()=>{ // 两层丝袜拘束
                store.commit('addTrainLog', `${name}用两层丝袜将${current_lili.name}包裹起来。\n`)
                current_lili = changeAttributes({input_lili:current_lili, bondage_nose:1, bondage_arm:2, bondage_finger:2, bondage_lap:2, 
                    bondage_shins:2, bondage_foot:2, bondage_toe:2})
                handleStockings()
                flags.two_stockings_flag = 2
                special_bondage_flags.push('two_stockings_flag')
                handleBondage()
            }
            const untieTwoStockings=()=>{ // 解开两层丝袜拘束
                store.commit('addTrainLog', `${name}给${current_lili.name}解开了丝袜拘束。\n`)
                current_lili = changeAttributes({input_lili:current_lili, bondage_nose:-1, bondage_arm:-2, bondage_finger:-2, bondage_lap:-2, 
                    bondage_shins:-2, bondage_foot:-2, bondage_toe:-2})
                flags.two_stockings_flag = 1
                special_bondage_flags = arrayDelete(special_bondage_flags, 'two_stockings_flag')
                handleUntie()
            }

            const clickThreeStockings=()=>{ // 三层丝袜拘束
                store.commit('addTrainLog', `${name}用三层丝袜将${current_lili.name}包裹起来。\n`)
                current_lili = changeAttributes({input_lili:current_lili, bondage_nose:2, bondage_arm:3, bondage_finger:3, bondage_lap:3, 
                    bondage_shins:3, bondage_foot:3, bondage_toe:3})
                handleStockings()
                flags.three_stockings_flag = 2
                special_bondage_flags.push('three_stockings_flag')
                handleBondage()
            }
            const untieThreeStockings=()=>{ // 解开三层丝袜拘束
                store.commit('addTrainLog', `${name}给${current_lili.name}解开了丝袜拘束。\n`)
                current_lili = changeAttributes({input_lili:current_lili, bondage_nose:-2, bondage_arm:-3, bondage_finger:-3, bondage_lap:-3, 
                    bondage_shins:-3, bondage_foot:-3, bondage_toe:-3})
                flags.three_stockings_flag = 1
                special_bondage_flags = arrayDelete(special_bondage_flags, 'three_stockings_flag')
                handleUntie()
            }

            const clickFiveStockings=()=>{ // 五层丝袜拘束
                store.commit('addTrainLog', `${name}用五层丝袜将${current_lili.name}包裹起来。\n`)
                current_lili = changeAttributes({input_lili:current_lili, bondage_nose:3, bondage_arm:5, bondage_finger:5, bondage_lap:5, 
                    bondage_shins:5, bondage_foot:5, bondage_toe:5})
                handleStockings()
                flags.five_stockings_flag = 2
                special_bondage_flags.push('five_stockings_flag')
                handleBondage()
            }
            const untieFiveStockings=()=>{ // 解开五层丝袜拘束
                store.commit('addTrainLog', `${name}给${current_lili.name}解开了丝袜拘束。\n`)
                current_lili = changeAttributes({input_lili:current_lili, bondage_nose:-3, bondage_arm:-5, bondage_finger:-5, bondage_lap:-5, 
                    bondage_shins:-5, bondage_foot:-5, bondage_toe:-5})
                flags.five_stockings_flag = 1
                special_bondage_flags = arrayDelete(special_bondage_flags, 'five_stockings_flag')
                handleUntie()
            }

            // 解开所有束缚
            const clickUntieAll=()=>{
                store.commit('addTrainLog', `${name}给${current_lili.name}解开了全身所有的束缚。\n`)
                current_lili = changeAttributes({input_lili:current_lili, delete_state:['捆绑', '宠物', '人鱼'],
                    bondage_eye:0, bondage_ear:0, bondage_nose:0, bondage_mouth:0, bondage_neck:0, bondage_arm:0, bondage_finger:0,
                    bondage_waist:0, bondage_lap:0, bondage_shins:0, bondage_foot:0, bondage_toe:0, 
                    pose_finger:'自由', pose_waist:'自由', pose_leg:'自由', pose_foot:'自由', pose_arm:'自由'})
                special_bondage_flags = []
                handleButtons()
            }

            return {
                ...toRefs(flags),
                moveBlindfold, clickBlindfold, untieBlindfold,
                moveBallgag, clickBallgag, untieBallgag,
                moveEarplug, clickEarplug, untieEarplug, 
                moveFrontHandBinding, clickFrontHandBinding, untieFrontHandBinding,
                clickBackHandBinding, untieBackHandBinding,
                clickBoxBinding, untieBoxBinding,
                clickStraightArmBinding, untieStraightArmBinding,
                clickBackPrayerBinding, untieBackPrayerBinding,
                clickTapeWrapFingers, untieTapeWrapFingers,
                clickTortoiseshellBinding, untieTortoiseshellBinding,
                clickLegBinding, untieLegBinding,
                clickOpenLegBinding, untieOpenLegBinding,
                clickBallBinding, untieBallBinding,
                clickStrandRope, untieStrandRope,
                clickK9Binding, untieK9Binding,
                clickHorseBinding, untieHorseBinding,
                clickXBinding, untieXBinding,
                clickMermaidBinding, untieMermaidBinding,
                clickMummifiedHeadBinding, untieMummifiedHeadBinding,
                clickLigatureMummifiedBinding, untieLigatureMummifiedBinding,
                clickTapeMimmifiedBinding, untieTapeMimmifiedBinding,
                clickOneStockings, untieOneStockings,
                clickTwoStockings, untieTwoStockings,
                clickThreeStockings, untieThreeStockings,
                clickFiveStockings, untieFiveStockings,
                clickUntieAll,
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