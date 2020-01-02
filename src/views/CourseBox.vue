<template>
    <div class="content">
        <Courstatu></Courstatu>
        <router-view></router-view>
    </div>
</template>

<script>
import Courstatu      from '../components/courstatu.vue'
export default {
    components:{
        Courstatu
    }
}
</script>

<style lang="less" scoped>
.content{
    float: left;
    margin-left: 20px;
}
</style>