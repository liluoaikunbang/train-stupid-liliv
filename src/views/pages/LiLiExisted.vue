<template>
    <div class="main">
        <div class="left">
            <el-space direction="vertical">
                <h1>未派遣</h1>
                <div v-if="dorm_lilis.length">
                    <ExistItem v-for="item in dorm_lilis" :key="item.num" :flag="true" :lili_item="item" />
                </div>
                <div v-else>
                    <ExistItem :flag="false" />
                </div>
                <h1>已收藏</h1>
                <div v-if="favorite_lilis.length">
                    <ExistItem v-for="item in favorite_lilis" :key="item.num" :flag="true" :lili_item="item" />
                </div>
                <div v-else>
                    <ExistItem :flag="false" />
                </div>
                <h1>派遣中</h1>
                <div v-if="dispatch_lilis.length">
                    <ExistItem v-for="item in dispatch_lilis" :key="item.num" :flag="true" :lili_item="item" />
                </div>
                <div v-else>
                    <ExistItem :flag="false" />
                </div>
            </el-space>
        </div>
        <div class="right">
            <ExistCard />
        </div>
    </div>
</template>
<script scoped>
    import { reactive, toRefs } from 'vue';
    import { useStore } from 'vuex'
    import ExistCard from '../../components/LiLiExisted/ExistCard.vue'
    import ExistItem from '../../components/LiLiExisted/ExistItem.vue'
    export default {
        name:"lili_existed",
        components: {
            ExistCard,
            ExistItem,
        },
        setup(){
            const store = useStore()
            const data = reactive({
                lilis:store.state.lilis,
                dorm_lilis:[], // 未派遣
                favorite_lilis:[], // 已收藏
                dispatch_lilis:[], // 派遣中
            })

            if(data.lilis.length){
                for(let i=0; i<data.lilis.length; i++){
                    if(data.lilis[i].whereabouts == '未派遣'){
                        data.dorm_lilis.push(data.lilis[i])
                    }
                    if(data.lilis[i].whereabouts == '已收藏'){
                        data.favorite_lilis.push(data.lilis[i])
                    }
                    if(data.lilis[i].whereabouts == '派遣中'){
                        data.dispatch_lilis.push(data.lilis[i])
                    }
                }
            }

            return {
                ...toRefs(data),
            }
        }
    }
</script>
<style scoped>
    .main {
        display: flex;
        justify-content: space-between;
    }
    .left {
        width: 500px;
        height: 85vh;
        margin-left: 50px;
        margin-top: 20px;
        background: rgb(234, 242, 249);
        border-style: solid;
        border-width: 1px;
        border-color: black;
        overflow-y: auto;
        overflow-x: hidden;
    }
    .right {
        width: 50%;
        margin-right: 50px;
        margin-top: 20px;
    }
</style>