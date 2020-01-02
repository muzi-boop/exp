<template>
  <div class="contents">

    <div class="kcBox">
      <div class="courseText">
        <p class="courseTextTitle">
          中午在凡客打客服电话退货了，下午可以到么？我在北京
        </p>
        <div class="center">
            <p class="lx"></p>
           <pre class="centerP"> CPU    AMD Athlon ll X4 (速龙ll四核)  640盒装CPU (Socket AM3/3GHz/2M二级缓存/
    45纳米)  主板华硕(ASUS)M5A88...</pre>
        </div>
        <p class="courseTextTime"><span class="courseTextTimeLeft">回答时间: 3月23日 15:43</span> <span class="courseTextTimeCenter">回答:0 | 91人看过</span> <span class="courseTextTimeRight">提问者:啷铛猫</span></p>
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
        <div class="center">
            <p class="lx"></p>
           <pre class="centerP"> CPU    AMD Athlon ll X4 (速龙ll四核)  640盒装CPU (Socket AM3/3GHz/2M二级缓存/
    45纳米)  主板华硕(ASUS)M5A88...</pre>
        </div>
        <p class="courseTextTime"><span class="courseTextTimeLeft">回答时间: 3月23日 15:43</span> <span class="courseTextTimeCenter">回答:0 | 91人看过</span> <span class="courseTextTimeRight">提问者:啷铛猫</span></p>
      </div>
      <div class="aboult">
        <router-link to class="del">删除回答</router-link>
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
      .center{
         height: 70px;
         background: #fff;
         position: relative;
         .lx{
             position: absolute;
             top: 5px;
             left: 10px;
             width: 10px;
             height: 10px;
             background: #ccc;
             transform: rotateZ(45deg);
         }
          .centerP{
              padding: 10px;
              margin-top: 10px;
               font-size: 13px;
               width: 600px;
               height: 40px;
               background: #ccc;
               overflow: hidden;
               text-overflow: ellipsis;
               line-clamp: 2;
               box-orient: vertical;
          }
      }
      .courseTextTime {
        margin-top: 8px;
        color: #999;
        // .courseTextTimeLeft{
        // }
        .courseTextTimeCenter{
            margin-left: 20px;
        }
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
      top: 66px;
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