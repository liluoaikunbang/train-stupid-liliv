<template>
  <div class="common-layout">
    <el-container>
      <el-header class="common-header flex-flaot">
        <div class="flex">
            <h1 class="title">笨笨学园</h1>
            <div class="title-information">
                <span class="information-content">
                    <el-tooltip class="box-item" effect="light" placement="bottom">
                        <template #content><p class="tooltip">因为主人也是要休息的，所以每日调教时间为12小时而不是24小时哦！</p></template>
                        时间：{{ day }}天{{ hour }}小时{{ minute }}分钟
                    </el-tooltip>
                </span>
                <span class="information-content">
                    <el-tooltip class="box-item" effect="light" placement="bottom">
                        <template #content><p class="tooltip">笨笨学园里面的通用货币，可以用于采摘笨璃璃，购买调教道具等，派遣笨璃璃去打工可以挣得大量球币哦！</p></template>
                        球币:{{ money }}枚
                    </el-tooltip>
                </span>
            </div>
        </div>
        <div class="right">
            <p class="name">主人：{{ name }}</p>
            <el-button color="blue" type="primary" plain @click="handleDisplayLog">游戏日志</el-button>
            <el-button color="blue" type="primary" plain @click="handleDisplayMenu">游戏菜单</el-button>
        </div>
      </el-header>
      <el-container>
        <el-aside class="common-aside" width="200px">
            <el-menu
                background-color="rgb(195, 105, 165)"
                text-color="black"
                active-text-color="rgb(24, 141, 12)"
                :router="true"
            >
                <el-menu-item-group>
                    <el-menu-item index="/purchased">笨笨生命树</el-menu-item>
                    <el-menu-item index="/existed">笨笨收容所</el-menu-item>
                    <el-menu-item index="/trained">笨笨调教室</el-menu-item>
                    <el-menu-item index="/sold">笨笨派遣处</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="2">
                    <template #title><p class="menu-item">笨笨商业街</p></template>
                    <el-menu-item>冷狼杂货店</el-menu-item>
                    <el-menu-item>夕月调教室</el-menu-item>
                </el-sub-menu>
            </el-menu>
        </el-aside>
        <el-main>
            <img src="../assets/background.jpg" class="background">
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
    <LogDrawer />
    <LayourDrawer />
  </div>
</template>
<script>
  import { reactive, toRefs, watch } from 'vue';
  import { useStore } from 'vuex'
  import { useRouter, onBeforeRouteUpdate } from 'vue-router'
  import { assignObject, transformTime, changeLiLisState } from '../utils';
  import LogDrawer from '../components/LogArea/LogDrawer.vue'
  import LayourDrawer from '../components/Layout/LayoutDrawer.vue'
  export default{
    name:"home",
    components:{
        LogDrawer,
        LayourDrawer,
    },
    setup() {
        const store = useStore()
        const router = useRouter()

        // 跳转页面前的操作（使用路由守卫实现）
        onBeforeRouteUpdate((to) => {
            // 如果当前存在被调教的笨璃璃，则替换本地对应的笨璃璃信息。
            if(store.state.current_id!=null){
                changeLiLisState(store.state.current_id, store.state.current_lili)
            }
        })
        // 刷新，关闭页面前提示是否存档
        // window.onbeforeunload = e => {
        //     // return '' // 加入这句则会在页面刷新前弹出提示
        // }

        const data = reactive({
            day:0,
            hour:0,
            minute:0,
            money:100,
            name:'',
        })
        

        // 初始化数据
        let time_object = assignObject(transformTime(store.state.time))
        data.day = time_object.day
        data.hour = time_object.hour
        data.minute = time_object.minute
        data.money = store.state.money
        data.name = store.state.name

        // 监听全局属性变化，随时更改页面中全局数据的值
        watch(() => store.state.time, (val, old) => {
            time_object = assignObject(transformTime(val))
            data.day = time_object.day
            data.hour = time_object.hour
            data.minute = time_object.minute
        })
        watch(() => store.state.money, (val, old) => {
            data.money = val
        })
        watch(() => store.state.name, (val, old) => {
            data.name = val
        })

        // 游戏日志，打开日志
        const handleDisplayLog=()=>{
            store.commit('changeLogDisplayFlag', true)
        }
        // 游戏菜单，打开菜单
        const handleDisplayMenu=()=>{
            store.commit('changeMenuDisplayFlag', true)
        }

        return {
            ...toRefs(data), //toRefs函数让模板中直接使用data中的内容而不用加data.
            handleDisplayLog,
            handleDisplayMenu,
        }
    }
  }
</script>
<style scoped>
    .flex-flaot{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .flex{
        display: flex;
        align-items: center;
    }
    .el-container{
        height: 100vh;
    }
    .common-header{
        background: rgb(187, 93, 149);
        display: flex;
    }
    .common-aside{
        background: rgb(195, 105, 165);
    }
    .el-main{
        /* background: rgb(233, 220, 176); */
        padding: 0;
        margin: 0;
    }
    .background{
        width: 100%;
        color: rgb(24, 141, 12);
        height: 100%;
        opacity: 1;
        /* 背景置于底层 */
        position: absolute;
        z-index: -1;
    }
    .title{
        color: black;
        font-size: 30px;
    }
    .title-information{
        position: absolute;
        left: 15%;
        color: black;
        font-size: 20px;
    }
    .information-content{
        margin-right: 15px;
    }
    .el-menu-item, .menu-item {
        font-size: 20px;
    }
    .right{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .name{
        color: black;
        font-size: 20px;
        margin-right: 30px;
    }
    .tooltip{
        font-size: 15px;
    }
</style>