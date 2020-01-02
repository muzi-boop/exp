<template>
  <div class="senContent">
    <div class="contentLeft">
      <div class="contentTop">
            <div class="rowp">
                <router-link to class="contentTopA">
                    <img class="contentBottomImg" src="../assets/renzheng-1.jpg" alt />
                </router-link>
                <router-link to class="contentTopB">
                    <img class="contentBottomImg" src="../assets/renzheng-1.jpg" alt />
                </router-link>
            </div>
            <div class="boxP">
                 <p class="seniorityP">
                        身份证(正面)
                    <span class="seniorityP1Span">【已认证】</span>
                 </p>
                <p class="seniorityP1">
                        身份证(反面)
                    <span class="seniorityP1Span">【已认证】</span>
                </p>
             </div>
            <p class="contentTopP1">请上传能证明您专业技能的图片</p>
            <p class="contentTopP2">如：职业资格证书、加盖公章的材料证明，获奖证书等</p>
      </div>
      <div class="contentBottom">
        <router-link to class="contentBottomA">
          <img class="contentBottomImg" src="../assets/renzheng-1.jpg" alt />
        </router-link>

        <p class="seniorityP1">
          资质认证
          <span class="seniorityP1Span">【已认证】</span>
        </p>
        <p class="seniorityP2">请上传能证明您专业技能的图片</p>
        <p class="seniorityP3">如：职业资格证书、加盖公章的材料证明，获奖证书等</p>
      </div>
    </div>

    <div class="contentRight">
      <p class="title">个人简介</p>
      <div class="textjlBox">
        <p class="fontText">
          噫吁嚱，危乎高哉！蜀道之难，难于上青天！蚕丛及鱼凫，开国何茫然！尔来四万八千岁，不与秦塞通人烟。西当太白有鸟道，可以横绝峨眉巅。地崩山摧壮士死，然后天梯石栈相钩连。上有六龙回日之高标，下有冲波逆折之回川。黄鹤之飞尚不得过，猿猱欲度愁攀援。青泥何盘盘，百步九折萦岩峦。扪参历井仰胁息，以手抚膺坐长叹。
          问君西游何时还？畏途巉岩蛇；磨牙吮血，杀人如麻。锦城虽云乐，不如早还家。蜀道之难，难于上青天，侧身西望长咨嗟！
        </p>
      </div>
      <div class="herf">
        <router-link to class="yes">确认修改</router-link>
        <router-link to class="no">取消修改</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "seniority",
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.senContent {
  width: 900px;
  height: 585px;
  background: #fff;
  margin-left: 20px;
  float: left;
  border-radius: 10px;
  .contentLeft {
    box-sizing: border-box;
    width: 450px;
    height: 585px;
    float: left;
    .contentTop {
      height: 292px;
      width: 450px;
      padding: 30px;
      box-sizing: border-box;
      .rowp {
        .contentTopA {
          float: left;
          margin-left: 10px;
          .contentBottomImg {
            width: 170px;
            height: 120px;
          }
        }
        .contentTopB {
          float: left;
          margin-left: 30px;
          .contentBottomImg {
            width: 170px;
            height: 120px;
          }
        }

        &::after {
          content: "";
          display: block;
          clear: both;
        }
      }
      .boxP{
            padding-left: 20px;
              .seniorityP{
            float: left;
             font-size: 13px;
             margin: 15px;
             .seniorityP1Span {
                 color: #86cf0d;
                }
            }
            .seniorityP1{
               float: left;
                font-size: 13px;
                padding-left:20px; 
                margin: 15px;
                .seniorityP1Span {
                  color: #86cf0d;
                }
            }
            &::after{
                content: '';
                display: block;
                clear: both;
            }
        }
       .contentTopP1 {
        margin-top: 10px;
        font-size: 13px;
        color: #ccc;
      }
      .contentTopP2 {
        margin-top: 10px;
        font-size: 13px;
        color: #ccc;
      }
      &::after{
          content: '';
          display: block;
          clear: both;
      }
      }
    }
    .contentBottom {
      border-top: 1px solid #f6f6f6;
      height: 292px;
      width: 450px;
      padding: 30px;
      box-sizing: border-box;
      .contentBottomA {
        margin-top: 10px;
        display: block;
        .contentBottomImg {
          width: 170px;
          height: 120px;
        }
      }
      .seniorityP1 {
        margin: 15px;
        .seniorityP1Span {
          color: #86cf0d;
        }
      }
      .seniorityP2 {
        margin-top: 10px;
        font-size: 13px;
        color: #ccc;
      }
      .seniorityP3 {
        margin-top: 10px;
        font-size: 13px;
        color: #ccc;
      }
    }

  .contentRight {
    border-left: 1px solid #f6f6f6;
    box-sizing: border-box;
    width: 450px;
    height: 585px;
    float: left;
    padding: 30px;

    .title {
      font-size: 20px;
      color: #000;
      text-align: left;
    }
    .textjlBox {
      margin: 20px 0px;
      border: 1px solid #ccc;
      height: 370px;
      overflow: hidden;
      overflow-y: auto;
      border-radius: 10px;
      padding: 15px;
      .fontText {
        text-align: left;
        text-indent: 24px;
        font-size: 13px;
        color: #666666;
      }
    }
    .herf {
      margin-left: 69px;
      .yes {
        float: left;
        width: 120px;
        height: 40px;
        line-height: 40px;
        background: #00aaff;
        border-radius: 5px;
        color: #fff;
      }
      .no {
        float: left;
        margin-left: 20px;
        width: 120px;
        height: 40px;
        line-height: 40px;
        border-radius: 5px;
        color: #ccc;
        border: 1px solid #ccc;
      }
      &::after {
        content: "";
        display: block;
        clear: both;
      }
    }
  }

  &::after {
    content: "";
    display: block;
    clear: both;
  }
}
</style>