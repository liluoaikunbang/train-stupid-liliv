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
            <el-scrollbar>
                <div class="attributes">
                    <Attributes :lili_flag="'attribute'" :custom_flag="true" :lili_item="current_lili" :image_flag="true" />
                </div>
            </el-scrollbar>
        </el-card>
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>{{ current_lili.num }}号笨璃璃</span>
                    <span>姓名：{{ current_lili.name }}</span>
                    <span>详细信息</span>
                </div>
            </template>
            <el-scrollbar>
                <div class="attributes">
                    <Attributes :lili_flag="'details'" :lili_item="current_lili" :long_flag="true" />
                </div>
            </el-scrollbar>
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
        margin-bottom: 6px;
        background: rgb(234, 242, 249, 0.9);
        border-style: solid;
        border-width: 3px;
        border-color: black;
        border-radius:10px 10px 10px 10px;
    }
    :deep(.el-card__header) {
        border-bottom-style: solid;
        border-bottom-width: 3px;
        border-bottom-color: rgb(234, 242, 249);
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
    .attributes {
        width: 100%;
        height: 200px;
    }
</style>