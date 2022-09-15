<template>
    <div>
        <p>global_data:{{ data.global_data }}</p>
        <p v-for="item in data.lilis" :key="item.num">lili{{ item.num }}:{{ item }}</p>
        <p>log:{{ data.log }}</p>
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
                    time:store.state.time,
                    money:store.state.money,
                    name:store.state.name,
                    current_id:store.state.current_id,
                },
                lilis:store.state.lilis,
                log:store.state.log,
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