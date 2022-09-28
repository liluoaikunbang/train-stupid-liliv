<template>
    <el-card class="box-card" v-if="data.train_flag == 'true'">
        <template #header>
            <div v-if="data.lili_flag=='attribute'" class="card-header">
                <span>{{ data.lili_item.num }}号笨璃璃</span>
                <span>姓名：{{ data.lili_item.name }}</span>
                <el-button type="success" v-if="data.lili_flag=='attribute'" @click="handleDetail">详细属性</el-button>
            </div>
            <div v-if="data.lili_flag=='details'" class="card-header">
                <el-switch v-model="data.soon_attribute_flag" active-text="临时属性" inactive-text="长期属性"
                    style="--el-switch-on-color: lightblue; --el-switch-off-color: pink"/>
                <el-button type="success" v-if="data.lili_flag=='details'" @click="handleOriginal">基本属性</el-button>
            </div>
        </template>
        <Attributes :lili_flag="data.lili_flag" :lili_item="data.lili_item" :custom_flag="true" :image_flag="false" 
            :long_flag="!data.soon_attribute_flag" :soon_flag="data.soon_attribute_flag" />
    </el-card>
    <el-card class="box-card" v-if="data.train_flag == 'false'">
        <template #header>
            <div class="card-header">
                <span class="card-title">当前笨璃璃已被派遣/收藏，需召回后才可继续调教</span>
            </div>
        </template>
        <Attributes :lili_flag="'none'" />
    </el-card>
    <el-card class="box-card" v-if="data.train_flag == 'none'">
        <template #header>
            <div class="card-header">
                <span class="card-title">当前无选中的笨璃璃，请先从笨笨收容所中选择需要的笨璃璃</span>
            </div>
        </template>
        <Attributes :lili_flag="'none'" />
    </el-card>
</template>
<script>
    import Attributes from '../Attributes/Attributes.vue'
    import { reactive, watch } from 'vue'
    import { useStore } from 'vuex'
    export default {
        name:"train_card",
        components:{
            Attributes,
        },
        setup(){
            const store = useStore()

            const handleFlag=()=>{
                if(store.state.current_id == null){
                    return 'none'
                }
                if(store.state.current_lili.whereabouts.state!='派遣中'){
                    return 'true'
                }
                else{
                    return 'false'
                }
            }

            const data = reactive({
                lili_item:store.state.current_lili,
                train_flag:handleFlag(),
                lili_flag:'attribute',
                soon_attribute_flag:true
            })

            watch(() => store.state.current_lili, (val, old) => {
                data.lili_item = val
            })

            const handleDetail=()=>{
                data.lili_flag = 'details'
            }
            const handleOriginal=()=>{
                data.lili_flag = 'attribute'
            }

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
        background: rgb(234, 242, 249, 0);
        width: 99%;
        height: 100%;
        border-radius:10px 10px 0px 0px;
        box-shadow:0px 0px 0px 0px;
        border-width: 0px;
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
    .el-row {
        margin-bottom: 15px;
    }
    .card-title {
        font-weight: bold;
    }
</style>