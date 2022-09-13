<template>
    <el-card style="width: 600px">
        <template #header>
            <div class="card-header">
                <span>姓名：<input type="text" placeholder="请输入笨璃璃姓名" maxlength="8"  v-model="data.name"></span>
                <div>
                    <el-button type="success" class="button" @click="handleRefresh">刷新</el-button>
                    <el-button type="success" class="button" v-if="!flag.purchase" @click="handlePurchase">购买</el-button>
                    <el-button type="danger" disabled class="button" v-else>已购买</el-button>
                </div>
            </div>
        </template>
        <Attributes :lili_flag="'attribute'" :lili_item="data" :image_flag="true" />
    </el-card>
</template>
<script>
    import { reactive } from 'vue';
    import { useStore } from 'vuex'
    import { hyperParameters, randomInt } from '../utils'
    import { randomFlexibility, randomCpus, init_attributes } from './Attributes/Attributes'
    import Attributes from './Attributes/Attributes.vue';

    export default {
        name:"card_purchase",
        components:{
            Attributes,
        },
        setup(){
            const store = useStore()

            // data调取初始化的笨璃璃属性，注意这里需要循环key赋值，直接=会传入地址，导致笨璃璃属性全部指向同一个变量。
            let data = reactive({})
            for(let key in init_attributes){
                data[key] = init_attributes[key]
            }

            const flag = reactive({
                purchase:false // 是否购买该笨璃璃的信号
            })

            // 刷新笨璃璃
            const refreshAttrubutes=()=>{
                data.age = randomInt(18, 28)
                data.height = randomInt(150, 175)
                data.flexibility = randomFlexibility()
                data.iq = randomInt(-100, -1)
                data.cups = randomCpus()
            }

            // 初始化笨璃璃信息，先刷新一次
            refreshAttrubutes()

            // 刷新笨璃璃
            const handleRefresh=()=>{
                refreshAttrubutes()
                flag.purchase = false
            }

            // 购买笨璃璃
            const handlePurchase=()=>{
                // 检查笨璃璃姓名不为空
                if(!data.name) {
                    alert("请先填写笨璃璃姓名。")
                    return
                }

                // 确定目前的笨璃璃数量，如果为0则新建数组来保存笨璃璃
                let lilis = store.state.lilis
                if(lilis){
                    // 最多同时存在max_lili只笨璃璃，如果超过则不能购买，并给出提示。
                    if(lilis.length >= hyperParameters.max_lili){
                        alert(`最多同时拥有${hyperParameters.max_lili}只笨璃璃，请先调教已有的笨璃璃哦。`)
                        return
                    }
                    data.num = lilis.length
                }

                // 确定需要保存的笨璃璃信息
                lilis.push(data)
                store.commit('changeLiLis', lilis)

                // 改变信号，让样式中显示为已购买
                flag.purchase = true
                console.log(`成功购买${data.name}`)
            }

            return {
                data,
                flag,
                handleRefresh,
                handlePurchase,
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
    .el-row {
        margin-bottom: 15px;
    }
    .card-header {
        /* 这三项组合代表元素横向排布并居中对齐 */
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .card-comment {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .card-comment-content {
        margin-right: 0px;
    }
    .card-image-content {
        width: 150px;
        height: 200px;
        margin: 0px;
        padding: 0px;
    }
    .card-image {
        width: 100%;
        height: 100%;
    }
</style>