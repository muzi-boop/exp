<template>
  <div class="centent">
    <div class="top">
      <div
        v-for="(item,index) in last"
        :key="index"
        class="topText"
        :class="alltext === index ? 'active':''"
        @click="sty(index)"
      >{{item.name}}</div>
    </div>
    <!-- 账号登录 -->
    <div class="qqlogin" v-if="alltext == 0">
      <input type="text" class="input_1" placeholder="手机号" />
      <input type="password" class="input_2" placeholder="密码" />
      <router-link to class="wjma_a">忘记密码？</router-link>
      <router-link to="home" class="login" type="submit" value="登陆啦!" >登陆啦!</router-link> 
      <div class="downBox">
          <p>还没有账号？请 <router-link class="colors" to="/enroll">注册</router-link></p>
      </div>
    </div>

    <!-- 微信登录 -->
    <div v-else class="wxBox">
        <img class="wxBox_img" src="../assets/ma.jpg" alt="">
        <P class="wxBox_p1">打开微信 扫描二维码</P>
        <p class="wxBox_p2">没有账号？ 请 <router-link to="/enroll" class="wxBox_a">注册</router-link></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      alltext: 0,
      last: [
        {
          name: "账号登录"
        },
        {
          name: "微信登录"
        }
      ]
    };
  },
  methods: {
      sty : function (e) {
          this.alltext = e;
      }
  },
};
</script>

<style lang="less" scoped>
.centent {
  .top {
    width: 400px;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    flex-direction: row;
    .topText {
      margin-top: 60px;
      font-size: 18px;
      width: 200px;
      height: 40px;
      line-height: 40px;
      box-sizing: border-box;
      border-bottom: 4px solid #ccc;
    }
    .active {
      width: 50%;
      height: 40px;
      line-height: 40px;
      font-size: 18px;
      color: #adc700;
      box-sizing: border-box;
      border-bottom: 4px solid #adc700;
    }
  }
  .qqlogin {
    width: 400px;
    margin-top: 20px;
    background: #fff;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .input_1 {
      margin-top: 20px;
      height: 40px;
      border: none;
      border-bottom: 1px solid #ccc;
      outline: none;
    }
    .input_2 {
      margin-top: 30px;
      height: 40px;
      border: none;
      border-bottom: 1px solid #ccc;
      outline: none;
    }
    .wjma_a {
      margin-top: 5px;
      text-align: right;
      color: #333;
    }
    .login {
      width: 100%;
      height: 40px;
      outline: none;
      background: #adc700;
      color: #fff;
      margin-top: 60px;
      border: none;
      border-radius: 20px;
    }
    .downBox{
        flex: 1;
        margin: 20px 0;
        color: #ccc;
        font-size: 16px;
        .colors{
            color: #adc700;
        }
    }
  }
  // --------------------------------------------------
  .wxBox{
      width: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      .wxBox_img{
          margin-top: 40px;
          width: 135px;
          height: 135px;
      }
      .wxBox_p1{
          margin-top: 40px;
      }
      .wxBox_p2{
          margin-top: 20px;
           .wxBox_a{
          color: #adc700;
      }
      }
     
  }
}
</style>