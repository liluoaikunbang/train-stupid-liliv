<template>
    <el-card style="width: 600px">
        <template #header>
            <div class="card-header">
                <span>{{ lili_item.num }}号笨璃璃</span>
                <span>姓名：{{ lili_item.name }}</span>
                <div>
                    <el-button type="success" class="button" v-if="!flag.train" @click="handleTrain">开始调教</el-button>
                    <el-button type="danger" disabled class="button" v-else>正在调教</el-button>
                </div>
            </div>
        </template>
        <Attributes :lili_flag="'attribute'" :lili_item="lili_item" :image_flag="true" />
    </el-card>
</template>
<script>
    import { reactive, watch } from 'vue'
    import { useStore } from 'vuex'
    import Attributes from './Attributes/Attributes.vue'

    export default {
        name:"card_exist",
        props: ['lili_item'],
        components:{
            Attributes,
        },
        setup(props){
            const flag = reactive({
                train:false // 当前笨璃璃是否开始调教
            })

            const store = useStore()

            // 判断当前被调教的笨璃璃是否为当前card的笨璃璃，并根据条件改变内容
            const judgeTrain=(current_id)=>{
                if(current_id == props.lili_item.num){
                    flag.train = true
                }
                else{
                    flag.train = false
                }
            }
            judgeTrain(store.state.current_id) // 刷新页面时先判断一次，后续再监听全局信息，如有变化则继续判断。
            
            // 监听全局信息变化，发现当前调教的笨璃璃改变时需要重新判断是否为当前card的笨璃璃
            watch(() => store.state.current_id, (val, old) => {
                judgeTrain(val)
            })

            // 调教笨璃璃
            const handleTrain=()=>{
                flag.train = true // 当前卡片变为调教状态
                // 全局数据更改
                store.commit('changeCurrentId', props.lili_item.num)
                store.commit('changeCurrentLiLi', props.lili_item)
            }

            return {
                flag,
                handleTrain,
            }
        },
    }
</script>
<style scoped>
    .el-card {
        background: rgb(234, 242, 249);
        border-style: solid;
        border-width: 1px;
        border-color: black;
        width: 100px;
    }
    .card-header {
        /* 这三项组合代表元素横向排布并居中对齐 */
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>