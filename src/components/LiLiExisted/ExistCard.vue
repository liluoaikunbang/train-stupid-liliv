<template>
    <div v-if="flag">
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>{{ current_lili.num }}号笨璃璃</span>
                    <span>姓名：{{ current_lili.name }}</span>
                    <span>基本信息</span>
                </div>
            </template>
            <Attributes :lili_flag="'attribute'" :lili_item="current_lili" :image_flag="true" />
        </el-card>
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>{{ current_lili.num }}号笨璃璃</span>
                    <span>姓名：{{ current_lili.name }}</span>
                    <span>详细信息</span>
                </div>
            </template>
            <Attributes :lili_flag="'details'" :lili_item="current_lili" />
        </el-card>
    </div>
    <div v-else>
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span class="card-title">当前未选中笨璃璃</span>
                    <span>基本信息</span>
                </div>
            </template>
            <Attributes :lili_flag="'none'" />
        </el-card>
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span class="card-title">当前未选中笨璃璃</span>
                    <span>详细信息</span>
                </div>
            </template>
            <Attributes :lili_flag="'none'" />
        </el-card>
    </div>
</template>
<script>
    import Attributes from '../Attributes/Attributes.vue'
    import { reactive, watch, toRefs } from 'vue'
    import { useStore } from 'vuex'
    export default {
        name:"card_train_sale",
        components:{
            Attributes,
        },
        setup(){
            const store = useStore()
            const data = reactive({
                flag:false,
                current_lili:null
            })

            // 判断flag
            const judgeFlag=()=>{
                if(store.state.current_id != null){
                    data.flag = true
                    data.current_lili = store.state.current_lili
                }
                else{
                    data.flag = false
                }
            }

            judgeFlag()

            watch(() => store.state.current_id, (val, old) => {
                judgeFlag()
            })

            return {
                ...toRefs(data)
            }
        }
    }
</script>
<style scoped>
    .box-card {
        margin-bottom: 10px;
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