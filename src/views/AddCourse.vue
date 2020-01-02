<template>
    <div class="clearify">
        <course class="leftcontent"></course>
        <router-view></router-view>
    </div>
</template>

<script>
import course from'../components/course.vue'

export default {
    name:'Coursemanagement',
    components:{
        course
    }
}
</script>
<style lang="less" scoped>
.clearify{
    .leftcontent{
        float: left;
    }
    &::after{
        content: "";
        display:block;
        clear: both;
    }
}
</style>