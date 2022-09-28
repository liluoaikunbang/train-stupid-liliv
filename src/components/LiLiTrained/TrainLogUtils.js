import store from '../../store/index'
import { assignObject } from '../../utils'

// 向日志中添加信息
export function addLog(log_flag, log_content, repeat){
    function push_store(logs){
        logs.push({flag:log_flag, content:log_content})
        store.commit('changeTrainLog', logs)
    }

    let logs = [].concat(store.state.train_log)
    
    if(!repeat&&logs.length){ // repeat=false时，添加信息确保与上一条信息不重复，防止刷屏
        if(logs[logs.length - 1].content != log_content){
            push_store(logs)
        }
        else{
            return
        }
    }
    else{
        push_store(logs)
    }
}

export function addTrainLogs(log_type) {
    const master_name = store.state.name
    const lili_name = store.state.current_lili.name
    if(log_type == 'blindfold'){ // 眼罩
        addLog(false, `${master_name}给${lili_name}戴上了眼罩【眼部束缚值增加】`, true)
        addLog(true, '好黑哦……什么都看不到了……', true)
    }
    if(log_type == 'ballgag'){ // 口球
        addLog(false, `${master_name}给${lili_name}戴上了口球【嘴部束缚值增加】`, true)
        addLog(true, '', true)
    }
    if(log_type == 'earplug'){ // 耳塞
        addLog(false, `${master_name}给${lili_name}戴上了耳塞【耳朵束缚值增加】`, true)
        addLog(true, '耳朵有些痒痒的', true)
    }
    if(log_type == 'front_hand_binding'){ // 前手缚
        addLog(false, `${master_name}将${lili_name}的双手并拢，用绳索将手腕缠绕捆紧，并在中间纵向加固。【手臂束缚值增加】`, true)
        addLog(true, '主人要不要再多捆一下下', true)
    }
    if(log_type == 'back_hand_binding'){ // 后手缚
        addLog(false, `${master_name}将${lili_name}的双手在背后并拢，将手腕牢牢捆紧。【手臂束缚值增加】`, true)
        addLog(true, '手手捆在后面就没法服侍主人了哦', true)
    }
    if(log_type == 'box_binding'){ // 日式盒缚
        addLog(false, `${master_name}将${lili_name}的双手在身后平行反绑，多余的绳索缠绕过胸部上下，将她的胸胸勒得更加丰满。【手臂束缚值增加】`, true)
        addLog(true, '唔~很温柔的捆绑呢', true)
    }
    if(log_type == 'straight_arm_binding'){ // 欧式直臂
        addLog(false, `${master_name}将${lili_name}的双手反剪，从手腕到大臂均并拢捆紧，让她的双臂无法分开。【手臂束缚值增加】`, true)
        addLog(true, '紧紧的捆绑，很安心~', true)
    }
    if(log_type == 'back_prayer_binding'){ // 后手观音缚
        addLog(false, `${master_name}将${lili_name}的双手在背后吊高，手指向上呈反拜姿势，将手腕到手肘分别捆紧，大小臂也折叠紧缚在一起。【手臂束缚值增加】`, true)
        addLog(true, '唔~双手一点也动不了惹', true)
    }
    if(log_type == 'tape_wrap_fingers'){ // 胶带包手
        addLog(false, `${master_name}将${lili_name}的双手握拳，用胶带包裹成两个圆球。【手指束缚值增加】`, true)
        addLog(true, '手指也要绑起来莫', true)
    }
    const bondage={
        // 下身拘束
        leg_binding:false, // 并腿缚
        open_leg_binding:false,  // M字开腿缚
        ball_binding:false, // 桃缚
        // 全身加固
        K9_binding:false, // K9宠物拘束
        horse_binding:false, // 马奴拘束
        X_binding:false, // X架拘束
        mermaid_binding:false, // 乳胶人鱼套装
        mummified_head_binding:false, // 木乃伊拘束（包头）
        ligature_mummified_binding:false, // 绷带木乃伊（不包头）
        tape_mimmified_binding:false, // 胶带木乃伊（不包头）
        one_stockings:false, // 单层丝袜拘束
        two_stockings:false, // 两层丝袜拘束
        three_stockings:false, // 三层丝袜拘束
        five_stockings:false, // 五层丝袜拘束
    }
}





