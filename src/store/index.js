import { STATEMENT_TYPES } from '@babel/types'
import { createStore } from 'vuex'
import { assignObject } from '../utils'

export default createStore({
  state: {
    time:0, // 游戏内时间系统
    money:100,
    name:'无名氏', // 主人的名字
    lilis:[], // 目前已有的笨璃璃
    current_id:null, // 当前正在调教的笨璃璃的num值
    current_lili:{}, // 当前正在调教的笨璃璃属性
    log:[{type:'tip', content:'欢淫来到笨笨学园', time:{day:0, hour:0, minute:0}}], // 游戏日志
    train_log:[],
    special_button_flags:{bondage:[]}, // 捆绑和持续调教的开关属性储存
    // 不保存localstage的数据
    train_display:null, // 当前调教页面中的功能部分正在展示的button
    sale_display:null, // 当前派遣页面中的功能部分正在展示的button
    ending_display:null, // ending页面准备展示的cg等
    log_display_flag:false, // 判断当前drawer是否显示log
    menu_display_flag:false, // 判断当前drawer是否显示游戏菜单
  },
  getters: {
  },
  mutations: {
    // 注意state值如果是数组或字典时一定要使用值传递而不是指针（=）传递，因为指针一直不变，会导致watch监听不到state的变化
    changeTime(state, time){
      state.time = time
      console.log(`vuex改变-时间变为${time}分钟`)
    },
    addTime(state, time){
      state.time += time
      console.log(`vuex改变-时间增加${time}分钟`)
    },
    addMoney(state, num){
      state.money += num
      console.log(`vuex改变-金币增加${num}`)
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
      state.lilis = [].concat(lilis)
      console.log(`vuex改变-当前已有的笨璃璃信息改变`)
    },
    changeCurrentId(state, new_id){
      state.current_id = new_id
      console.log(`vuex改变-当前调教的笨璃璃num变为${new_id}`)
    },
    changeCurrentLiLi(state, new_lili){
      state.current_lili = assignObject(new_lili)
      console.log(`vuex改变-当前调教的笨璃璃属性变为${new_lili}`)
    },
    changeLog(state, new_log){
      state.log = [].concat(new_log)
      console.log(`vuex改变-系统日志更改`)
    },
    changeTrainLog(state, new_log){
      state.train_log = [].concat(new_log)
      console.log(`vuex改变-调教日志更改`)
    },
    changeSpecialButtonFlags(state, new_flags){
      state.special_button_flags = assignObject(new_flags)
      console.log(`vuex改变-当前特殊按钮flag变为${new_flags}`)
    },
    changeTrainDisplay(state, new_flag){
      state.train_display = new_flag
    },
    changeSaleDisplay(state, new_flag){
      state.sale_display = new_flag
    },
    changeEndingDisplay(state, new_flag){
      state.ending_display = new_flag
    },
    changeLogDisplayFlag(state, log_display_flag){
      state.log_display_flag = log_display_flag
    },
    changeMenuDisplayFlag(state, menu_display_flag){
      state.menu_display_flag = menu_display_flag
    },
  },
  actions: {
  },
  modules: {
  }
})
