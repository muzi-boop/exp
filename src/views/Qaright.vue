<template>
    <div class="content">
        <Answer></Answer>
        <router-view></router-view>
    </div>
</template>

<script>
import Answer from '../components/answer.vue'
export default {
    components:{
        Answer
    }
    
}
</script>
<style lang="less" scoped>
.content{
    margin-left: 20px;
}
</style>