<template>
    <div class="content">
        <leftQa></leftQa>
        <router-view></router-view>
    </div>
</template>

<script>
import leftQa      from '../components/leftQa.vue'
export default {
    components:{
        leftQa
    }
}
</script>

<style lang="less" scoped>
.content{
  &::after{
      content: '';
      display: block;
      clear: both;
  }
}
</style>