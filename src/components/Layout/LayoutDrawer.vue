<template>
    <el-drawer size="10%" v-model="data.flag" :direction="'rtl'" :before-close="handleClose" title="游戏菜单">
        <template #default>
            <div class="menu-button">
                <el-button color="blue" type="primary" plain @click="clickIndex">回到首页</el-button>
            </div>
            <div class="menu-button">
                <el-button color="blue" type="primary" plain @click="clickRestart">重新开始</el-button>
            </div>
            <div class="menu-button">
                <el-button color="blue" type="primary" plain @click="clickSave">保存游戏</el-button>
            </div>
            <div class="menu-button">
                <el-button color="blue" type="primary" plain @click="clickLoad">读取游戏</el-button>
            </div>
            <div class="menu-button">
                <el-button color="blue" type="primary" plain @click="clickClear">删除存档</el-button>
            </div>
            <div class="menu-button">
                <el-button color="blue" type="primary" plain @click="clickCode">游戏源码</el-button>
            </div>
            <div class="menu-button">
                <el-button color="blue" type="primary" plain @click="clickHelp">游戏帮助</el-button>
            </div>
        </template>
    </el-drawer>
</template>
<script>
    import { useStore } from 'vuex'
    import { useRouter } from 'vue-router'
    import { reactive, watch } from 'vue'
    import { ElMessageBox } from 'element-plus'
    import { saveArchive, loadArchive, deleteArchive } from './Archive'
    import { addLog } from '../LogArea/LogUtils'
    export default {
        name:"menu_drawer",
        setup(){
            const store = useStore()
            const router = useRouter()
            const data = reactive({
                flag:store.state.menu_display_flag,
            })

            watch(() => store.state.menu_display_flag, (val, old) => {
                data.flag = val
            })

            const handleClose=()=>{ // 在drawer关闭前的操作
                store.commit('changeMenuDisplayFlag', false)
            }

            const clickIndex=()=>{ // 回到首页
                router.push('/index')
                store.commit('changeMenuDisplayFlag', false)
            }

            const clickRestart=()=>{ // 重新开始
                router.push('/index')
                setTimeout(()=>{ // 刷新页面与其他操作不能同步执行，需要调用异步函数
                    router.go(0)
                },100)
            }

            const clickSave=()=>{ // 保存游戏
                addLog('tip', '存档已成功保存', false)
                saveArchive()
                store.commit('changeMenuDisplayFlag', false)
            }

            const clickLoad=()=>{ // 读取存档
                router.push('/index')
                if(!loadArchive()){ // 如果没有存档，则给一个提示
                    ElMessageBox.alert('未找到已有存档！', '错误', {confirmButtonText: '好的'})
                }
                store.commit('changeMenuDisplayFlag', false)
            }

            const clickClear=()=>{ // 删除存档
                addLog('tip', '当前已有存档已成功删除', false)
                deleteArchive()
                store.commit('changeMenuDisplayFlag', false)
            }
            
            const clickCode=()=>{ // 游戏源码，跳转到指定页面
                window.open('https://github.com/liluoaikunbang/train-stupid-liliv')
                store.commit('changeMenuDisplayFlag', false)
            }

            const clickHelp=()=>{ // 游戏帮助，跳转到帮助页面
                router.push('/help')
                store.commit('changeMenuDisplayFlag', false)
            }

            return{
                data,
                handleClose,
                clickIndex,
                clickRestart,
                clickSave,
                clickClear,
                clickCode,
                clickHelp,
                clickLoad,
            }
        }
    }
</script>
<style scoped>
    .menu-button {
        margin-bottom: 20px;
    }
</style>