<template>
    <el-drawer v-model="data.flag" :direction="'rtl'" :before-close="handleClose" title="游戏日志">
        <template #default>
            <LogArea />
        </template>
        <template #footer>
            <div style="flex: auto">
                <el-button color="blue" type="primary" plain @click="clickClearLog">清空日志</el-button>
            </div>
        </template>
    </el-drawer>
</template>
<script>
    import { useStore } from 'vuex'
    import { reactive, watch } from 'vue'
    import LogArea from './LogArea.vue'
    export default {
        name:"log_drawer",
        components:{
            LogArea,
        },
        setup(){
            const store = useStore()
            const data = reactive({
                flag:store.state.log_display_flag,
            })

            watch(() => store.state.log_display_flag, (val, old) => {
                data.flag = val
            })

            const handleClose=()=>{ // 在drawer关闭前的操作
                store.commit('changeLogDisplayFlag', false)
            }

            const clickClearLog=()=>{ // 清空日志
                store.commit('changeLog', [{type:'tip', content:'欢淫来到笨笨学园', time:{day:0, hour:0, minute:0}}])
            }
            
            return {
                data,
                handleClose,
                clickClearLog,
            }
        }
    }
</script>
<style scoped>
</style>