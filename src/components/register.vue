<template>
  <div class="registerBox">
    <div class="head">
      <div class="headBox clearfiy">
        <a class="headBoxLogoA" href="javascript:;">
          <img class="headBoxLogoImg" src="../assets/logo-fff.jpg" alt="易学聘logo" title="首页" />
        </a>
        <div class="headBoxRight">
          <router-link to v-text="zc" class="zhuce"></router-link>
          <span class="span">|</span>
          <router-link to v-text="dl" class="denlv"></router-link>
        </div>
      </div>
    </div>
    <!-- 中心背景 -->
    <div class="contentbg">
      <div class="imgBox">
        <img class="img" src="../assets/kl.jpg" alt />
      </div>
      <div class="bg"></div>
      <!-- 中间内容区域 -->
      <div class="positionContentBox">
        <div class="activeBox">
          <div
            v-for="(item,index) in list"
            :key="index"
            class="offset"
            :class="clicks === index ? 'active':''" 
            @click="dd(index)"
          >{{item.name}}</div>
        </div>
        <div class="ccc">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      zc: "注册",
      clicks: 1,
      dl: "登录",
      list: [
        {
          name: "我是学生"
        },
        {
          name: "我是讲师"
        },
        {
          name: "我是HR"
        }
      ]
    };
  },
  methods: {
      dd: function (index) {
        this.clicks = index
      }
  },
};
</script>

<style lang="less" scoped>
.registerBox {
  .head {
    background: #fff;
    .headBox {
      width: 1200px;
      height: 90px;
      margin: 0 auto;
      background: #fff;
      .headBoxLogoA {
        float: left;
        .headBoxLogoImg {
          width: 263.5px;
          height: 90px;
          vertical-align: middle;
        }
      }
      .headBoxRight {
        float: right;
        width: 110px;
        display: flex;
        justify-content: center;
        flex-direction: row;
        .zhuce {
          font-size: 14px;
          color: #ccc;
          line-height: 90px;
        }
        .span {
          font-size: 14px;
          color: #ccc;
          line-height: 90px;
          padding: 0 10px;
        }
        .denlv {
          font-size: 14px;
          color: #ccc;
          line-height: 90px;
        }
      }
    }
    &:after {
      content: "";
      display: block;
      clear: both;
    }
  }
  .contentbg {
    width: 1400px;
    margin: 0 auto;
    position: relative;
    display: flex;
    .imgBox {
      width: 500px;
      height: 746px;
      .img {
        width: 500px;
        height: 746px;
      }
    }
    .bg {
      flex: 1;
      width: 100%;
      height: 746px;
      background: #f9f9f9;
      box-shadow: 0px 6px 5px #e9e9e9 inset;
    }
  }
  .positionContentBox {
    width: 600px;
    height: 460px;
    box-shadow: 0px 0px 5px #e9e9e9;
    background: #fff;
    border-radius: 10px;
    position: absolute;
    display: flex;
    justify-content: flex-start;
    top: 140px;
    left: 390px;

    .activeBox {
      height: 460px;
      width: 110px;
      overflow: hidden;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      display: flex;
      flex-direction: column;
      .offset {
        width: 110px;
        height: 115px;
        color: #fff;
        background: #202421;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .active{
        width: 110px;
        height: 230px;
        color: #fff;
        background: #adc700;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
     .ccc{
      flex: 1;
      display: flex;
      justify-content: center;
      height: 460px;
  }
  }
}
</style>