<template>
<header class="head">
  <div class="headBox clearfiy">
    <a class="headBoxLogoA" href="javascript:;">
      <img class="headBoxLogoImg" src="../assets/logo.jpg" alt="易学聘logo" title="首页">
    </a>
    <div class="headBoxRight">
      <a class="headBoxRightA" href="javascript:;">
        <img class="userPhoto" src="../assets/user-image.jpg" alt="">
        <span class="userName">潜龙在渊</span>
      </a>
      <span class="selectBottomBox iconfont">&#xe609;</span>
    </div>
  </div>
</header>
</template>
<script>
export default {
  name: 'headers',
  data () {
    return {
      
    }
  },
  // mounted() {
  // this.axios.get('/api/getList', {
  //   params: {
  //     ID: 12345
  //   }
  // })
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // })
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less" scoped>
*{
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
}
.head {
  background: #333333;
  .headBox {
    width: 1200px;
    height: 40px;
    margin: 0 auto;
    background: #333;
    .headBoxLogoA{
      float: left;
      .headBoxLogoImg{
        width: 126px;
        height: 40px;
        vertical-align: middle;
      }
    }
    .headBoxRight{
      float: right;
      padding-right: 20px;
      .headBoxRightA{
        height: 40px;
        overflow: hidden;
        .userPhoto{
          margin-top: 8px;
          width: 22px;
          border-radius: 50%;
        }
        .userName{
          display: inline-block;
          font-size: 14px;
          line-height: 40px;
          vertical-align: 6px;
          padding: 0 5px;
          color: whitesmoke;
        }
      }
      .selectBottomBox{
        color: whitesmoke;
        vertical-align: 6px;
        padding: 0 5px;
        cursor: pointer;
      }
    }
  }
  &:after{
    content: '';
    display: block;
    clear: both;
  }
}
</style>
