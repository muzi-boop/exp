<template>
  <div class="about">
           <leftInformsion></leftInformsion>
           <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import leftInformsion from '@/components/leftInformsion.vue'

export default {
  name: 'about',
  components: {
    leftInformsion,
  }
}
</script>

<style>

</style>