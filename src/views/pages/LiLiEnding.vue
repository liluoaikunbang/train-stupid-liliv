<template>
    <div class="main">
        <el-space direction="vertical" v-if="display_flag.flag == 'dispatch'">
            <div class="ending-content">
                <img class="ending-img" src="../../assets/endings/1.jpg" alt="">
            </div>
            <h1>{{ lili_item.num }}号笨璃璃{{ lili_item.name }}已派遣至{{ lili_item.whereabouts.place }}</h1>
        </el-space>
        <el-space direction="vertical" v-if="display_flag.flag == 'sale'">
            <div class="ending-content">
                <img class="ending-img" src="../../assets/endings/2.jpg" alt="">
            </div>
            <h1>{{ lili_item.num }}号笨璃璃{{ lili_item.name }}已在学园拍卖场被拍卖</h1>
        </el-space>
        <el-space direction="vertical" v-if="display_flag.flag == 'collect'">
            <div class="ending-content">
                <img class="ending-img" src="../../assets/endings/3.png" alt="">
            </div>
            <h1>{{ lili_item.num }}号笨璃璃{{ lili_item.name }}已被收藏为专属笨女仆</h1>
        </el-space>
    </div>
</template>
<script>
    import { reactive, toRefs } from 'vue'
    import { useStore } from 'vuex'
    export default {
        name:'sale_ending',
        setup(){
            const store = useStore()

            const data = reactive({lili_item:store.state.current_lili})
            const display_flag = reactive({
                flag:store.state.ending_display,
            })

            return {
                ...toRefs(data),
                display_flag
            }
        }
    }
</script>
<style scoped>
    .main {
        background: rgb(184, 221, 251, 0.9);
        margin: 0px;
        padding: 0px;
        width: 100%;
        height: 100%;
        text-align: center;
    }
    .ending-content {
        margin-top: 20px;
        width: 300px;
        height: 500px;
    }
    .ending-img{
        width: 100%;
        height: 100%;
    }
</style>