<template>
    <div class="main" id="log_area">
        <LogItem v-for="item in log" :key="item" :log_flag="item.type" :log_content="item.content" :log_time="item.time" />
    </div>
</template>
<script>
    import { reactive, toRefs, watch, onMounted } from 'vue'
    import { useStore } from 'vuex'
    import LogItem from './LogItem.vue'
    export default {
        name:"log_area",
        components:{
            LogItem,
        },
        setup(){
            const store = useStore()
            const data = reactive({
                log:store.state.log
            })

            // 日志栏自动滚动到底部
            const scrollDown=()=>{
                var log_content = document.getElementById('log_area')
                log_content.scrollTop = log_content.scrollHeight
            }

            onMounted(() => {
                scrollDown()
            })
            
            watch(() => store.state.log, (val, old) => {
                data.log = val
            })
            watch(() => store.state.log_display_flag, (val, old) => {
                setTimeout(()=>{ // 因为vue动态更新dom，监听到的信息只是dom更新前的信息，会导致log无法滑动到最底部，因此加入异步操作
                    scrollDown()
                },0)
            })

            return {
                ...toRefs(data)
            }
        }
    }
</script>
<style scoped>
    .main {
        width: 100%;
        height: 95%;
        /* margin-top: 20px; */
        margin: 0px;
        padding: 0px;
        /* background: rgb(234, 242, 249);
        border-style: solid;
        border-width: 1px;
        border-color: black; */
        overflow-y: auto;
        overflow-x: hidden;
    }
</style>