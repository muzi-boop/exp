<template>
  <div class="contents">

    <div class="kcBox">
      <div class="courseText">
        <p class="courseTextTitle">
          中午在凡客打客服电话退货了，下午可以到么？我在北京
        </p>
        <p class="courseTextTime"><span class="courseTextTimeLeft">提问时间: 3月23日 15:43</span> <span class="courseTextTimeRight">回答:0 | 91人看过</span></p>
      </div>
      <div class="aboult">
        <router-link to class="modify">查看并处理</router-link>
      </div>
    </div>
    <!--  -->
     <div class="kcBox">
      <div class="courseText">
        <p class="courseTextTitle">
          中午在凡客打客服电话退货了，下午可以到么？我在北京
        </p>
        <p class="courseTextTime"><span class="courseTextTimeLeft">提问时间: 3月23日 15:43</span> <span class="courseTextTimeRight">回答:0 | 91人看过</span></p>
      </div>
      <div class="aboult">
        <router-link to class="del">删除课程</router-link>
      </div>
    </div>

  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.contents {
    float: left;
    margin-left: 20px;
  box-sizing: border-box;
  border-top: 1px solid #eeeeee;
  width: 900px;
  height: 484px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background: #fff;

  .kcBox {
    padding: 10px;
    border-top: 1px solid #eeeeee;
    position: relative;
      
    .courseText {
      text-align: left;
      float: left;
      margin: 30px 23px;
      .courseTextTitle {
          width: 500px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        margin-top: 10px;
        color: #333;
        font-size: 18px;
      }
      .courseTextTime {
        margin-top: 8px;
        color: #999;
        // .courseTextTimeLeft{
        // }
        .courseTextTimeRight{
            margin-left: 20px;
        }
      }
      .courseTextCateG {
        width: 500px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-top: 10px;
        font-size: 18px;
        color: #00aaff;
      }
    }
    .aboult {
      position: absolute;
      top: 48px;
      right: 30px;
      .modify {
        display: block;
        width: 100px;
        height: 30px;
        line-height: 30px;
        border-radius: 20px;
        border: 1px solid #eeeeee;
        color: #00aaff;
      }
      .del{
          width: 100px;
        height: 30px;
        color: #cfcfcf;
        font-size: 13px;
        display: block;
        text-align: center;
        margin-top: 10px;
        &:hover{
          color: #00aaff;
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
</style>