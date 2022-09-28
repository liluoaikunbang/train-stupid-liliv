<template>
    <div class="main">
        <el-space wrap class="cards">
            <div class="card-item" v-for="i in num" :key="i">
                <CardPurchase />
            </div>
        </el-space>
    </div>
</template>
<script>
    import CardPurchase from '../../components/CardPurchase.vue'
    import { reactive, toRefs } from 'vue';
    import { hyperParameters } from '../../utils'
    export default {
        name:"lili_purchased",
        components: {
            CardPurchase,
        },
        setup(){
            const data = reactive({
                num:hyperParameters.max_purchase_lili,
            })
            return {
                ...toRefs(data),
            }
        },
    }
</script>
<style scoped>
    .cards {
        margin-top: 5px;
        margin-left: 50px;
    }
    .card-item{
        margin: 0px;
    }
</style>