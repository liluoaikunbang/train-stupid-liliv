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
                <el-col :span="50">璃汁分泌量：{{ lili_item.fluid }}ml</el-col>
                <el-col :span="50">乳汁分泌量：{{ lili_item.milk }}ml</el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="50">好感度：{{ lili_item.favorability }}%</el-col>
                <el-col :span="50">健康值：{{ lili_item.healthy }}%</el-col>
                <el-col :span="50">体力值：{{ lili_item.stamina }}%</el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="50">生理性欲：{{ lili_item.lust_physiology }}%</el-col>
                <el-col :span="50">心理性欲：{{ lili_item.lust_psychology }}%</el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="150">状态：{{ lili_item.state.join() }}</el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="150">特长：{{ lili_item.specialty.join() }}</el-col>
            </el-row>
            <div v-if="custom_flag">
                <el-row :gutter="20">
                    <el-col :span="150">改造：{{ lili_item.modify.join() }}</el-col>
                </el-row>
            </div>
        </div>
        <div class="card-image-content" v-if="image_flag">
            <img class="card-image" src="../../assets/liluo1.png" alt="">
        </div>
    </div>
    <div class="card-comment-content-details" v-if="lili_flag=='details'">
        <el-collapse accordion v-if="soon_flag">
            <el-collapse-item title="各部位姿势" name="1">
                <el-space wrap>
                    <span>手臂：{{ lili_item.soon.pose.arm }}；</span>
                    <span>手指：{{ lili_item.soon.pose.finger }}；</span>
                    <span>腰腹：{{ lili_item.soon.pose.waist }}；</span>
                    <span>双腿：{{ lili_item.soon.pose.leg }}；</span>
                    <span>脚丫：{{ lili_item.soon.pose.foot }}；</span>
                </el-space>
            </el-collapse-item>
            <el-collapse-item title="拘束值" name="2">
                <el-space wrap>
                    <span>眼部拘束值：{{ lili_item.soon.bondage.eye }}；</span>
                    <span>耳朵拘束值：{{ lili_item.soon.bondage.ear }}；</span>
                    <span>鼻子拘束值：{{ lili_item.soon.bondage.nose }}；</span>
                    <span>嘴部拘束值：{{ lili_item.soon.bondage.mouth }}；</span>
                    <span>脖颈拘束值：{{ lili_item.soon.bondage.neck }}；</span>
                    <span>手臂拘束值：{{ lili_item.soon.bondage.arm }}；</span>
                    <span>手指拘束值：{{ lili_item.soon.bondage.finger }}；</span>
                    <span>腰部拘束值：{{ lili_item.soon.bondage.waist }}；</span>
                    <span>大腿拘束值：{{ lili_item.soon.bondage.lap }}；</span>
                    <span>小腿拘束值：{{ lili_item.soon.bondage.shins }}；</span>
                    <span>脚掌拘束值：{{ lili_item.soon.bondage.foot }}；</span>
                    <span>脚趾拘束值：{{ lili_item.soon.bondage.toe }}；</span>
                </el-space>
            </el-collapse-item>
            <el-collapse-item title="痛感刺激" name="3">
                <el-space wrap>
                    <span>胸部刺激：{{ lili_item.soon.pain_feel.breast }}；</span>
                    <span>手心刺激：{{ lili_item.soon.pain_feel.hand }}；</span>
                    <span>下体刺激：{{ lili_item.soon.pain_feel.vagina }}；</span>
                    <span>大腿刺激：{{ lili_item.soon.pain_feel.lap }}；</span>
                    <span>脚背刺激：{{ lili_item.soon.pain_feel.instep }}；</span>
                    <span>脚心刺激：{{ lili_item.soon.pain_feel.foot }}；</span>
                    <span>后庭刺激：{{ lili_item.soon.pain_feel.rectal }}；</span>
                    <span>尿道刺激：{{ lili_item.soon.pain_feel.urethra }}；</span>
                </el-space>
            </el-collapse-item>
            <el-collapse-item title="痒感刺激" name="4">
                <el-space wrap>
                    <span>胸部刺激：{{ lili_item.soon.tickle_feel.breast }}；</span>
                    <span>腋下刺激：{{ lili_item.soon.tickle_feel.armpit }}；</span>
                    <span>肋骨刺激：{{ lili_item.soon.tickle_feel.costal }}；</span>
                    <span>手心刺激：{{ lili_item.soon.tickle_feel.hand }}；</span>
                    <span>下体刺激：{{ lili_item.soon.tickle_feel.vagina }}；</span>
                    <span>大腿刺激：{{ lili_item.soon.tickle_feel.lap }}；</span>
                    <span>脚背刺激：{{ lili_item.soon.tickle_feel.instep }}；</span>
                    <span>脚心刺激：{{ lili_item.soon.tickle_feel.foot }}；</span>
                    <span>后庭刺激：{{ lili_item.soon.tickle_feel.rectal }}；</span>
                    <span>尿道刺激：{{ lili_item.soon.tickle_feel.urethra }}；</span>
                </el-space>
            </el-collapse-item>
            <el-collapse-item title="特殊刺激" name="5">
                <el-space wrap>
                    <span>憋尿刺激：{{ lili_item.soon.special_feel.urinary }}；</span>
                    <span>灌肠刺激：{{ lili_item.soon.special_feel.enema }}；</span>
                    <span>气味刺激：{{ lili_item.soon.special_feel.smell }}；</span>
                </el-space>
            </el-collapse-item>
        </el-collapse>
        <el-collapse accordion v-if="long_flag">
            <el-collapse-item title="当前XP值" name="6">
                <el-space wrap>
                    <span>恋痛XP：{{ lili_item.long.xp.pain }}；</span>
                    <span>被缚XP：{{ lili_item.long.xp.bondage }}；</span>
                    <span>气味系XP：{{ lili_item.long.xp.smell }}；</span>
                    <span>挠痒XP：{{ lili_item.long.xp.tickle }}；</span>
                </el-space>
            </el-collapse-item>
            <el-collapse-item title="性器化程度" name="7">
                <el-space wrap>
                    <span>耳朵性器化：{{ lili_item.long.sexual.ear }}；</span>
                    <span>大腿性器化：{{ lili_item.long.sexual.lap }}；</span>
                    <span>脚心性器化：{{ lili_item.long.sexual.foot }}；</span>
                    <span>脚趾性器化：{{ lili_item.long.sexual.toe }}；</span>
                    <span>尿道性器化：{{ lili_item.long.sexual.urinary }}；</span>
                    <span>胸部性器化：{{ lili_item.long.sexual.breast }}；</span>
                    <span>下体性器化：{{ lili_item.long.sexual.vagina }}；</span>
                    <span>后庭性器化：{{ lili_item.long.sexual.rectal }}；</span>
                </el-space>
            </el-collapse-item>
            <el-collapse-item title="敏感度" name="8">
                <el-space wrap>
                    <span>胸部敏感度：{{ lili_item.long.sensitivity.breast }}；</span>
                    <span>腋下敏感度：{{ lili_item.long.sensitivity.armpit }}；</span>
                    <span>肋下敏感度：{{ lili_item.long.sensitivity.costal }}；</span>
                    <span>手心敏感度：{{ lili_item.long.sensitivity.hand }}；</span>
                    <span>下体敏感度：{{ lili_item.long.sensitivity.vagina }}；</span>
                    <span>大腿敏感度：{{ lili_item.long.sensitivity.lap }}；</span>
                    <span>脚背敏感度：{{ lili_item.long.sensitivity.instep }}；</span>
                    <span>脚心敏感度：{{ lili_item.long.sensitivity.foot }}；</span>
                    <span>后庭敏感度：{{ lili_item.long.sensitivity.rectal }}；</span>
                    <span>尿道敏感度：{{ lili_item.long.sensitivity.urethra }}；</span>
                </el-space>
            </el-collapse-item>
            <el-collapse-item title="礼仪值" name="9">
                <el-space wrap>
                    <span>淑女礼仪：{{ lili_item.long.manners.lady }}；</span>
                    <span>宠物礼仪：{{ lili_item.long.manners.pet }}；</span>
                    <span>人鱼礼仪：{{ lili_item.long.manners.mermaid }}；</span>
                    <span>奴隶礼仪：{{ lili_item.long.manners.slave }}；</span>
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
        props: ['lili_flag', 'lili_item', 'custom_flag', 'soon_flag', 'long_flag', 'image_flag', ],
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
    .card-comment-content-details {
        width: 100%;
        height: 100%;
        margin: 0px;
        padding: 0px;
    }
    .card-image {
        width: 100%;
        height: 100%;
    }
    .none-image {
        height: 100%;
        width: 100%;
    }
    :deep(.el-collapse) {
        box-sizing: border-box;
        border: none;
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