import { STATEMENT_TYPES } from '@babel/types'
import { createStore } from 'vuex'

export default createStore({
  state: {
    day:1,
    money:100,
    name:'无名氏', // 主人的名字
    lilis:[], // 目前已有的笨璃璃
    current_id:null, // 当前正在调教的笨璃璃的num值
    current_lili:{}, // 当前正在调教的笨璃璃属性
    train_log:'欢淫来到笨笨学园。\n', // 调教时的日志
    special_button_flags:{bondage:[]}, // 特殊的按钮flag存储，即点击后flag=2的按钮存储
    train_display:null, // 当前调教页面中的功能部分正在展示的button
  },
  getters: {
  },
  mutations: {
    addDay(state, num){
      state.day += num
      console.log(`vuex改变-天数+${num}`)
    },
    changeDay(state, num){
      state.day = num
      console.log(`vuex改变-天数变为${num}`)
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
    addTrainLog(state, message){
      state.train_log += message
      console.log(`vuex改变-调教日志更改`)
    },
    changeTrainLog(state, new_log){
      state.train_log = new_log
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
