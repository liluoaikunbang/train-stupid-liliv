<template>
    <!-- 首页 -->
    <div class="main-null" v-if="display_flag.flag==null">
        <h1>调教方式介绍</h1>
        <p>注：鼠标放到按钮上即可显示对应调教方式的介绍。</p>
    </div>
    <!-- 捆绑类-头部拘束 -->
    <div class="main" v-if="display_flag.flag=='blindfold'">
        <div class="display-image-content">
            <img class="display-image" src="../assets/TrainButtonDisplays/blindfold.jpg" alt="">
        </div>
        <div class="display-information">
            <h1>头部拘束-眼罩</h1>
            <p>一个普通的眼罩，但质量不错，百分百遮挡光线，充分守护你的睡眠。</p>
            <el-collapse accordion >
                <el-collapse-item title="详细功能" name="1">
                    <span class="information-font">增加捆绑状态；奴性+5；抖M程度+5；眼部拘束值+10；</span>
                </el-collapse-item>
                <el-collapse-item title="使用条件" name="2">
                    <span class="information-font">消耗0小时；</span>
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>
    <div class="main" v-if="display_flag.flag=='ballgag'">
        <div class="display-image-content">
            <img class="display-image" src="../assets/TrainButtonDisplays/ballgag.jpg" alt="">
        </div>
        <div class="display-information">
            <h1>头部拘束-口球</h1>
            <p>一个普通的口球，限制说话的同时也能保证小m口水直流。</p>
            <el-collapse accordion >
                <el-collapse-item title="详细功能" name="1">
                    <span class="information-font">增加捆绑状态；奴性+5；抖M程度+5；嘴部拘束值+5；</span>
                </el-collapse-item>
                <el-collapse-item title="使用条件" name="2">
                    <span class="information-font">消耗0小时；</span>
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>
    <div class="main" v-if="display_flag.flag=='earplug'">
        <div class="display-image-content">
            <img class="display-image" src="../assets/TrainButtonDisplays/earplug.jpg" alt="">
        </div>
        <div class="display-information">
            <h1>头部拘束-耳塞</h1>
            <p>常用的降噪耳塞，能够遮挡部分声音，但做不到完全安静。</p>
            <el-collapse accordion >
                <el-collapse-item title="详细功能" name="1">
                    <span class="information-font">增加捆绑状态；奴性+5；抖M程度+5；耳朵拘束值+5；</span>
                </el-collapse-item>
                <el-collapse-item title="使用条件" name="2">
                    <span class="information-font">消耗0小时；</span>
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>
    <!-- 捆绑类-上身拘束 -->
    <div class="main" v-if="display_flag.flag=='front_hand_binding'">
        <div class="display-image-content">
            <img class="display-image" src="../assets/TrainButtonDisplays/front_hand_binding.jpg" alt="">
        </div>
        <div class="display-information">
            <h1>上身拘束-前手缚</h1>
            <p>将双手简单地在身前捆绑，束缚程度不强但仍然有效。</p>
            <el-collapse accordion >
                <el-collapse-item title="详细功能" name="1">
                    <span class="information-font">手臂姿势变为前手；增加捆绑状态；奴性+5；抖M程度+5；手臂拘束值+3；</span>
                </el-collapse-item>
                <el-collapse-item title="使用条件" name="2">
                    <span class="information-font">消耗0.2小时；手臂姿势为自由或前手；</span>
                </el-collapse-item>
            </el-collapse>
            <a target="_blank" href="https://www.pixiv.net/artworks/100824665">图源</a>
        </div>
    </div>
</template>
<script>
    import { reactive, watch } from 'vue'
    import { useStore } from 'vuex'
    export default {
        name:'train_buttons_display',
        setup(){
            const store = useStore()
            const display_flag = reactive({
                flag:store.state.train_display,
            })

            watch(() => store.state.train_display, (val, old) => {
                display_flag.flag = val
            })

            return {
                display_flag
            }
        }
    }
</script>
<style scoped>
    .main-null {
        text-align: center;
        background: rgb(234, 242, 249);
        border-style: solid;
        border-width: 1px;
        border-color: black;
        width: 100%;
        height: 36%;
        overflow: auto;
        margin-top: 5px;
    }
    .main {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: rgb(234, 242, 249);
        border-style: solid;
        border-width: 1px;
        border-color: black;
        width: 100%;
        height: 36%;
        overflow: auto;
        margin-top: 5px;
    }
    .display-image-content {
        width: 40%;
        height: 90%;
        margin: 0px;
        padding: 0px;
        margin-left: 10px;
    }
    .display-image {
        width: 100%;
        height: 100%;
    }
    .display-information {
        text-align: center;
        margin-right: 20px;
        width: 50%;
        height: 100%;
        font-size: 16px;
    }
    .information-font {
        font-size: 15px;
    }
    :deep(.el-collapse) {
        box-sizing: border-box;
    }
    :deep(.el-collapse-item__header) {
        border: none;
        background-color: transparent;
        font-size: 15px;
        font-weight: bold;
        margin-left: 0px;
        height: 25px;
    }
    :deep(.el-collapse-item__wrap) {
        background-color: transparent;
    }
</style>