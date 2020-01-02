<template>
  <section class="content">
    <div class="user">
      <img class="userImg" src="../assets/photo.jpg" alt />
      <div class="preInfor">
        <p class="nickName">
          潜龙在渊
          <span class="nickNameImg iconfont">&#xe638;</span>
        </p>
        <div class="info">
          <span class="infoDeg">信息完整度</span>
          <span class="line"></span>
          <span class="grade">高</span>
        </div>
        <div class="ico">
          <span class="icoStyle iconfont">&#xe620;</span>
          <span class="icoStyle iconfont">&#xe88a;</span>
          <span class="icoStyle iconfont">&#xe642;</span>
        </div>
      </div>
    </div>
    <div class="assets">
      <div class="cashWithdrawal">
          <router-link to="" v-bind:class="{cashWithdrawalStyle:iscashWithdrawalStyle}">申请提现</router-link>
      </div>
      <div class="property">
        <p class="balance">账户余额</p>
        <p class="RMBBox">
          <span class="rmb">248</span>
          <span class="yuan">元</span>
        </p>
      </div>
    </div>
    <div class="identity">
      <div class="clearfix">
        <div class="Authentication">
          <router-link to>
            <img class="identityImg" src="../assets/renzheng-1.jpg" alt />
          </router-link>
          <p class="ep">
            <span class="epIdentityOne">实名认证</span>
            <span class="epIdentityTwo">【未认证】</span>
          </p>
        </div>
        <div class="Authentication">
          <router-link to>
            <img class="identityImg" src="../assets/renzheng-2.jpg" alt />
          </router-link>
          <p class="ep">
            <span class="epIdentityOne">资质认证</span>
            <span class="epIdentityTwo">【未认证】</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: "leftContent",
  data() {
    return {
        iscashWithdrawalStyle:true,
    };

  }
};
</script>

<style lang="less" scoped>
.content {
    float: left;
  width: 450px;
  height: 552px;
  background: #fff;
  border-radius: 5px;
  .user {
    height: 150px;
    border-bottom: 1px solid #f6f6f6;
    .userImg {
      width: 88px;
      background: #000;
      height: 88px;
      float: left;
      margin: 31px 35px;
      border-radius: 50%;
    }
    .preInfor {
      margin: 34px 0px;
      float: left;
      .nickName {
        color: #333333;
        text-align: left;
        font-size: 22px;
        .nickNameImg {
          font-size: 22px;
          margin-left: 10px;
        }
      }
      .info {
        margin-top: 10px;
        .infoDeg {
          font-size: 14px;
          color: #909090;
          padding-right: 10px;
        }
        .line {
          display: inline-block;
          width: 130px;
          height: 8px;
          border-radius: 8px;
          background: #00aaff;
        }
        .grade {
          padding-left: 10px;
          font-size: 14px;
          color: #00aaff;
        }
      }
      .ico {
        margin-top: 5px;
        text-align: left;
        .icoStyle {
          text-align: center;
          display: inline-block;
          padding-right: 5px;
          &:first-child {
            color: #00aaff;
          }
        }
      }
    }
    &::after {
      content: "";
      display: block;
      clear: both;
    }
  }
  .assets {
    height: 114px;
    border-bottom: 1px solid #f6f6f6;
    .cashWithdrawal {
      float: left;
      width: 160px;
      height: 32px;
      border-radius: 14px;
      background: #00aaff;
      margin: 41px 35px;
      .cashWithdrawalStyle{
        line-height: 32px;
        color: #fff;
      }
    }
    .property {
      float: left;
      padding: 26px 0px;
      .balance {
        font-size: 14px;
        color: #666;
        margin-bottom: 8px;
      }
      .RMBBox {
        .rmb {
          color: #333333;
          font-size: 30px;
          padding: 0px 8px;
        }
        .yuan {
          color: #666;
          font-size: 14px;
        }
      }
    }
    &::after {
      content: "";
      display: block;
      clear: both;
    }
  }
  .identity {
    padding-left: 40px;
    overflow: hidden;
    .clearfix {
        width: 402px;
      .Authentication {
        float: left;
        margin-right: 31px;
        padding-top: 64px;
        width: 170px;
        .identityImg {
          width: 170px;
          height: 120px;
        }
        .ep {
          padding-top: 20px;
          .epIdentityOne {
            font-size: 14px;
          }
          .epIdentityTwo {
            font-size: 14px;
            color: #da4e23;
          }
        }
      }
      &::after {
        content: "";
        display: block;
        clear: both;
      }
    }
  }
}
</style>