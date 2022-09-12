// 超参数存放
export const hyperParameters = {
    max_lili:4, // 最多同时拥有的笨璃璃个数
    max_purchase_lili:4, // 售卖笨璃璃页面同时展示的笨璃璃个数
}

// 给数组中添加元素，并返回新数组
export function arrayAdd(array, item){
    let new_array = array.push(item)
    return new_array
}

// 从数组中删除指定元素
export function arrayDelete(array, item){
    array = array.filter(function(element) {
        return element != item
    })
    return array
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

// 向日志中添加信息，但需要先确保与上一条信息不重复
export function addLog(log, message){
    const log_array = log.split('\n')
    if(message != log_array[log_array.length - 2]){ // 因为通过\n进行分割，数组中最后一个元素为空，倒数第二个元素才是需要比较的
        log += message + '\n'
    }
    return log
}

