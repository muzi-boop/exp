<template>
  <div class="home">
    <Headers></Headers>
    <navigator></navigator>
    <div class="bgcontent">
        <div class="center">
           <router-view></router-view>
        </div>
    </div>
    <Footers></Footers>
  </div>
</template>

<script>
// @ is an alias to /src
import Headers from '@/components/headers.vue'
import Footers from '@/components/footers.vue'
import navigator from '@/components/navigator.vue'


export default {
  name: 'home',
  components: {
    Headers,
    Footers,
    navigator,
    
  },

}
</script>

<style>
.home{
  color: #2c3e50;
}
  .bgcontent{
  box-shadow: 0px 5px 5px #e5e5e5 inset;
  background: #f4f4f4;
  padding: 32px 0px;
}
.center{
  width: 1200px;
  margin:  0px auto;
  background: #f4f4f4;
  overflow: hidden;
}
</style>