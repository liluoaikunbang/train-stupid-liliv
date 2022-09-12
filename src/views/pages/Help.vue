<template>
    <div>
        <p>global_data:{{ data.global_data }}</p>
        <p v-for="item in data.lilis" :key="item.num">lili{{ item.num }}:{{ item }}</p>
        <p>train_log:{{ data.train_log }}</p>
        <p>special_button_flags:{{ data.special_button_flags }}</p>
    </div>
</template>
<script scoped>
    import { reactive } from 'vue';
    import { useStore } from 'vuex'
    export default {
        name:"help",
        setup(){
            const store = useStore()

            const data = reactive({
                global_data:{
                    day:store.state.day,
                    money:store.state.money,
                    name:store.state.name,
                    current_id:store.state.current_id,
                },
                lilis:store.state.lilis,
                train_log:store.state.train_log,
                special_button_flags:store.state.special_button_flags,
            })

            return {
                data
            }
        }
    }
</script>
<style scoped>
</style>