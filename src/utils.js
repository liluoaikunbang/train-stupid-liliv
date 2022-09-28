import store from './store/index'
import { ElMessageBox } from 'element-plus'

// 超参数存放
export const hyperParameters = {
    max_lili:4, // 最多同时拥有的笨璃璃个数
    max_purchase_lili:4, // 售卖笨璃璃页面同时展示的笨璃璃个数
}

// 给数组中添加元素，且如果重复就不添加
export function arrayAdd(array, item){
    if(array.includes(item)){
        return array
    }
    else{
        array.push(item)
        return array
    }
}

// 从数组中删除指定元素，如果没有则返回原数组
export function arrayDelete(array, item){
    array = array.filter(function(element) {
        return element != item
    })
    return array
}

// 字典循环key赋值，防止直接赋值导致的指针错误
export function assignObject(old_object){
    let new_object = {}
    for(let key in old_object){
        new_object[key] = old_object[key]
    }
    return new_object
}

// 返回[min, max]的随机整数
export function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min
}


// 从[{},{},{}]类型的数据中找到num属性相同的字典的对应编号
export function getCurrentLiLi(list, target_num) {
    let target_id = null
    for(let i=0; i<list.length; i++){
        let current_num = list[i].num
        if(current_num == target_num){
            target_id = i
            break
        }
        if(i === list.length - 1){
            return false // 如果没找到，则返回false
        }
    }
    return target_id
}
// 列表中元素被删除之后的改动：从[{},{},{}]类型的数据中根据num从小到大重新排序，填补中间的num空值
export function sortLiLis(list, current_id) {
    // 如果之前被删除的元素是最后一个，则直接return原数组即可
    if(current_id == list.length){
        return list
    }
    // 否则从被删除的元素开始，后续每个元素的num都-1
    for(let i=current_id; i<list.length; i++){
        list[i].num -= 1
    }
    return list
}

// 修改全局变量中的lilis
export function changeLiLisState(lili_num, lili_item){
    let lilis = store.state.lilis
    lilis[getCurrentLiLi(lilis, lili_num)] = lili_item
    store.commit('changeLiLis', lilis)
}

// 增加或减少金币，并自定义边界值
export function addMoney(add_money){
    let money = store.state.money + add_money
    if(money < 0){
        ElMessageBox.alert('金币不足！', '错误', {confirmButtonText: '好的'})
        return false
    } else{
        store.commit('changeMoney', money)
        return true
    }
}


// 将时间从分钟转化为天/小时/分钟这种类型
export function transformTime(time){
    const all_minute = time.toFixed(0) // 总分钟数
    const minute = all_minute % 60 // 获得分钟数
    const all_hour = Math.floor(all_minute / 60) // 总小时数，直接去尾，余下的分钟数在上一行计算
    const hour = all_hour % 12 // 获得小时数
    const day = Math.floor(all_hour / 12)
    return {day:day, hour:hour, minute:minute}
}



