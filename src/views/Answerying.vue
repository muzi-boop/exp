<template>
    <div class="content">
        <AnswerTo></AnswerTo>
        <router-view></router-view>
    </div>
</template>

<script>
import AnswerTo from '../components/answerTo.vue'
export default {
    components:{
        AnswerTo
    }
    
}
</script>
<style lang="less" scoped>
.content{
    margin-left: 20px;
}
</style>