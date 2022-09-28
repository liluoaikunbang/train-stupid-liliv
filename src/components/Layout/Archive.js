import store from '../../store/index'
import { changeLiLisState } from '../../utils'


// 存档
export function saveArchive(){            
    // 保存信息
    localStorage.setItem('time', JSON.stringify(store.state.time))
    localStorage.setItem('money', JSON.stringify(store.state.money))
    localStorage.setItem('name', store.state.name)
    localStorage.setItem('lilis', JSON.stringify(store.state.lilis))
    localStorage.setItem('current_id', JSON.stringify(store.state.current_id))
    localStorage.setItem('current_lili', JSON.stringify(store.state.current_lili))
    localStorage.setItem('log', JSON.stringify(store.state.log))
    localStorage.setItem('special_button_flags', JSON.stringify(store.state.special_button_flags))
}

// 读档
export function loadArchive(){
    if(localStorage.getItem('time')){
        store.commit('changeTime', JSON.parse(localStorage.getItem('time')))
    } else {
        return false
    }
    if(localStorage.getItem('money')){
        store.commit('changeMoney', JSON.parse(localStorage.getItem('money')))
    }
    if(localStorage.getItem('name')){
        store.commit('changeName', localStorage.getItem('name'))
    }
    if(localStorage.getItem('lilis')){
        store.commit('changeLiLis', JSON.parse(localStorage.getItem('lilis')))
    }
    if(localStorage.getItem('current_id')){
        store.commit('changeCurrentId', JSON.parse(localStorage.getItem('current_id')))
    }
    if(localStorage.getItem('current_lili')){
        store.commit('changeCurrentLiLi', JSON.parse(localStorage.getItem('current_lili')))
    }
    if(localStorage.getItem('log')){
        store.commit('changeLog', JSON.parse(localStorage.getItem('log')))
    }
    if(localStorage.getItem('special_button_flags')){
        store.commit('changeSpecialButtonFlags', JSON.parse(localStorage.getItem('special_button_flags')))
    }
    return true
}

// 删除存档
export const deleteArchive=()=>{
    localStorage.removeItem('time')
    localStorage.removeItem('money')
    localStorage.removeItem('name')
    localStorage.removeItem('lilis')
    localStorage.removeItem('current_id')
    localStorage.removeItem('current_lili')
    localStorage.removeItem('log')
    localStorage.removeItem('special_button_flags')
}
