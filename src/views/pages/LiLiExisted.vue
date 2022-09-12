<template>
    <div>
        <el-space wrap>
            <!-- v-bind="object" 可以将object字典中所有的键值传入，但注意父子组件key的名称要统一。 -->
            <CardExist class="card-item"
                v-for="item in data.lilis"
                :key="item.num"
                :lili_item="item"
            />
        </el-space>
    </div>
</template>
<script scoped>
    import { reactive } from 'vue';
    import { useStore } from 'vuex'
    import CardExist from '../../components/CardExist.vue'
    export default {
        name:"lili_existed",
        components: {
            CardExist,
        },
        setup(){
            const store = useStore()
            const data = reactive({
                lilis:store.state.lilis,
            })
            return {
                data,
            }
        }
    }
</script>
<style>
</style>