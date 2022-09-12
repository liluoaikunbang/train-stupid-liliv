<template>
    <el-collapse accordion>
        <el-collapse-item title="其他调教" name="1">
            <el-space wrap>
                <el-button type="primary" round>拘束露出</el-button>
                <el-button type="primary" round>伪装拘束</el-button>
                <el-button type="primary" round>步行训练</el-button>
                <el-button type="primary" round>游泳训练</el-button>
            </el-space>
        </el-collapse-item>
        <el-collapse-item title="拘束放置" name="2">
            <el-space wrap>
                <el-button type="primary" round>普通拘束放置</el-button>
                <el-button type="primary" round>感官剥夺放置</el-button>
            </el-space>
        </el-collapse-item>
    </el-collapse>
</template>
<script>
    export default {
        name:"bondage_buttons",
        setup(){
        }
    }
</script>
<style scoped>
    /* .el-collapse需要深度选择器来覆盖样式 */
    :deep(.el-collapse) {
        box-sizing: border-box;
    }
    :deep(.el-collapse-item__header) {
        border: none;
        background-color: transparent;
        font-size: 20px;
        font-weight: bold;
        margin-left: 10px;
    }
    :deep(.el-collapse-item__wrap) {
        background-color: transparent;
    }
    .button-title {
        text-align: center;
        font-size: large;
        font-weight: bold;
    }
    .el-space{
        margin-top: 5px;
        margin-left: 20px;
    }
</style>