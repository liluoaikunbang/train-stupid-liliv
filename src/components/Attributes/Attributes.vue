<template>
    <div class="card-comment" v-if="lili_flag=='attribute'">
        <div class="card-comment-content">
            <el-row :gutter="20">
                <el-col :span="50">年龄：{{ lili_item.age }}</el-col>
                <el-col :span="50">身高：{{ lili_item.height }}cm</el-col>
                <el-col :span="50">智力：{{ lili_item.iq }}</el-col>
                <el-col :span="50">罩杯：{{ lili_item.cups }}</el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="50">乳汁分泌量：{{ lili_item.milk }}ml</el-col>
                <el-col :span="50">璃汁分泌量：{{ lili_item.fluid }}ml</el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="50">奴性：{{ lili_item.servility }}%</el-col>
                <el-col :span="50">好感度：{{ lili_item.favorability }}%</el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="50">性欲程度：{{ lili_item.lust }}%</el-col>
                <el-col :span="50">健康程度：{{ lili_item.healthy }}%</el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="150">状态：{{ lili_item.state.join() }}</el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="150">特长：{{ lili_item.specialty.join() }}</el-col>
            </el-row>
        </div>
        <div class="card-image-content" v-if="image_flag">
            <img class="card-image" src="../../assets/liluo1.png" alt="">
        </div>
    </div>

    <div class="card-comment-content" v-if="lili_flag=='details'">
        <el-collapse accordion>
            <el-collapse-item title="其他信息" name="1">
                <el-space wrap>
                    <span>恋痛程度：{{ lili_item.details.pain_love }}；</span>
                    <span>抖M程度：{{ lili_item.details.sub_value }}；</span>
                </el-space>
            </el-collapse-item>
            <el-collapse-item title="数值状态" name="2">
                <el-space wrap>
                    <span>胸部刺激等级：{{ lili_item.details.state_value.pleasure_breast }}；</span>
                    <span>下体刺激等级：{{ lili_item.details.state_value.pleasure_vagina }}；</span>
                </el-space>
            </el-collapse-item>
            <el-collapse-item title="各部位姿势" name="3">
                <el-space wrap>
                    <span>手臂：{{ lili_item.details.pose.arm }}；</span>
                    <span>手指：{{ lili_item.details.pose.finger }}；</span>
                    <span>腰腹：{{ lili_item.details.pose.waist }}；</span>
                    <span>双腿：{{ lili_item.details.pose.leg }}；</span>
                    <span>脚丫：{{ lili_item.details.pose.foot }}；</span>
                </el-space>
            </el-collapse-item>
            <el-collapse-item title="拘束值" name="4">
                <el-space wrap>
                    <span>眼部拘束值：{{ lili_item.details.bondage_values.eye }}；</span>
                    <span>耳朵拘束值：{{ lili_item.details.bondage_values.ear }}；</span>
                    <span>鼻子拘束值：{{ lili_item.details.bondage_values.nose }}；</span>
                    <span>嘴部拘束值：{{ lili_item.details.bondage_values.mouth }}；</span>
                    <span>脖颈拘束值：{{ lili_item.details.bondage_values.neck }}；</span>
                    <span>手臂拘束值：{{ lili_item.details.bondage_values.arm }}；</span>
                    <span>手指拘束值：{{ lili_item.details.bondage_values.finger }}；</span>
                    <span>腰部拘束值：{{ lili_item.details.bondage_values.waist }}；</span>
                    <span>大腿拘束值：{{ lili_item.details.bondage_values.lap }}；</span>
                    <span>小腿拘束值：{{ lili_item.details.bondage_values.shins }}；</span>
                    <span>脚掌拘束值：{{ lili_item.details.bondage_values.foot }}；</span>
                    <span>脚趾拘束值：{{ lili_item.details.bondage_values.toe }}；</span>
                </el-space>
            </el-collapse-item>
            <el-collapse-item title="性器化程度" name="5">
                <el-space wrap>
                    <span>耳朵性器化：{{ lili_item.details.sexual.ear }}；</span>
                    <span>大腿性器化：{{ lili_item.details.sexual.lap }}；</span>
                    <span>脚心性器化：{{ lili_item.details.sexual.foot }}；</span>
                    <span>脚趾性器化：{{ lili_item.details.sexual.toe }}；</span>
                    <span>尿道性器化：{{ lili_item.details.sexual.urinary }}；</span>
                    <span>胸部性器化：{{ lili_item.details.sexual.breast }}；</span>
                    <span>下体性器化：{{ lili_item.details.sexual.vagina }}；</span>
                </el-space>
            </el-collapse-item>
            <el-collapse-item title="敏感度" name="6">
                <el-space wrap>
                    <span>胸部敏感度：{{ lili_item.details.sensitivity.breast }}；</span>
                    <span>腋下敏感度：{{ lili_item.details.sensitivity.armpit }}；</span>
                    <span>肋下敏感度：{{ lili_item.details.sensitivity.costal }}；</span>
                    <span>手心敏感度：{{ lili_item.details.sensitivity.hand }}；</span>
                    <span>下体敏感度：{{ lili_item.details.sensitivity.vagina }}；</span>
                    <span>大腿敏感度：{{ lili_item.details.sensitivity.lap }}；</span>
                    <span>脚背敏感度：{{ lili_item.details.sensitivity.instep }}；</span>
                    <span>脚心敏感度：{{ lili_item.details.sensitivity.foot }}；</span>
                </el-space>
            </el-collapse-item>
            <el-collapse-item title="礼仪值" name="7">
                <el-space wrap>
                    <span>淑女礼仪：{{ lili_item.details.manners.lady }}；</span>
                    <span>宠物礼仪：{{ lili_item.details.manners.pet }}；</span>
                    <span>人鱼礼仪：{{ lili_item.details.manners.mermaid }}；</span>
                </el-space>
            </el-collapse-item>
        </el-collapse>
    </div>

    <div class="card-comment-content-none" v-if="lili_flag=='none'">
        <img class="none-image" src="../../assets/none_attributes.png" alt="">
    </div>
</template>
<script>
    export default {
        name:"lili_attributes_card",
        props: [
            'lili_flag',
            'lili_item',
            'image_flag',
        ],
    }
</script>
<style scoped>
    .card-comment {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .card-comment-content {
        margin-right: 0px;
        height: 200px;
        overflow-y: auto;
        overflow-x: hidden;
    }
    .card-comment-content-none {
        margin-right: 0px;
        height: 200px;
        overflow-y: hidden;
        overflow-x: hidden;
        text-align: center;
    }
    .el-row {
        margin-bottom: 10px;
        font-size: 19px;
    }
    .card-image-content {
        width: 150px;
        height: 200px;
        margin: 0px;
        padding: 0px;
    }
    .card-image {
        width: 100%;
        height: 100%;
    }
    .none-image {
        height: 100%;
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
    }
    :deep(.el-collapse-item__wrap) {
        background-color: transparent;
    }
</style>