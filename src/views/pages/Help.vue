<template>
    <div class="main">
        <div class="top">
            <div class="left" id="help_area">
                <el-scrollbar>
                    <HelpItem v-for="item in help_contents" :key="item.content" :help_flag="item.flag" :help_content="item.content" />
                </el-scrollbar>
            </div>
            <div class="right">
                <img class="image" src="../../assets/characters/original.png" alt="">
            </div>
        </div>
        <div class="bottom">
            <el-space wrap>
                <el-button color="pink" type="primary" @click="q0">当前游戏内的全局变量都有什么（给开发者）？</el-button>
                <el-button color="pink" type="primary" @click="q1">这游戏要怎么玩？</el-button>
                <el-button color="pink" type="primary" @click="q2">时间是干什么的？</el-button>
                <el-button color="pink" type="primary" @click="q3">球币有什么用？</el-button>
            </el-space>
        </div>
    </div>
</template>
<script scoped>
    import { reactive, toRefs, onBeforeUpdate } from 'vue';
    import { useStore } from 'vuex'
    import HelpItem from '../../components/Help/HelpItem.vue'
    export default {
        name:"help",
        components:{
            HelpItem,
        },
        setup(){
            const store = useStore()
            const data = reactive({
                help_contents:[{flag:true, content:'欢淫来到笨笨学园，有什么问题可以在这里随便咨询哦！'}] // flag为true是璃落的话，为false是主人的话
            })

            onBeforeUpdate(() => {
                setTimeout(()=>{ // 因为vue动态更新dom，监听到的信息只是dom更新前的信息，会导致log无法滑动到最底部，因此加入异步操作
                    var helps = document.getElementById('help_area')
                    helps.scrollTop = helps.scrollHeight
                },0)
            })

            const q0=()=>{
                data.help_contents.push({
                    flag:false,
                    content:'当前游戏内的全局变量都有什么？'
                })
                data.help_contents.push({
                    flag:true, 
                    content:`${JSON.stringify(store.state)}`
                })
            }
            const q1=()=>{
                data.help_contents.push({
                    flag:false,
                    content:'这游戏要怎么玩？'
                })
                data.help_contents.push({
                    flag:true, 
                    content:'首先在笨笨生命树收获新的笨璃璃，然后可以去笨笨收容所选中收获的笨璃璃，即可去笨笨调教室随意调教该笨璃璃，同时，\
                    也可以随时去往笨笨派遣处将选中的笨璃璃派遣出去挣钱或者直接售卖给学园拍卖场，来挣得更多球币。此外后面还会陆续开发商店、功\
                    能建筑等新玩法，敬请期待。'
                })
            }
            const q2=()=>{
                data.help_contents.push({
                    flag:false,
                    content:'时间是干什么的？'
                })
                data.help_contents.push({
                    flag:true, 
                    content:'时间用于记录调教笨璃璃的时长，每隔一段时间（一小时/一天）还会发生一些事件，比如当前笨璃璃恢复健康等。'
                })
            }

            const q3=()=>{
                data.help_contents.push({
                    flag:false,
                    content:'球币有什么用？'
                })
                data.help_contents.push({
                    flag:true, 
                    content:'球币可用于收获新的笨璃璃，从商店中选取需要的道具，或者在调教店自由调整笨璃璃属性。'
                })
            }

            return {
                ...toRefs(data),
                q0, q1, q2, q3,
            }
        }
    }
</script>
<style scoped>
    .main {
        width: 1300px;
        height: 95vh;
        margin-top: 20px;
    }
    .top {
        background: rgb(234, 242, 249, 0.9);
        border-style: solid;
        border-width: 3px;
        border-color: black;
        width: 100%;
        height: 55vh;
        margin-left: 20px;
        margin-right: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius:10px 10px 10px 10px;
    }
    .left {
        border-right-style: solid;
        border-right-width: 3px;
        border-right-color: black;
        height: 100%;
        width: 1000px;
    }
    .right {
        height: 100%;
        width: 300px;
    }
    .image {
        width: 100%;
        height: 100%;
    }
    .bottom {
        background: rgb(234, 242, 249, 0.9);
        border-style: solid;
        border-width: 3px;
        border-color: black;
        width: 100%;
        height: 30vh;
        margin-top: 5px;
        margin-left: 20px;
        margin-right: 20px;
        border-radius:10px 10px 10px 10px;
    }
    .el-space {
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 10px;
    }
</style>  