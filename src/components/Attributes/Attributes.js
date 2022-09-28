import { toPairs } from 'lodash'
import { randomInt, arrayDelete } from '../../utils.js'
import { addLog } from '../LiLiTrained/TrainLogUtils.js'

// 返回随机等级的罩杯
export function randomCpus() {
    return ['A', 'B', 'C', 'D', 'E'][randomInt(0, 4)]
}


// 笨璃璃的初始化属性
export const init_attributes = {
    num:1, // 笨璃璃编号
    name:'', // 姓名
    age:randomInt(19, 28), // 年龄
    height:randomInt(145, 175), // 身高
    iq:randomInt(-100, -1), // 智商
    cups:randomCpus(), // 罩杯
    milk:0, // 乳汁分泌量
    healthy:100, // 健康值
    fluid:5, // 璃汁分泌量
    favorability:50, // 好感度
    lust_physiology:0, // 生理性欲
    lust_psychology:0, // 心理性欲
    stamina:100, // 体力
    state:['正常'], // 状态
    specialty:[], // 特长
    modify:[], // 改造措施
    whereabouts:{state:'未派遣', place:'宿舍'}, // 笨璃璃的去向，不在card里面显示，只为标识笨璃璃被安排的地方用于后续分类
    soon:{ // 临时属性
        buff:{
            silly:0, // 失神buff
            grievance:0, // 委屈buff
            urination:0, // 排尿buff
            defecate:0, // 排便buff
        },
        pose:{ // 各部位姿势
            arm:'自由',
            finger:'自由',
            waist:'自由',
            leg:'自由',
            foot:'自由',
        },
        bondage:{ // 拘束值
            eye:0,
            ear:0,
            nose:0,
            mouth:0,
            neck:0,
            arm:0,
            finger:0,
            waist:0,
            lap:0,
            shins:0,
            foot:0,
            toe:0,
        },
        pain_feel:{ // 痛感刺激值
            breast:0,
            hand:0,
            vagina:0, // 下体
            lap:0,
            instep:0, // 脚背
            foot:0, // 脚心
            rectal:0, // 后庭
            urethra:0, // 尿道
        },
        tickle_feel:{ // 痒感刺激值
            breast:0,
            armpit:0, // 腋下
            costal:0, // 肋下
            hand:0,
            vagina:0, // 下体
            lap:0,
            instep:0, // 脚背
            foot:0, // 脚心
            rectal:0, // 后庭
            urethra:0, // 尿道
        },
        special_feel:{ // 特殊刺激值
            urinary:0, // 憋尿
            enema:0, // 灌肠
            smell:0, // 气味刺激
        },
    },
    long:{ // 长期属性
        xp:{
            pain:0, // 恋痛程度
            bondage:50, // 抖M程度
            smell:0, // 气味系
            tickle:0, // TK
        },
        sexual:{ // 性器化程度
            ear:1,
            lap:2,
            foot:0,
            toe:0,
            urinary:0,
            breast:5,
            vagina:10,
            rectal:0, // 后庭
        },
        sensitivity:{ // 敏感度
            breast:5,
            armpit:5,
            costal:3,
            hand:1,
            vagina:8,
            lap:2,
            instep:1,
            foot:2,
            rectal:2, // 后庭
            urethra:5, // 尿道
        },
        manners:{ // 礼仪值
            lady:10,
            pet:0,
            mermaid:0,
            slave:0,
        },
    },
}

