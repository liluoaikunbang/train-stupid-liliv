<template>
    <div class="main">
        <img src="../../assets/background.jpg" class="background">
        <div class="content">
            <h1 class="title">笨笨学园V0.1</h1>
            <h1 class="author">作者：璃落</h1>
            <span class="input-content">
                您的昵称为:
                <input type="text" class="input" placeholder="请输入主人姓名" maxlength="5" v-model="uesr_name" @change="changeName">
                <el-button round class="name-button">确定</el-button>
            </span>
        </div>
    </div>
</template>
<script>
import { reactive, toRefs } from 'vue';
import { useStore } from 'vuex'
    export default {
        name:"index",
        setup(){
            const store = useStore()

            const data = reactive({
                uesr_name:''
            })

            // 跳过当天
            const changeName=()=>{
                if(!data.uesr_name){
                    alert('主人姓名不能为空。')
                    return
                }
                store.commit('changeName', data.uesr_name)
            }

            return {
                ...toRefs(data),
                changeName,
            }
        }
    }
</script>
<style scoped>
    .main{
        width: 100%;
        height: 95vh;
        margin: 0;
        /* overflow: hidden; */
    }
    .background{
        width: 100%;
        height: 100%;
        opacity: 0.4;
        /* 背景置于底层 */
        position: absolute;
        z-index: 1;
    }
    .content{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-30%, -50%);
        z-index: 2;
        text-align: center;
    }
    .title{
        font-size: 60px;
        letter-spacing: 1cm;
        color: rgb(34, 28, 106);
        text-align: center;
    }
    .author{
        font-size: 40px;
        color: rgb(34, 28, 106);
    }
    .input-content{
        margin: 0px;
        font-size: 30px;
        font-weight: bolder;
    }
    .input{
        width: auto;
        height: 20px;
    }
    .name-button{
        margin-left: 15px;
    }
</style>