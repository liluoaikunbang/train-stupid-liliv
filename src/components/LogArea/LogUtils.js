import { h } from 'vue'
import store from '../../store/index'
import { ElNotification } from 'element-plus'
import { assignObject, transformTime } from '../../utils'


const log_type_object = {
    tip:'游戏日志',
    bondage:'捆绑日志',
    train:'训练日志',
    modkfy:'改造日志',
    event:'事件日志',
    sale:'派遣事件'
}

// 向日志中添加信息
export function addLog(log_type, log_content, repeat){
    function push_store(logs){
        let time_object = assignObject(transformTime(store.state.time))
        logs.push({type:log_type, content:log_content, time:{day:time_object.day, hour:time_object.hour, minute:time_object.minute}})
        store.commit('changeLog', logs)
    }

    let logs = store.state.log

    ElNotification({ // 侧边栏提示信息
        title: log_type_object[log_type],
        message: h('i', { style: 'color: teal' }, log_content),
        duration: 2000,
        position: 'bottom-right',
      })
    
    if(!repeat){ // repeat=false时，添加信息确保与上一条信息不重复，防止刷屏
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





