import { STATEMENT_TYPES } from '@babel/types'
import { createStore } from 'vuex'

export default createStore({
  state: {
    time:{day:0, hour:0, minute:0}, // 游戏内时间系统
    money:100,
    name:'无名氏', // 主人的名字
    lilis:[], // 目前已有的笨璃璃
    current_id:null, // 当前正在调教的笨璃璃的num值
    current_lili:{}, // 当前正在调教的笨璃璃属性
    log:'欢淫来到笨笨学园。\n', // 游戏日志
    special_button_flags:{bondage:[]}, // 特殊的按钮flag存储，即点击后flag=2的按钮存储
    // 不保存localstage的数据
    train_display:null, // 当前调教页面中的功能部分正在展示的button
  },
  getters: {
  },
  mutations: {
    restartState(state){ // 重新初始化state
      state.time = {day:0, hour:0, minute:0}
      state.money = 100
      state.name = '无名氏'
      state.lilis = []
      state.current_id = null
      state.current_lili = {}
      state.log = '欢淫来到笨笨学园。\n'
      state.special_button_flags = {bondage:[]}
      state.train_display = null
    },
    changeTime(state, time){
      state.time = time
      console.log(`vuex改变-时间变为${time}`)
    },
    addDay(state, day){
      state.time.day += day
      console.log(`vuex改变-天数变为${day}`)
    },
    addHour(state, hour){
      state.time.hour += hour
      if(state.time.hour<12){
        console.log(`vuex改变-小时数增加${hour}`)
      }
      else{
        state.time.hour -= 12
        state.time.day += 1
        console.log(`vuex改变-进入下一天`)
      }
    },
    addMinute(state, minute){
      state.time.minute += minute
      if(state.time.minute<60){
        console.log(`vuex改变-分钟数增加${minute}`)
      } 
      else{
        state.time.minute -= 60
        state.time.hour += 1
        console.log(`vuex改变-进入下一个小时`)
      }
    },
    changeMoney(state, num){
      state.money = num
      console.log(`vuex改变-金币变为${num}`)
    },
    changeName(state, new_name){
      state.name = new_name
      console.log(`vuex改变-主人的姓名变为${new_name}`)
    },
    changeLiLis(state, lilis){
      state.lilis = lilis
      console.log(`vuex改变-当前已有的笨璃璃信息改变`)
    },
    changeCurrentId(state, new_id){
      state.current_id = new_id
      console.log(`vuex改变-当前调教的笨璃璃num变为${new_id}`)
    },
    changeCurrentLiLi(state, new_lili){
      state.current_lili = new_lili
      console.log(`vuex改变-当前调教的笨璃璃属性变为${new_lili}`)
    },
    addLog(state, message){
      state.log += message
      console.log(`vuex改变-调教日志更改`)
    },
    changeLog(state, new_log){
      state.log = new_log
      console.log(`vuex改变-调教日志更改`)
    },
    changeSpecialButtonFlags(state, new_flags){
      state.special_button_flags = new_flags
      console.log(`vuex改变-当前特殊按钮flag变为${new_flags}`)
    },
    changeTrainDisplay(state, new_flag){
      state.train_display = new_flag
    }
  },
  actions: {
  },
  modules: {
  }
})