// 根据输入笨璃璃信息和条件进行判断，返回是否满足
export function judgeFlag({
    current_lili, flag_true=true, flag_false=false, need_state=[], stop_state=[],
    milk=[], healthy=[], fluid=[], favorability=[], lust_physiology=[], lust_psychology=[], stamina=[],
    // soon
    buff_silly=[], buff_grievance=[], buff_urination=[], buff_defecate=[],
    pose_arm=[], pose_finger=[], pose_waist=[], pose_leg=[], pose_foot=[],
    bondage_eye=[], bondage_ear=[], bondage_nose=[], bondage_mouth=[], bondage_neck=[],
    bondage_arm=[], bondage_finger=[], bondage_waist=[], bondage_lap=[], bondage_shins=[], bondage_foot=[], bondage_toe=[],
    pain_breast=[], pain_hand=[], pain_vagina=[], pain_lap=[], pain_instep=[], pain_foot=[], pain_rectal=[], pain_urethra=[], 
    tickle_breast=[], tickle_armpit=[], tickle_costal=[], tickle_hand=[], tickle_vagina=[], tickle_lap=[], tickle_instep=[], 
    tickle_foot=[], tickle_rectal=[], tickle_urethra=[], 
    special_urinary=[], special_enema=[], special_smell=[],
    // long
    xp_pain=[], xp_bondage=[], xp_smell=[], xp_tickle=[], 
    sexual_ear=[], sexual_lap=[], sexual_foot=[], sexual_toe=[], sexual_urinary=[], sexual_breast=[], sexual_vagina=[], sexual_rectal=[],
    sen_breast=[], sen_armpit=[], sen_costal=[], sen_hand=[], sen_vagina=[], sen_lap=[], sen_instep=[], sen_foot=[], sen_rectal=[], sen_urethra=[],
    manners_lady=[], manners_pet=[], manners_mermaid=[], manners_slave=[]
}){
    let flag = flag_true

    // 判断当前姿势是否在允许的几个姿势中
    function judgePose(lili_pose, input_pose){
        if(input_pose&&!input_pose.includes(lili_pose)){
            flag = flag_false
        }
    }
    // 判断当前属性数值是否在允许范围内
    function judgeValue(lili_value, input_bondage){
        if(input_bondage){
            let min = input_bondage[0]
            let max = input_bondage[1]
            if(lili_value<min||lili_value>max){
                flag = flag_false
            }
        }
    }

    // 判断是否含有需要的状态
    if(need_state){
        for(let i=0; i<need_state.length; i++){
            if(!current_lili.state.includes(need_state[i])){
                flag = flag_false
            }
        }
    }
    // 判断是否有禁止的状态
    if(stop_state){
        for(let i=0; i<stop_state.length; i++){
            if(current_lili.state.includes(stop_state[i])){
                flag = flag_false
            }
        }
    }

    // 执行判断
    // 基本属性
    judgeValue(current_lili.milk, milk)
    judgeValue(current_lili.healthy, healthy)
    judgeValue(current_lili.fluid, fluid)
    judgeValue(current_lili.favorability, favorability)
    judgeValue(current_lili.lust_physiology, lust_physiology)
    judgeValue(current_lili.lust_psychology, lust_psychology)
    judgeValue(current_lili.stamina, stamina)

    // 临时属性
    judgePose(current_lili.soon.buff.silly, buff_silly)
    judgePose(current_lili.soon.buff.grievance, buff_grievance)
    judgePose(current_lili.soon.buff.urination, buff_urination)
    judgePose(current_lili.soon.buff.defecate, buff_defecate)

    judgePose(current_lili.soon.pose.arm, pose_arm)
    judgePose(current_lili.soon.pose.finger, pose_finger)
    judgePose(current_lili.soon.pose.waist, pose_waist)
    judgePose(current_lili.soon.pose.leg, pose_leg)
    judgePose(current_lili.soon.pose.foot, pose_foot)

    judgeValue(current_lili.soon.bondage.eye, bondage_eye)
    judgeValue(current_lili.soon.bondage.ear, bondage_ear)
    judgeValue(current_lili.soon.bondage.nose, bondage_nose)
    judgeValue(current_lili.soon.bondage.mouth, bondage_mouth)
    judgeValue(current_lili.soon.bondage.neck, bondage_neck)
    judgeValue(current_lili.soon.bondage.arm, bondage_arm)
    judgeValue(current_lili.soon.bondage.finger, bondage_finger)
    judgeValue(current_lili.soon.bondage.waist, bondage_waist)
    judgeValue(current_lili.soon.bondage.lap, bondage_lap)
    judgeValue(current_lili.soon.bondage.shins, bondage_shins)
    judgeValue(current_lili.soon.bondage.foot, bondage_foot)
    judgeValue(current_lili.soon.bondage.toe, bondage_toe)

    judgeValue(current_lili.soon.pain_feel.breast, pain_breast)
    judgeValue(current_lili.soon.pain_feel.hand, pain_hand)
    judgeValue(current_lili.soon.pain_feel.vagina, pain_vagina)
    judgeValue(current_lili.soon.pain_feel.lap, pain_lap)
    judgeValue(current_lili.soon.pain_feel.instep, pain_instep)
    judgeValue(current_lili.soon.pain_feel.foot, pain_foot)
    judgeValue(current_lili.soon.pain_feel.rectal, pain_rectal)
    judgeValue(current_lili.soon.pain_feel.urethra, pain_urethra)

    judgeValue(current_lili.soon.tickle_feel.breast, tickle_breast)
    judgeValue(current_lili.soon.tickle_feel.armpit, tickle_armpit)
    judgeValue(current_lili.soon.tickle_feel.costal, tickle_costal)
    judgeValue(current_lili.soon.tickle_feel.hand, tickle_hand)
    judgeValue(current_lili.soon.tickle_feel.vagina, tickle_vagina)
    judgeValue(current_lili.soon.tickle_feel.lap, tickle_lap)
    judgeValue(current_lili.soon.tickle_feel.instep, tickle_instep)
    judgeValue(current_lili.soon.tickle_feel.foot, tickle_foot)
    judgeValue(current_lili.soon.tickle_feel.rectal, tickle_rectal)
    judgeValue(current_lili.soon.tickle_feel.urethra, tickle_urethra)

    judgeValue(current_lili.soon.special_feel.urinary, special_urinary)
    judgeValue(current_lili.soon.special_feel.enema, special_enema)
    judgeValue(current_lili.soon.special_feel.smell, special_smell)

    // 长期属性
    judgeValue(current_lili.long.xp.pain, xp_pain)
    judgeValue(current_lili.long.xp.bondage, xp_bondage)
    judgeValue(current_lili.long.xp.smell, xp_smell)
    judgeValue(current_lili.long.xp.tickle, xp_tickle)

    judgeValue(current_lili.long.sexual.ear, sexual_ear)
    judgeValue(current_lili.long.sexual.lap, sexual_lap)
    judgeValue(current_lili.long.sexual.foot, sexual_foot)
    judgeValue(current_lili.long.sexual.toe, sexual_toe)
    judgeValue(current_lili.long.sexual.urinary, sexual_urinary)
    judgeValue(current_lili.long.sexual.breast, sexual_breast)
    judgeValue(current_lili.long.sexual.vagina, sexual_vagina)
    judgeValue(current_lili.long.sexual.rectal, sexual_rectal)

    judgeValue(current_lili.long.sensitivity.breast, sen_breast)
    judgeValue(current_lili.long.sensitivity.armpit, sen_armpit)
    judgeValue(current_lili.long.sensitivity.costal, sen_costal)
    judgeValue(current_lili.long.sensitivity.hand, sen_hand)
    judgeValue(current_lili.long.sensitivity.vagina, sen_vagina)
    judgeValue(current_lili.long.sensitivity.lap, sen_lap)
    judgeValue(current_lili.long.sensitivity.instep, sen_instep)
    judgeValue(current_lili.long.sensitivity.foot, sen_foot)
    judgeValue(current_lili.long.sensitivity.rectal, sen_rectal)
    judgeValue(current_lili.long.sensitivity.urethra, sen_urethra)

    judgeValue(current_lili.long.manners.lady, manners_lady)
    judgeValue(current_lili.long.manners.pet, manners_pet)
    judgeValue(current_lili.long.manners.mermaid, manners_mermaid)
    judgeValue(current_lili.long.manners.slave, manners_slave)

    return flag
}


