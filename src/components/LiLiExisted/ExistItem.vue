<template>
    <div class="item" v-if="flag">
        <div class="item-content">
            <span class="item-information">编号：{{ lili_item.num }}</span>
            <span class="item-information">位置：{{ lili_item.whereabouts.place }}</span>
        </div>
        <div class="item-button">
            <el-button type="success" round class="button" v-if="choose_flag" @click="clickChoose">选择该笨笨</el-button>
            <el-button type="danger" round disabled class="button" v-else>已选择</el-button>
        </div>
    </div>
    <div class="item" v-else>
        <div class="item-content">
            <span class="item-information">暂无该类型的笨璃璃条目……</span>
        </div>
    </div>
</template>
<script>
    import { reactive, watch, toRefs } from 'vue'
    import { useStore } from 'vuex'
    import { addLog } from '../LogArea/LogUtils'
    export default {
        name:"exist_item",
        props:['flag', 'lili_item'],
        setup(props){
            const store = useStore()
            const data = reactive({
                choose_flag:true,
            })

            // 初始化current_flag
            if(props.flag&&store.state.current_id == props.lili_item.num){
                data.choose_flag = false
            }

            // 定义选择笨璃璃功能
            const clickChoose=()=>{
                store.commit('changeCurrentId', props.lili_item.num)
                store.commit('changeCurrentLiLi', props.lili_item)
                addLog('tip', `已选中${props.lili_item.num}号笨璃璃${props.lili_item.name}。`, false)
            }
            
            // 监测全局的current_id变化，每次变化时都查看是否是当前笨璃璃被选中
            watch(() => store.state.current_id, (val, old) => {
                if(props.flag&&store.state.current_id == props.lili_item.num){
                    data.choose_flag = false
                }
                else{
                    data.choose_flag = true
                }
            })

            return {
                ...toRefs(data),
                clickChoose,
            }
        }
    }
</script>
<style scoped>
    .item {
        margin-left: 15px;
        margin-right: 20px;
        margin-bottom: 15px;
        font-size: 17px;
        width: 500px;
        height: 50px;
        display: flex;
        background: rgb(195, 225, 251);
        justify-content: space-between;
        border-style: solid;
        border-width: 2px;
        border-color: black;
        box-shadow:5px 5px 10px 5px rgb(193, 222, 228);
        border-radius:15px 15px 15px 15px;
    }
    .item-content {
        margin-top: 15px;
        margin-left: 10px;
    }
    .item-information {
        margin-right: 15px;
    }
    .item-button {
        margin-right: 10px;
        margin-top: 8px;
    }
</style>