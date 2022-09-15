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
                        调教时间：{{ time.day }}天{{ time.hour }}小时{{ time.minute }}分钟
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
            <el-button type="primary" plain @click="$router.replace('/index')">回到首页</el-button>
            <el-button type="primary" plain @click="handleRestart">重新开始</el-button>
            <el-button type="primary" plain @click="$router.replace('/help')">游戏帮助</el-button>
            <el-button type="primary" plain @click="handleCode">游戏源码</el-button>
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
                    <el-menu-item index="/purchased">笨笨生命树</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <el-menu-item index="/existed">笨笨收容所</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <el-menu-item index="/trained">笨笨调教室</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <el-menu-item index="/sold">笨笨派遣处</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <el-menu-item>笨笨商业街</el-menu-item>
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
  import { useRouter } from 'vue-router'
  import { onBeforeRouteUpdate } from 'vue-router';
  import { deleteArchive, saveArchive, loadArchive } from './Archive'
  export default{
    name:"home",
    setup() {
        const store = useStore()
        const router = useRouter()

        const data = reactive({
            time:store.state.time,
            money:store.state.money,
            name:store.state.name,
        })

        // 读档并初始化数据
        loadArchive()
        data.time = store.state.time
        data.money = store.state.money
        data.name = store.state.name

        // 监听全局属性变化，随时更改页面中全局数据的值
        watch(() => store.state.time, (val, old) => {
            data.time = val
        })
        watch(() => store.state.money, (val, old) => {
            data.money = val
        })
        watch(() => store.state.name, (val, old) => {
            data.name = val
        })

        // 重新开始。清除本地信息并刷新页面
        const handleRestart=()=>{
            router.push('/index')
            store.commit('restartState')
            deleteArchive()
        }
        // 游戏源码，跳转到指定页面
        const handleCode=()=>{
            window.open('https://github.com/liluoaikunbang/train-stupid-liliv')
        }

        // 跳转页面前存档（使用路由守卫实现）
        onBeforeRouteUpdate((to) => {
            saveArchive()
        })
        // 刷新，关闭页面前存档
        window.onbeforeunload = e => {
            saveArchive()
            // return '' // 加入这句则会在页面刷新前弹出提示
        }

        return {
            ...toRefs(data), //toRefs函数让模板中直接使用data中的内容而不用加data.
            handleRestart,
            handleCode,
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
    .information-content{
        margin-right: 15px;
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
    .tooltip{
        font-size: 15px;
    }
</style>