<template>
  <footer class="footerBox">
    <div class="exp">中国领先大学生成长平台&nbsp;©2020&nbsp; e学聘</div>
    <div class="expTo">
      <span>ICP备12500001</span>
      <span class="spacing">|</span>
      <a class="expToA" href="javascript:;">联系我们 exuepin@exuepin.com</a>
      <span class="spacing">|</span>
      <a class="expToA" href="javascript:;">关于我们</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'footers',
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.footerBox {
  width: 1200px;
  padding-bottom: 16px;
  padding-top: 16px;
  margin: 0 auto;
  background: #fff;
  .exp {
    color: #999999;
  }
  .expTo {
    color: #999999;
    .spacing {
      padding: 0 10px;
    }
    .expToA {
      color: #999999;
    }
  }
}
</style>