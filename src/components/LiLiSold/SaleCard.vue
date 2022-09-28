<template>
    <el-card class="box-card" v-if="data.sale_flag">
        <template #header>
            <div class="card-header">
                <span>{{ data.lili_item.num }}号笨璃璃</span>
                <span>姓名：{{ data.lili_item.name }}</span>
                <div></div>
            </div>
        </template>
        <div>
            <p class="attribute">特长：{{ data.lili_item.specialty.join() }}</p>
            <p class="attribute">派遣状态：{{ data.lili_item.whereabouts.state }}</p>
            <p class="attribute">位置：{{ data.lili_item.whereabouts.place }}</p>
            <p class="attribute" style="color:cornflowerblue" v-if="data.lili_item.whereabouts.state=='未派遣'">提示：当前笨璃璃尚未派遣，可派遣！</p>
            <p class="attribute" style="color:red" v-if="data.lili_item.whereabouts.state=='派遣中'">提示：当前笨璃璃已在派遣中，需先召回才能重新派遣！</p>
            <p class="attribute" style="color:red" v-if="data.lili_item.whereabouts.state=='已收藏'">提示：当前笨璃璃已被收藏，需先召回才能重新派遣！</p>
        </div>
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
    import Attributes from '../Attributes/Attributes.vue'
    import { reactive, watch } from 'vue'
    import { useStore } from 'vuex'
    export default {
        name:"sale_card",
        components:{
            Attributes,
        },
        setup(){
            const store = useStore()
            const data = reactive({
                lili_item:store.state.current_lili,
                sale_flag:store.state.current_id!=null,
            })
            return {
                data,
            }
        }
    }
</script>
<style scoped>
    .box-card {
        background: rgb(234, 242, 249, 0.9);
        border-style: solid;
        border-width: 3px;
        border-color: black;
        width: 100%;
        height: 100%;
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
    .attribute {
        margin-bottom: 10px;
        font-size: 19px;
    }
</style>