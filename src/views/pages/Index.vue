<template>
    <div class="main">
        <div class="content">
            <h1 class="title">笨笨学园V0.3</h1>
            <h1 class="author">作者：璃落</h1>
            <span class="input-content">
                您的昵称为:
                <input type="text" class="input" placeholder="请输入主人姓名" maxlength="8" v-model="uesr_name" @change="changeName">
                <el-button round class="name-button" @click="$router.replace('/purchased')">确定</el-button>
            </span>
        </div>
    </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import { ElMessageBox } from 'element-plus'
    export default {
        name:"index",
        setup(){
            const store = useStore()
            const data = reactive({
                uesr_name:''
            })

            const changeName=()=>{
                if(!data.uesr_name){
                    ElMessageBox.alert('主人的姓名不能为空，请先填写姓名。', '错误', {confirmButtonText: '好的'})
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