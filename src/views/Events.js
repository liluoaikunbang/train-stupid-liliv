import store from '../store/index'
import { deleteArchive } from './Archive'
import { judgeFlag, changeAttributes } from '../components/Attributes/Attributes'

// 天数判定事件
export function handleNextDayEvents(){
    let current_lili = store.state.current_lili
    // 当天结束时的事件
    if(current_lili.state.includes('胀奶')){ // 胀奶
        store.commit('addLog', `${current_lili.name}的胀奶状态没有及时排除，她感觉胸部胀胀的很难受，健康程度下降了。\n`)
        current_lili = changeAttributes({input_lili:current_lili, healthy:-20})
    }

    // 第二天开始时的事件
    if(!current_lili.state.includes('胀奶')){ // 恢复
        store.commit('addLog', `经过了一夜的休息，${current_lili.name}感觉精神焕发，健康程度上升了。\n`)
        current_lili = changeAttributes({input_lili:current_lili, healthy:-20})
    }
    if(current_lili.state.includes('泌乳')){ // 开始胀奶
        store.commit('addLog', `在空孕催乳剂的作用下，${current_lili.name}开始胀奶了，增加胀奶状态。\n`)
        current_lili = changeAttributes({input_lili:current_lili, add_state:['胀奶']})
    }
    store.commit('changeCurrentLiLi', current_lili)
}

// 小时判定事件
export function handleNextHourEvents(){
    let current_lili = store.state.current_lili
    // 数值状态判定
    if(judgeFlag({current_lili, pleasure_breast:[1, Infinity]})){
        store.commit('addLog', `胸胸受到刺激，${current_lili.name}的性欲增加了。\n`)
        current_lili = changeAttributes({input_lili:current_lili, lust:current_lili.details.state_value.pleasure_breast})
        store.commit('changeCurrentLiLi', current_lili)
    }
    if(judgeFlag({current_lili, pleasure_vagina:[1, Infinity]})){
        store.commit('addLog', `下体受到刺激，${current_lili.name}的性欲增加了。\n`)
        current_lili = changeAttributes({input_lili:current_lili, lust:current_lili.details.state_value.pleasure_vagina*2})
        store.commit('changeCurrentLiLi', current_lili)
    }
    // 其他事件
    if(judgeFlag({current_lili, need_state:['发情']})){ // 发情
        store.commit('addLog', `${current_lili.name}持续发情，但仍然没有得到主人的排解，奴性增加了，但好感度下降了。\n`)
        current_lili = changeAttributes({input_lili:current_lili, servility:1, favorability:-1})
        store.commit('changeCurrentLiLi', current_lili)
    }
    store.commit('changeCurrentLiLi', current_lili)
}

// 即时判定事件
export function handleInstantEvents(){
    let current_lili = store.state.current_lili

    if(judgeFlag({current_lili, lust:[100, Infinity]})){ // 高潮
        store.commit('addLog', `${current_lili.name}未经主人允许达到了高潮，奴性下降了。\n`)
        current_lili = changeAttributes({input_lili:current_lili, servility:-5, lust:-1000})
    }
    if(judgeFlag({current_lili, stop_state:['发情'], lust:[80, Infinity]})){ // 开始发情
        store.commit('addLog', `${current_lili.name}的性欲积攒过多，开始发情状态。\n`)
        current_lili = changeAttributes({input_lili:current_lili, add_state:['发情']})
    }
    if(judgeFlag({current_lili, need_state:['发情'], lust:[0, 79]})){ // 停止发情
        store.commit('addLog', `${current_lili.name}的性欲下降，停止发情。\n`)
        current_lili = changeAttributes({input_lili:current_lili, delete_state:['发情']})
    }
    if(judgeFlag({current_lili, healthy:[0, 0]})){ // 笨璃璃死亡
        window.alert(`${current_lili.name}的健康值为零，笨璃璃死亡，游戏结束。\n`)
        deleteArchive()
    }
    store.commit('changeCurrentLiLi', current_lili)
}


