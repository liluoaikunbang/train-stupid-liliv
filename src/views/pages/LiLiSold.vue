<template>
    <div class="main">
        <div class="left">
            <div class="button-main-title-top">
                笨璃璃去处选择
            </div>
            <el-space wrap class="button-group">
                <el-button type="primary" round v-if="flag" @click="saleMovie">SM电影工坊</el-button>
                <el-button type="primary" round disabled v-else>SM电影工坊</el-button>
                <el-button type="primary" round v-if="flag&&sale_flags.milk_flag" @click="saleMilk">牛奶工厂</el-button>
                <el-button type="primary" round disabled v-else>牛奶工厂</el-button>
                <el-button type="primary" round v-if="flag&&sale_flags.electric_flag" @click="saleElectric">水力发电厂</el-button>
                <el-button type="primary" round disabled v-else>水力发电厂</el-button>
                <el-button type="primary" round v-if="flag&&sale_flags.torture_flag" @click="saleTorture">刑讯实验室</el-button>
                <el-button type="primary" round disabled v-else>刑讯实验室</el-button>
            </el-space>
        </div>
        <div class="right">
            <CardTrainSale 
                :flag="flag"
                :lili_item="current_lili"
            />
            <div class="messages">
                <textarea class="messages-comment" readonly v-model="sale_log"></textarea>
            </div>
        </div>
    </div>
</template>
<script>
    import { reactive, toRefs } from 'vue';
    import { useStore } from 'vuex'
    import { getCurrentLiLi, sortLiLis } from '../../utils'
    import CardTrainSale from '../../components/CardTrainSale.vue'
    export default {
        name:"lili_sold",
        components: {
            CardTrainSale,
        },
        setup() {
            const store = useStore()
            const data = reactive({
                current_lili:{},
                flag:'none',
                sale_flags:{
                    milk_flag:false,
                    electric_flag:false,
                    torture_flag:false,
                },
                sale_log:'欢淫来到笨笨学园！\n',
            })

            const current_id = store.state.current_id
            let lilis = store.state.lilis
            // 如果current_id不为null，则有笨璃璃，flag设置为true，并进行展示
            if(current_id != null){
                data.flag = 'attribute'
                const current_lili = lilis[getCurrentLiLi(lilis, current_id)]
                data.current_lili = current_lili
            }
            // 根据笨璃璃的特长和属性，确定可以安排的地方
            if(data.current_lili.specialty == '恋痛体质'){
                data.sale_flags.torture_flag = true
            }
            if(data.current_lili.specialty == '奶牛体质'){
                data.sale_flags.milk_flag = true
            }
            if(data.current_lili.specialty == '涩涩先锋'){
                data.sale_flags.electric_flag = true
            }

            // 按键功能
            // 通用按键功能
            const handleSale=()=>{
                data.flag = false
                lilis.splice(current_id, 1)
                lilis = sortLiLis(lilis, current_id)
                store.commit('changeCurrentId', null)
                store.commit('changeCurrentLiLi', {})
                store.commit('changeLiLis', lilis)
            }
            // SM电影工坊
            const saleMovie=()=>{
                data.sale_log += `${data.current_lili.name}已被送往SM电影工坊。\n`
                handleSale()
            }
            const saleMilk=()=>{
                data.sale_log += `${data.current_lili.name}已被送往牛奶工厂。\n`
                handleSale()
            }
            const saleElectric=()=>{
                data.sale_log += `${data.current_lili.name}已被送往水力发电厂。\n`
                handleSale()
            }
            const saleTorture=()=>{
                data.sale_log += `${data.current_lili.name}已被送往刑讯实验室。\n`
                handleSale()
            }

            return {
                ...toRefs(data), //toRefs函数让模板中直接使用data中的内容而不用加data.
                saleMovie,
                saleMilk,
                saleElectric,
                saleTorture,
            }
        }
    }
</script>
<style scoped>
    .main {
        display: flex;
        justify-content: space-between;
    }
    .left {
        background: rgb(234, 242, 249);
        border-style: solid;
        border-width: 1px;
        border-color: black;
        width: 50%;
        height: 70vh;
        margin-left: 50px;
    }
    .button-main-title-top {
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        margin-top: 5px;
    }
    .button-main-title {
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        margin-top: 10px;
        margin-bottom: 5px;
    }
    .button-title {
        text-align: center;
        font-size: large;
        font-weight: bold;
    }
    .button-group {
        margin-left: 10px;
        margin-right: 10px;
    }
    .right {
        width: 40%;
        height: 44vh;
        margin-right: 50px;
    }
    .box-card {
        background: rgb(234, 242, 249);
        border-style: solid;
        border-width: 1px;
        border-color: black;
        width: 100%;
    }
    .el-row {
        margin-bottom: 15px;
    }
    .card-header {
        /* 这三项组合代表元素横向排布并居中对齐 */
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .card-title {
        font-weight: bold;
    }
    .card-comment-content {
        margin-right: 0px;
    }
    .messages {
        width: 100%;
        height: 100%;
        margin-right: 3px;
        margin-top: 5px;
    }
    .messages-comment {
        background: white;
        border-style: solid;
        border-width: 1px;
        border-color: black;
        width: 100%;
        height: 100%;
        font-size: 15px;
        resize: none;
    }
</style>