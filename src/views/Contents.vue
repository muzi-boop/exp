<template>
    <div class="content">
        <LeftContent></LeftContent>
        <rightContent></rightContent>
    </div>
</template>
<script>
import LeftContent from '@/components/leftContent.vue'
import rightContent from '@/components/rightContent.vue'
export default {
    name:'contents',
    components:{
        LeftContent,
        rightContent
    }
}
</script>