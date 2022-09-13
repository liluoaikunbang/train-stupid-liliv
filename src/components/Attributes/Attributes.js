import { randomInt, arrayDelete } from '../../utils.js'

// 返回随机等级的柔韧性
export function randomFlexibility() {
    return ['僵硬', '良好', '柔软'][randomInt(0, 2)]
}

// 返回随机等级的罩杯
export function randomCpus() {
    return ['A', 'B', 'C', 'D', 'E'][randomInt(0, 4)]
}


// 笨璃璃的初始化属性
export const init_attributes = {
    num:0, // 笨璃璃编号
    name:'', // 姓名
    age:randomInt(19, 28), // 年龄
    height:randomInt(145, 175), // 身高
    flexibility:randomFlexibility(), // 柔韧性
    iq:randomInt(-100, -1), // 智商
    cups:randomCpus(), // 罩杯
    milk:0, // 乳汁分泌量
    servility:0, // 奴性
    healthy:100, // 健康值
    fluid:5, // 璃汁分泌量
    favorability:50, // 对主人的好感
    state:['正常'], // 状态
    specialty:[''], // 特长
    whereabouts: '', // 笨璃璃的去向，不在card里面显示，只为标识笨璃璃被安排的地方用于后续分类
    details:{ // 笨璃璃的详细信息
        lust:0, // 性欲
        pain_love:0, // 恋痛程度
        sub_value:50, // 抖m程度
        pose:{ // 各部位姿势
            arm:'自由',
            finger:'自由',
            waist:'自由',
            leg:'自由',
            foot:'自由',
        },
        bondage_values:{ // 拘束值
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
        sexual:{ // 性器化程度
            ear:1,
            lap:2,
            foot:0,
            toe:0,
            urinary:0,
            breast:5,
            vagina:10,
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
        },
        manners:{ // 礼仪值
            lady:10,
            pet:0,
            mermaid:0,
        }
    },
}

// 根据输入笨璃璃信息和条件进行判断，返回是否满足
export function judgeFlag({
    current_lili, flag_true=true, flag_false=false, need_state=null,
    pose_arm=null, pose_finger=null, pose_waist=null, pose_leg=null, pose_foot=null,
    bondage_eye=null, bondage_ear=null, bondage_nose=null, bondage_mouth=null, bondage_neck=null,
    bondage_arm=null, bondage_finger=null, bondage_waist=null, bondage_lap=null, bondage_shins=null, bondage_foot=null, bondage_toe=null,
}){
    let flag = flag_true

    // 判断当前姿势是否在允许的几个姿势中
    function judgePose(lili_pose, input_pose){
        if(input_pose&&!input_pose.includes(lili_pose)){
            flag = flag_false
        }
    }
    // 判断当前属性数值是否在允许范围内
    function judgeBondage(lili_bondage_value, input_bondage){
        if(input_bondage){
            let min = input_bondage[0]
            let max = input_bondage[1]
            if(lili_bondage_value<min||lili_bondage_value>max){
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

    // 执行判断
    judgePose(current_lili.details.pose.arm, pose_arm)
    judgePose(current_lili.details.pose.finger, pose_finger)
    judgePose(current_lili.details.pose.waist, pose_waist)
    judgePose(current_lili.details.pose.leg, pose_leg)
    judgePose(current_lili.details.pose.foot, pose_foot)

    judgeBondage(current_lili.details.bondage_values.eye, bondage_eye)
    judgeBondage(current_lili.details.bondage_values.ear, bondage_ear)
    judgeBondage(current_lili.details.bondage_values.nose, bondage_nose)
    judgeBondage(current_lili.details.bondage_values.mouth, bondage_mouth)
    judgeBondage(current_lili.details.bondage_values.neck, bondage_neck)
    judgeBondage(current_lili.details.bondage_values.arm, bondage_arm)
    judgeBondage(current_lili.details.bondage_values.finger, bondage_finger)
    judgeBondage(current_lili.details.bondage_values.waist, bondage_waist)
    judgeBondage(current_lili.details.bondage_values.lap, bondage_lap)
    judgeBondage(current_lili.details.bondage_values.shins, bondage_shins)
    judgeBondage(current_lili.details.bondage_values.foot, bondage_foot)
    judgeBondage(current_lili.details.bondage_values.toe, bondage_toe)

    return flag
}


// 修改笨璃璃的属性
export function changeAttributes({
    input_lili,
    milk=0, servility=0, healthy=0, fluid=0, favorability=50, add_state=[], delete_state=[],
    lust=0, pain_love=0, sub_value=0,
    pose_arm='', pose_finger='', pose_waist='', pose_leg='', pose_foot='',
    bondage_eye=0, bondage_ear=0, bondage_nose=0, bondage_mouth=0, bondage_neck=0,
    bondage_arm=0, bondage_finger=0, bondage_waist=0, bondage_lap=0, bondage_shins=0, bondage_foot=0, bondage_toe=0,
    sexual_ear=0, sexual_lap=0, sexual_foot=0, sexual_toe=0, sexual_urinary=0, sexual_breast=0, sexual_vagina=0,
    sen_breast=0, sen_armpit=0, sen_costal=0, sen_hand=0, sen_vagina=0, sen_lap=0, sen_instep=0, sen_foot=0,
    manners_lady=0, manners_pet=0, manners_mermaid=0
}){
    // 在范围内改变属性数值，如果超出范围则直接返回最大值或最小值
    function changeValue(value, add_value, min, max, fix_value=0){
        if(!add_value){return parseFloat(value.toFixed(fix_value))} // toFixed会把数字转化为字符串，所以需要转化回去

        let answer = value + add_value

        if(answer>max){return max}
        if(answer<min){return min}

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
        state_array = arrayDelete(state_array, item)
        // 如果删除状态后状态栏为空，则添加基本状态“正常”
        if(state_array.length === 0){
            state_array.push('正常')
        }
        return state_array
    }
    
    let current_lili = input_lili

    // 执行基本数值属性的更改
    current_lili.milk = changeValue(current_lili.milk, milk, 0, 5)
    current_lili.servility = changeValue(current_lili.servility, servility, 0, 100)
    current_lili.healthy = changeValue(current_lili.healthy, healthy, 0, Infinity)
    current_lili.fluid = changeValue(current_lili.fluid, fluid, 2, 20)
    current_lili.favorability = changeValue(current_lili.favorability, favorability, 0, 100)

    // 执行状态更改
    for(let i=0; i<add_state.length; i++){
        current_lili.state = addState(current_lili.state, add_state[i])
    }
    for(let i=0; i<delete_state.length; i++){
        current_lili.state = deleteState(current_lili.state, delete_state[i])
    }

    // 执行姿势的更改
    if(pose_arm){current_lili.details.pose.arm = pose_arm}
    if(pose_finger){current_lili.details.pose.finger = pose_finger}
    if(pose_waist){current_lili.details.pose.waist = pose_waist}
    if(pose_leg){current_lili.details.pose.leg = pose_leg}
    if(pose_foot){current_lili.details.pose.foot = pose_foot}

    // 执行详细数值属性的更改
    current_lili.details.lust = changeValue(current_lili.details.lust, lust, 0, 100)
    current_lili.details.pain_love = changeValue(current_lili.details.pain_love, pain_love, 0, 20)
    current_lili.details.sub_value = changeValue(current_lili.details.sub_value, sub_value, 50, 100)

    current_lili.details.bondage_values.eye = changeValue(current_lili.details.bondage_values.eye, bondage_eye, 0, Infinity)
    current_lili.details.bondage_values.ear = changeValue(current_lili.details.bondage_values.ear, bondage_ear, 0, Infinity)
    current_lili.details.bondage_values.nose =  changeValue(current_lili.details.bondage_values.nose, bondage_nose, 0, Infinity)
    current_lili.details.bondage_values.mouth = changeValue(current_lili.details.bondage_values.mouth, bondage_mouth, 0, Infinity)
    current_lili.details.bondage_values.neck = changeValue(current_lili.details.bondage_values.neck, bondage_neck, 0, Infinity)
    current_lili.details.bondage_values.arm = changeValue(current_lili.details.bondage_values.arm, bondage_arm, 0, Infinity)
    current_lili.details.bondage_values.finger = changeValue(current_lili.details.bondage_values.finger, bondage_finger, 0, Infinity)
    current_lili.details.bondage_values.waist = changeValue(current_lili.details.bondage_values.waist, bondage_waist, 0, Infinity)
    current_lili.details.bondage_values.lap = changeValue(current_lili.details.bondage_values.lap, bondage_lap, 0, Infinity)
    current_lili.details.bondage_values.shins = changeValue(current_lili.details.bondage_values.shins, bondage_shins, 0, Infinity)
    current_lili.details.bondage_values.foot = changeValue(current_lili.details.bondage_values.foot, bondage_foot, 0, Infinity)
    current_lili.details.bondage_values.toe = changeValue(current_lili.details.bondage_values.toe, bondage_toe, 0, Infinity)

    current_lili.details.sexual.ear = changeValue(current_lili.details.sexual.ear, sexual_ear, 0, 10)
    current_lili.details.sexual.lap = changeValue(current_lili.details.sexual.lap, sexual_lap, 0, 10)
    current_lili.details.sexual.foot = changeValue(current_lili.details.sexual.foot, sexual_foot, 0, 10)
    current_lili.details.sexual.toe = changeValue(current_lili.details.sexual.toe, sexual_toe, 0, 10)
    current_lili.details.sexual.urinary = changeValue(current_lili.details.sexual.urinary, sexual_urinary, 0, 10)
    current_lili.details.sexual.breast = changeValue(current_lili.details.sexual.breast, sexual_breast, 0, 10)
    current_lili.details.sexual.vagina = changeValue(current_lili.details.sexual.vagina, sexual_vagina, 0, 10)

    current_lili.details.sensitivity.breast = changeValue(current_lili.details.sensitivity.breast, sen_breast, 0, 10)
    current_lili.details.sensitivity.armpit = changeValue(current_lili.details.sensitivity.armpit, sen_armpit, 0, 10)
    current_lili.details.sensitivity.costal = changeValue(current_lili.details.sensitivity.costal, sen_costal, 0, 10)
    current_lili.details.sensitivity.hand = changeValue(current_lili.details.sensitivity.hand, sen_hand, 0, 10)
    current_lili.details.sensitivity.vagina = changeValue(current_lili.details.sensitivity.vagina, sen_vagina, 0, 10)
    current_lili.details.sensitivity.lap = changeValue(current_lili.details.sensitivity.lap, sen_lap, 0, 10)
    current_lili.details.sensitivity.instep = changeValue(current_lili.details.sensitivity.instep, sen_instep, 0, 10)
    current_lili.details.sensitivity.foot = changeValue(current_lili.details.sensitivity.foot, sen_foot, 0, 10)

    current_lili.details.manners.lady = changeValue(current_lili.details.manners.lady, manners_lady, 0, 50)
    current_lili.details.manners.pet = changeValue(current_lili.details.manners.pet, manners_pet, 0, 50)
    current_lili.details.manners.mermaid = changeValue(current_lili.details.manners.mermaid, manners_mermaid, 0, 50)

    return current_lili
}