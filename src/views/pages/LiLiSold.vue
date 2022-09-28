<template>
    <div class="main">
        <div class="left">
            <SaleButtons />
        </div>
        <div class="right">
            <div class="right-top">
                <SaleCard />
            </div>
            <div class="right-bottom">
                <SaleDisplay />
            </div>
        </div>
    </div>
</template>
<script>
    import SaleCard from '../../components/LiLiSold/SaleCard.vue';
    import SaleButtons from '../../components/LiLiSold/SaleButtons.vue'
    import SaleDisplay from '../../components/LiLiSold/SaleButtonsDisplay.vue'
    export default {
        name:"lili_sold",
        components: {
            SaleButtons,
            SaleDisplay,
            SaleCard,
        },
        setup() {}
    }
</script>
<style scoped>
    .main {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
    }
    .left {
        margin-left: 50px;
        width: 650px;
        height: 85vh;
    }
    .right {
        width: 550px;
        margin-right: 50px;
        height: 85vh;
    }
    .right-top {
        width: 100%;
        height: 40vh;
        margin-bottom: 35px;
    }
    .right-bottom {
        width: 100%;
        height: 40vh;
    }
</style>