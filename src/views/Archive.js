import store from '../store/index'
import { getCurrentLiLi } from '../utils';


// 存档
export function saveArchive(){            
    console.log("更新页面中。Layout.vue正在保存变量到本地。")

    // 如果当前存在被调教的笨璃璃，则替换本地对应的笨璃璃信息。
    if(store.state.current_id!=null){
        let lilis = store.state.lilis
        lilis[getCurrentLiLi(lilis, store.state.current_id)] = store.state.current_lili
        store.commit('changeLiLis', lilis)
    }

    // 保存信息
    localStorage.setItem('time', JSON.stringify(store.state.time))
    localStorage.setItem('money', JSON.stringify(store.state.money))
    localStorage.setItem('name', store.state.name)
    localStorage.setItem('lilis', JSON.stringify(store.state.lilis))
    localStorage.setItem('current_id', JSON.stringify(store.state.current_id))
    localStorage.setItem('current_lili', JSON.stringify(store.state.current_lili))
    localStorage.setItem('log', store.state.log)
    localStorage.setItem('special_button_flags', JSON.stringify(store.state.special_button_flags))
}

// 读档
export function loadArchive(){
    if(localStorage.getItem('time')){
        store.commit('changeTime', JSON.parse(localStorage.getItem('time')))
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
        store.commit('changeLog', localStorage.getItem('log'))
    }
    if(localStorage.getItem('special_button_flags')){
        store.commit('changeSpecialButtonFlags', JSON.parse(localStorage.getItem('special_button_flags')))
    }
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
