<template>
    <el-card class="box-card" v-if="data.train_flag">
        <template #header>
            <div class="card-header">
                <span>{{ data.lili_item.num }}号笨璃璃</span>
                <span>姓名：{{ data.lili_item.name }}</span>
                <el-button type="success" v-if="data.lili_flag=='attribute'" @click="handleDetail">详细信息</el-button>
                <el-button type="success" v-if="data.lili_flag=='details'" @click="handleOriginal">基本信息</el-button>
            </div>
        </template>
        <Attributes :lili_flag="data.lili_flag" :lili_item="data.lili_item" />
    </el-card>
    <el-card class="box-card" v-else>
        <template #header>
            <div class="card-header">
                <span class="card-title">当前无选中的笨璃璃，请先从笨笨收容所中选择需要的笨璃璃</span>
            </div>
        </template>
        <Attributes :lili_flag="'none'" />
    </el-card>
</template>
<script>
    import Attributes from './Attributes/Attributes.vue'
    import { reactive, watch } from 'vue'
    import { useStore } from 'vuex'
    export default {
        name:"card_train_sale",
        components:{
            Attributes,
        },
        setup(){
            const store = useStore()
            const data = reactive({
                lili_item:store.state.current_lili,
                train_flag:store.state.current_id!=null,
                lili_flag:'attribute',
            })

            const handleDetail=()=>{
                data.lili_flag = 'details'
            }
            const handleOriginal=()=>{
                data.lili_flag = 'attribute'
            }

            // 使用watch监测current_lili的变化，随时更新属性
            watch(() => store.state.day, (val, old) => {
                console.log(val, old)
            })

            return {
                data,
                handleDetail,
                handleOriginal,
            }
        }
    }
</script>
<style scoped>
    .box-card {
        background: rgb(234, 242, 249);
        border-style: solid;
        border-width: 1px;
        border-color: black;
        width: 100%;
    }
    .card-header {
        /* 这三项组合代表元素横向排布并居中对齐 */
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .el-row {
        margin-bottom: 15px;
    }
    .card-title {
        font-weight: bold;
    }
    .card-comment-content {
        margin-right: 0px;
        height: 200px;
        overflow-y: auto;
        overflow-x: hidden;
    }
</style>