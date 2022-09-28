import { judgeFlag } from '../Attributes/Attributes'
import store from '../../store/index'
import { arrayAdd, arrayDelete } from '../../utils'
import { addLog } from '../LogArea/LogUtils'
import { add } from 'lodash'


// 判断笨璃璃当前的特长
export function judgeSpecialty(current_lili) {
    if(judgeFlag({current_lili:current_lili, milk:[5, Infinity]})){
        current_lili.specialty = arrayAdd(current_lili.specialty, '奶牛体质')
    } else {
        current_lili.specialty = arrayDelete(current_lili.specialty, '奶牛体质')
    }
    if(judgeFlag({current_lili:current_lili, pain_love:[20, Infinity]})){
        current_lili.specialty = arrayAdd(current_lili.specialty, '恋痛体质')
    } else {
        current_lili.specialty = arrayDelete(current_lili.specialty, '恋痛体质')
    }
    if(judgeFlag({current_lili:current_lili, fluid:[20, Infinity]})){
        current_lili.specialty = arrayAdd(current_lili.specialty, '涩涩先锋')
    } else {
        current_lili.specialty = arrayDelete(current_lili.specialty, '涩涩先锋')
    }
    if(judgeFlag({current_lili:current_lili, manners_pet:[30, Infinity]})){
        current_lili.specialty = arrayAdd(current_lili.specialty, '可爱萌宠')
    } else {
        current_lili.specialty = arrayDelete(current_lili.specialty, '可爱萌宠')
    }
    if(judgeFlag({current_lili:current_lili, manners_mermaid:[30, Infinity]})){
        current_lili.specialty = arrayAdd(current_lili.specialty, '性感人鱼')
    } else {
        current_lili.specialty = arrayDelete(current_lili.specialty, '性感人鱼')
    }
    if(judgeFlag({current_lili:current_lili, manners_lady:[30, Infinity]})){
        current_lili.specialty = arrayAdd(current_lili.specialty, '成熟马奴')
    } else {
        current_lili.specialty = arrayDelete(current_lili.specialty, '成熟马奴')
    }
    if(judgeFlag({current_lili:current_lili, sub_value:[80, Infinity]})){
        current_lili.specialty = arrayAdd(current_lili.specialty, '资深绳模')
    } else {
        current_lili.specialty = arrayDelete(current_lili.specialty, '资深绳模')
    }
    return current_lili
}

// 劳务派遣每日收入计算
export function everydayDispatch(){
    const lilis = store.state.lilis
    let add_money = 0
    if(lilis.length){
        for(let i=0; i<lilis.length; i++){
            if(lilis[i].whereabouts.place == '奶牛榨乳坊'){
                add_money += 10
            }
            if(lilis[i].whereabouts.place == '刑讯实验室'){
                add_money += 10
            }
            if(lilis[i].whereabouts.place == '潮吹发电厂'){
                add_money += 10
            }
            if(lilis[i].whereabouts.place == '宠物咖啡厅'){
                add_money += 10
            }
            if(lilis[i].whereabouts.place == '深海人鱼展'){
                add_money += 10
            }
            if(lilis[i].whereabouts.place == '小马娘车站'){
                add_money += 10
            }
            if(lilis[i].whereabouts.place == '绳摄工作室'){
                add_money += 10
            }
        }
    }
    if(add_money){
        store.commit('addMoney', add_money)
        addLog('event', `当日笨璃璃劳务派遣收入共${add_money}球币`, true)
    }
}










