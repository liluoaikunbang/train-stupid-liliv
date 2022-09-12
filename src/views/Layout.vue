<template>
  <div class="common-layout">
    <el-container>
      <el-header class="common-header flex-flaot">
        <div class="flex">
            <h1 class="title">笨笨学园</h1>
            <div class="title-information">
                第{{ day }}天
                金币:{{ money }}枚
            </div>
        </div>
        <div class="right">
            <p class="name">主人：{{ name }}</p>
            <el-button type="primary" plain @click="$router.replace('/index')">回到首页</el-button>
            <el-button type="primary" plain @click="handleRestart()">重新开始</el-button>
            <el-button type="primary" plain @click="$router.replace('/help')">游戏帮助</el-button>
        </div>
      </el-header>
      <el-container>
        <el-aside class="common-aside" width="200px">
            <el-menu
                background-color="none"
                text-color="#fff"
                :router="true"
            >
                <el-menu-item-group>
                    <el-menu-item index="/purchased">购买笨璃璃</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <el-menu-item index="/existed">已有笨璃璃</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <el-menu-item index="/trained">调教笨璃璃</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <el-menu-item index="/sold">派遣笨璃璃</el-menu-item>
                </el-menu-item-group>
            </el-menu>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
  import { reactive, toRefs, watch } from 'vue';
  import { useStore } from 'vuex'
  import { onBeforeRouteUpdate } from 'vue-router';
  import { getCurrentLiLi } from '../utils'
  export default{
    name:"home",
    setup() {
        const store = useStore()

        const data = reactive({
            day:store.state.day,
            money:store.state.money,
            name:store.state.name,
            lilis:store.state.lilis,
            current_id:store.state.current_id,
            current_lili:store.state.current_lili,
            train_log:store.state.train_log,
            special_button_flags:store.state.special_button_flags,
            train_display:store.state.train_display, // 不保存localstage
        })

        console.log('初始化全局数据')
        if(localStorage.getItem('day')){
            data.day = JSON.parse(localStorage.getItem('day'))
            store.commit('changeDay', data.day)
        }
        if(localStorage.getItem('money')){
            data.money = JSON.parse(localStorage.getItem('money'))
            store.commit('changeMoney', data.money)
        }
        if(localStorage.getItem('name')){
            data.name = localStorage.getItem('name')
            store.commit('changeName', data.name)
        }
        if(localStorage.getItem('lilis')){
            data.lilis = JSON.parse(localStorage.getItem('lilis'))
            store.commit('changeLiLis', data.lilis)
        }
        if(localStorage.getItem('current_id')){
            data.current_id = JSON.parse(localStorage.getItem('current_id'))
            store.commit('changeCurrentId', data.current_id)
        }
        if(localStorage.getItem('current_lili')){
            data.current_lili = JSON.parse(localStorage.getItem('current_lili'))
            store.commit('changeCurrentLiLi', data.current_lili)
        }
        if(localStorage.getItem('train_log')){
            data.train_log = localStorage.getItem('train_log')
            store.commit('changeTrainLog', data.train_log)
        }
        if(localStorage.getItem('special_button_flags')){
            data.special_button_flags = JSON.parse(localStorage.getItem('special_button_flags'))
            store.commit('changeSpecialButtonFlags', data.special_button_flags)
        }

        // 监听全局属性变化，随时更改页面中全局数据的值
        watch(() => store.state.day, (val, old) => {
            data.day = val
        })
        watch(() => store.state.money, (val, old) => {
            data.money = val
        })
        watch(() => store.state.name, (val, old) => {
            data.name = val
        })

        // 重新开始。清除本地信息并刷新页面
        const handleRestart=()=>{
            // 需要先刷新再清空本地，防止子页面在刷新前保存导致删除失败。
            location.reload()
            localStorage.removeItem('day')
            localStorage.removeItem('money')
            localStorage.removeItem('name')
            localStorage.removeItem('lilis')
            localStorage.removeItem('current_id')
            localStorage.removeItem('current_lili')
            localStorage.removeItem('train_log')
            localStorage.removeItem('special_button_flags')
        }

        // 跳转，刷新，关闭页面前将更改过的内容在本地保存
        const handleSave=()=>{            
            console.log("更新页面中。Layout.vue正在保存变量到本地。")

            // 如果当前存在被调教的笨璃璃，则替换本地对应的笨璃璃信息。
            if(store.state.current_id!=null){
                let lilis = store.state.lilis
                lilis[getCurrentLiLi(lilis, store.state.current_id)] = store.state.current_lili
                store.commit('changeLiLis', lilis)
            }

            // 保存信息
            localStorage.setItem('day', JSON.stringify(store.state.day))
            localStorage.setItem('money', JSON.stringify(store.state.money))
            localStorage.setItem('name', store.state.name)
            localStorage.setItem('lilis', JSON.stringify(store.state.lilis))
            localStorage.setItem('current_id', JSON.stringify(store.state.current_id))
            localStorage.setItem('current_lili', JSON.stringify(store.state.current_lili))
            localStorage.setItem('train_log', store.state.train_log)
            localStorage.setItem('special_button_flags', JSON.stringify(store.state.special_button_flags))
        }
        // 跳转页面前（使用路由守卫实现）
        onBeforeRouteUpdate((to) => {
            handleSave()
        });
        // 刷新，关闭页面前
        window.onbeforeunload = e => {
            handleSave()
            // return '' // 加入这句则会在页面刷新前弹出提示
        };

        return {
            ...toRefs(data), //toRefs函数让模板中直接使用data中的内容而不用加data.
            handleRestart,
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
        background: rgb(39, 45, 53);
        display: flex;
    }
    .common-aside{
        background: rgb(48, 55, 65);
    }
    .el-main{
        background: rgb(219, 231, 249);
        padding: 0;
        margin: 0;
    }
    .title{
        color: white;
        font-size: 30px;
    }
    .title-information{
        position: absolute;
        left: 15%;
        color: white;
        font-size: 20px;
    }
    .el-menu-item {
        font-size: 20px;
    }
    .right{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .name{
        color: white;
        font-size: 20px;
        margin-right: 30px;
    }
</style>