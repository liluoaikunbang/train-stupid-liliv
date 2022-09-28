<template>
    <el-card style="width: 600px">
        <template #header>
            <div class="card-header">
                <span>姓名：<input type="text" placeholder="给笨璃璃起个名字吧" maxlength="8"  v-model="data.name"></span>
                <div>
                    <el-tooltip class="box-item" effect="light" placement="bottom">
                        <template #content><p class="tooltip">随便挑随便选，刷新笨璃璃不花钱！</p></template>
                        <el-button type="success" class="button" @click="handleRefresh">换一只</el-button>
                    </el-tooltip>
                    <el-tooltip class="box-item" effect="light" placement="bottom">
                        <template #content><p class="tooltip">每收获一只笨璃璃，需要花费50球币~</p></template>
                        <el-button type="success" class="button" v-if="!flag.purchase" @click="handlePurchase">收获</el-button>
                        <el-button type="danger" disabled class="button" v-else>已收获</el-button>
                    </el-tooltip>
                </div>
            </div>
        </template>
        <Attributes :lili_flag="'attribute'" :lili_item="data" :image_flag="true" />
    </el-card>
</template>
<script>
    import { reactive } from 'vue'
    import { useStore } from 'vuex'
    import { ElMessageBox } from 'element-plus'
    import { assignObject, randomInt, addMoney } from '../utils'
    import { randomCpus, init_attributes } from './Attributes/Attributes'
    import Attributes from './Attributes/Attributes.vue'
    import { addLog } from './LogArea/LogUtils'

    export default {
        name:"card_purchase",
        components:{
            Attributes,
        },
        setup(){
            const store = useStore()

            // data调取初始化的笨璃璃属性，注意这里需要循环key赋值，直接=会传入地址，导致笨璃璃属性全部指向同一个变量。
            const data = reactive(assignObject(init_attributes))

            const flag = reactive({
                purchase:false // 是否购买该笨璃璃的信号
            })

            // 刷新笨璃璃
            const refreshAttrubutes=()=>{
                data.name = ''
                data.age = randomInt(18, 28)
                data.height = randomInt(150, 175)
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
                    ElMessageBox.alert('笨璃璃姓名不能为空，请先填写姓名。', '错误', {confirmButtonText: '好的'})
                    return
                }
                if(!addMoney(-50)){ // 金币不足则直接return
                    return
                }

                // 确定目前的笨璃璃数量，如果为0则新建数组来保存笨璃璃
                let lilis = store.state.lilis
                if(lilis){
                    // 最多同时存在max_lili只未派遣的笨璃璃，如果超过则不能购买，并给出提示。
                    // if(lilis.length >= hyperParameters.max_lili){
                    //     alert(`最多同时拥有${hyperParameters.max_lili}只笨璃璃，请先调教已有的笨璃璃哦。`)
                    //     return
                    // }
                    // 新的笨璃璃num设置为当前最大的笨璃璃num+1
                    data.num = Math.max.apply(Math, lilis.map(item => { return item.num })) + 1
                    // 防止出现num=负无穷的问题，该问题暂时没找到解决方法，只能打个补丁
                    if(data.num < 1){
                        data.num = 1
                    }
                }

                // 保存笨璃璃的信息，这里直接将data添加入列表会直接传入data的指针，
                // 导致刷新笨璃璃后再次购买时data中的数据随之更改，因此通过循环key赋值来直接进行值传递而不是指针传递。
                lilis.push(assignObject(data))
                store.commit('changeLiLis', lilis)

                // 改变信号，让样式中显示为已购买，并减少球币
                flag.purchase = true
                addLog('tip', `成功购买${data.num}号笨璃璃${data.name}，花费50球币`, true)
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
        background: rgb(234, 242, 249, 0.9);
        border-style: solid;
        border-width: 3px;
        border-color: black;
        width: 100px;
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
    .tooltip{
        font-size: 15px;
    }
</style>