// 修改笨璃璃的属性
export function changeAttributes({
    input_lili, add_state=[], delete_state=[],
    milk=0, healthy=0, fluid=0, favorability=0, lust_physiology=0, lust_psychology=0, stamina=0,
    // soon
    buff_silly=0, buff_grievance=0, buff_urination=0, buff_defecate=0,
    pose_arm='', pose_finger='', pose_waist='', pose_leg='', pose_foot='',
    bondage_eye=0, bondage_ear=0, bondage_nose=0, bondage_mouth=0, bondage_neck=0,
    bondage_arm=0, bondage_finger=0, bondage_waist=0, bondage_lap=0, bondage_shins=0, bondage_foot=0, bondage_toe=0,
    pain_breast=0, pain_hand=0, pain_vagina=0, pain_lap=0, pain_instep=0, pain_foot=0, pain_rectal=0, pain_urethra=0, 
    tickle_breast=0, tickle_armpit=0, tickle_costal=0, tickle_hand=0, tickle_vagina=0, tickle_lap=0, tickle_instep=0, 
    tickle_foot=0, tickle_rectal=0, tickle_urethra=0, 
    special_urinary=0, special_enema=0, special_smell=0, 
    // long
    xp_pain=0, xp_bondage=0, xp_smell=0, xp_tickle=0, 
    sexual_ear=0, sexual_lap=0, sexual_foot=0, sexual_toe=0, sexual_urinary=0, sexual_breast=0, sexual_vagina=0, sexual_rectal=0,
    sen_breast=0, sen_armpit=0, sen_costal=0, sen_hand=0, sen_vagina=0, sen_lap=0, sen_instep=0, sen_foot=0, sen_rectal=0, sen_urethra=0,
    manners_lady=0, manners_pet=0, manners_mermaid=0, manners_slave=0, 
}){
    let current_lili = input_lili

    // 在范围内改变属性数值，如果超出范围则直接返回最大值或最小值
    function changeValue(value, add_value, min, max, fix_value=1, tips=null){
        if(!add_value){return parseFloat(value.toFixed(fix_value))} // toFixed会把数字转化为字符串，所以需要转化回去

        let answer = value + add_value

        if(answer>max){return max}
        if(answer<min){return min}

        // 属性越过阈值时可能进行的操作
        // if(tips){
        //     console.log(tips)
        //     if(tips.above_log && value<tips.threshold && answer >= tips.threshold){
        //         addLog(tips.above_log.flag, tips.above_log.content, false)
        //     }
        //     if(tips.below_log && value>=tips.threshold && answer < tips.threshold){
        //         addLog(tips.below_log.flag, tips.above_log.content, false)
        //     }
        // }

        return parseFloat(answer.toFixed(fix_value))
    }
    // 添加笨璃璃的状态，在此自定义一些规则。
    function addState(state_array, item){
        // 如果待添加的元素在状态中已经存在，则直接return
        if(state_array.includes(item)){
            return state_array
        }
        // 如果状态中存在“正常”，则用新状态替换“正常”状态。
        if(state_array.includes('正常')){
            state_array = arrayDelete(state_array, '正常')
    }
    state_array.push(item)
    return state_array
    }
    // 删除笨璃璃的状态，在此自定义一些规则。
    function deleteState(state_array, item){
        if(state_array.includes(item)){
            state_array = arrayDelete(state_array, item)
        }
        // 如果删除状态后状态栏为空，则添加基本状态“正常”
        if(state_array.length === 0){
            state_array.push('正常')
        }
        return state_array
    }

    // 执行基本数值属性的更改
    current_lili.milk = changeValue(current_lili.milk, milk, 0, 5)
    current_lili.healthy = changeValue(current_lili.healthy, healthy, 0, 100)
    current_lili.fluid = changeValue(current_lili.fluid, fluid, 2, 20)
    current_lili.favorability = changeValue(current_lili.favorability, favorability, 0, 100)
    current_lili.lust_physiology = changeValue(current_lili.lust_physiology, lust_physiology, 0, 100)
    current_lili.lust_psychology = changeValue(current_lili.lust_psychology, lust_psychology, 0, 100)
    current_lili.stamina = changeValue(current_lili.stamina, stamina, 0, 100)

    // 执行状态更改
    for(let i=0; i<add_state.length; i++){
        current_lili.state = addState(current_lili.state, add_state[i])
    }
    for(let i=0; i<delete_state.length; i++){
        current_lili.state = deleteState(current_lili.state, delete_state[i])
    }

    // 临时属性
    if(pose_arm){current_lili.details.pose.arm = pose_arm}
    if(pose_finger){current_lili.details.pose.finger = pose_finger}
    if(pose_waist){current_lili.details.pose.waist = pose_waist}
    if(pose_leg){current_lili.details.pose.leg = pose_leg}
    if(pose_foot){current_lili.details.pose.foot = pose_foot}

    current_lili.soon.buff.silly = changeValue(current_lili.soon.buff.silly, buff_silly, 0, 100)
    current_lili.soon.buff.grievance = changeValue(current_lili.soon.buff.grievance, buff_grievance, 0, 100)
    current_lili.soon.buff.urination = changeValue(current_lili.soon.buff.urination, buff_urination, 0, 100)
    current_lili.soon.buff.defecate = changeValue(current_lili.soon.buff.defecate, buff_defecate, 0, 100)

    current_lili.soon.bondage.eye = changeValue(current_lili.soon.bondage.eye, bondage_eye, 0, Infinity)
    current_lili.soon.bondage.ear = changeValue(current_lili.soon.bondage.ear, bondage_ear, 0, Infinity)
    current_lili.soon.bondage.nose =  changeValue(current_lili.soon.bondage.nose, bondage_nose, 0, Infinity)
    current_lili.soon.bondage.mouth = changeValue(current_lili.soon.bondage.mouth, bondage_mouth, 0, Infinity)
    current_lili.soon.bondage.neck = changeValue(current_lili.soon.bondage.neck, bondage_neck, 0, Infinity)
    current_lili.soon.bondage.arm = changeValue(current_lili.soon.bondage.arm, bondage_arm, 0, Infinity)
    current_lili.soon.bondage.finger = changeValue(current_lili.soon.bondage.finger, bondage_finger, 0, Infinity)
    current_lili.soon.bondage.waist = changeValue(current_lili.soon.bondage.waist, bondage_waist, 0, Infinity)
    current_lili.soon.bondage.lap = changeValue(current_lili.soon.bondage.lap, bondage_lap, 0, Infinity)
    current_lili.soon.bondage.shins = changeValue(current_lili.soon.bondage.shins, bondage_shins, 0, Infinity)
    current_lili.soon.bondage.foot = changeValue(current_lili.soon.bondage.foot, bondage_foot, 0, Infinity)
    current_lili.soon.bondage.toe = changeValue(current_lili.soon.bondage.toe, bondage_toe, 0, Infinity)

    current_lili.soon.pain_feel.breast = changeValue(current_lili.soon.pain_feel.breast, pain_breast, 0, 10)
    current_lili.soon.pain_feel.hand = changeValue(current_lili.soon.pain_feel.hand, pain_hand, 0, 10)
    current_lili.soon.pain_feel.vagina = changeValue(current_lili.soon.pain_feel.vagina, pain_vagina, 0, 10)
    current_lili.soon.pain_feel.lap = changeValue(current_lili.soon.pain_feel.lap, pain_lap, 0, 10)
    current_lili.soon.pain_feel.instep = changeValue(current_lili.soon.pain_feel.instep, pain_instep, 0, 10)
    current_lili.soon.pain_feel.foot = changeValue(current_lili.soon.pain_feel.foot, pain_foot, 0, 10)
    current_lili.soon.pain_feel.rectal = changeValue(current_lili.soon.pain_feel.rectal, pain_rectal, 0, 10)
    current_lili.soon.pain_feel.urethra = changeValue(current_lili.soon.pain_feel.urethra, pain_urethra, 0, 10)

    current_lili.soon.tickle_feel.breast = changeValue(current_lili.soon.tickle_feel.breast, tickle_breast, 0, 10)
    current_lili.soon.tickle_feel.armpit = changeValue(current_lili.soon.tickle_feel.armpit, tickle_armpit, 0, 10)
    current_lili.soon.tickle_feel.costal = changeValue(current_lili.soon.tickle_feel.costal, tickle_costal, 0, 10)
    current_lili.soon.tickle_feel.hand = changeValue(current_lili.soon.tickle_feel.hand, tickle_hand, 0, 10)
    current_lili.soon.tickle_feel.vagina = changeValue(current_lili.soon.tickle_feel.vagina, tickle_vagina, 0, 10)
    current_lili.soon.tickle_feel.lap = changeValue(current_lili.soon.tickle_feel.lap, tickle_lap, 0, 10)
    current_lili.soon.tickle_feel.instep = changeValue(current_lili.soon.tickle_feel.instep, tickle_instep, 0, 10)
    current_lili.soon.tickle_feel.foot = changeValue(current_lili.soon.tickle_feel.foot, tickle_foot, 0, 10)
    current_lili.soon.tickle_feel.rectal = changeValue(current_lili.soon.tickle_feel.rectal, tickle_rectal, 0, 10)
    current_lili.soon.tickle_feel.urethra = changeValue(current_lili.soon.tickle_feel.urethra, tickle_urethra, 0, 10)

    console.log(current_lili.soon.special_feel.urinar)
    current_lili.soon.special_feel.urinary = changeValue(current_lili.soon.special_feel.urinary, special_urinary, 0, 10)
    current_lili.soon.special_feel.enema = changeValue(current_lili.soon.special_feel.enema, special_enema, 0, 10)
    current_lili.soon.special_feel.smell = changeValue(current_lili.soon.special_feel.smell, special_smell, 0, 10)

    // 详细属性
    current_lili.long.xp.pain = changeValue(current_lili.long.xp.pain, xp_pain, 0, 100)
    current_lili.long.xp.bondage = changeValue(current_lili.long.xp.bondage, xp_bondage, 50, 100)
    current_lili.long.xp.smell = changeValue(current_lili.long.xp.smell, xp_smell, 0, 100)
    current_lili.long.xp.tickle = changeValue(current_lili.long.xp.tickle, xp_tickle, 0, 100)

    current_lili.long.sexual.ear = changeValue(current_lili.long.sexual.ear, sexual_ear, 0, 10)
    current_lili.long.sexual.lap = changeValue(current_lili.long.sexual.lap, sexual_lap, 0, 10)
    current_lili.long.sexual.foot = changeValue(current_lili.long.sexual.foot, sexual_foot, 0, 10)
    current_lili.long.sexual.toe = changeValue(current_lili.long.sexual.toe, sexual_toe, 0, 10)
    current_lili.long.sexual.urinary = changeValue(current_lili.long.sexual.urinary, sexual_urinary, 0, 10)
    current_lili.long.sexual.breast = changeValue(current_lili.long.sexual.breast, sexual_breast, 0, 10)
    current_lili.long.sexual.vagina = changeValue(current_lili.long.sexual.vagina, sexual_vagina, 0, 10)
    current_lili.long.sexual.rectal = changeValue(current_lili.long.sexual.rectal, sexual_rectal, 0, 10)

    current_lili.long.sensitivity.breast = changeValue(current_lili.long.sensitivity.breast, sen_breast, 0, 10)
    current_lili.long.sensitivity.armpit = changeValue(current_lili.long.sensitivity.armpit, sen_armpit, 0, 10)
    current_lili.long.sensitivity.costal = changeValue(current_lili.long.sensitivity.costal, sen_costal, 0, 10)
    current_lili.long.sensitivity.hand = changeValue(current_lili.long.sensitivity.hand, sen_hand, 0, 10)
    current_lili.long.sensitivity.vagina = changeValue(current_lili.long.sensitivity.vagina, sen_vagina, 0, 10)
    current_lili.long.sensitivity.lap = changeValue(current_lili.long.sensitivity.lap, sen_lap, 0, 10)
    current_lili.long.sensitivity.instep = changeValue(current_lili.long.sensitivity.instep, sen_instep, 0, 10)
    current_lili.long.sensitivity.foot = changeValue(current_lili.long.sensitivity.foot, sen_foot, 0, 10)
    current_lili.long.sensitivity.foot = changeValue(current_lili.long.sensitivity.rectal, sen_rectal, 0, 10)
    current_lili.long.sensitivity.foot = changeValue(current_lili.long.sensitivity.urethra, sen_urethra, 0, 10)

    current_lili.long.manners.lady = changeValue(current_lili.long.manners.lady, manners_lady, 0, 50)
    current_lili.long.manners.pet = changeValue(current_lili.long.manners.pet, manners_pet, 0, 50)
    current_lili.long.manners.mermaid = changeValue(current_lili.long.manners.mermaid, manners_mermaid, 0, 50)
    current_lili.long.manners.slave = changeValue(current_lili.long.manners.slave, manners_slave, 0, 50)

    return current_lili
}