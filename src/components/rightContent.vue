<template>
  <section class="rightContent">
    <div class="rightContentUp">
        <div class="uploadCulum">
          <p class="culumStyle">我上传的课程</p>
          <p class="culumStyleTo">
            <span class="value">3</span>
            <span class="ge">个</span>
          </p>
          <router-link to class="details iconfont">查看详情&#xe67f;</router-link>
        </div>
        <div class="qa">
          <p class="qaStyle">我的问答</p>
          <p class="qaStyleTo">
            <span class="qavalue">3</span>
            <span class="qage">个</span>
          </p>
          <router-link to class="qadetails iconfont">查看详情&#xe67f;</router-link>
        </div>
    </div>
    <div class="rightContentDown">
      <div class="student">
        <p class="newStudent">最新学员</p>
        <p class="wholeStudent">一周内新增25位学员</p>
      </div>
      <ul class="list">
        <li class="listLi">
          <img class="listImg" src="../assets/a.jpg" alt="">
          <p class="listP">杨志</p>
        </li>
        <li class="listLi">
          <img class="listImg" src="../assets/a.jpg" alt="">
          <p class="listP">杨志</p>
        </li>
        <li class="listLi">
          <img class="listImg" src="../assets/a.jpg" alt="">
          <p class="listP">杨志</p>
        </li>
        <li class="listLi">
          <img class="listImg" src="../assets/a.jpg" alt="">
          <p class="listP">杨志</p>
        </li>
        <li class="listLi">
          <img class="listImg" src="../assets/a.jpg" alt="">
          <p class="listP">杨志</p>
        </li>
      </ul>
    </div>
  </section>
</template>


<script>
export default {
  name: "rightContent",
  data() {
    return {};
  }
};
</script>

<style lang="less">
.rightContent {
  margin-left: 20px;
  float: left;
  .rightContentUp {
    overflow: hidden;
    &::after {
      content: "";
      display: block;
      clear: both;
    }
      .uploadCulum {
        float: left;
        text-align: left;
        width: 355px;
        height: 266px;
        background: url(../assets/qa.jpg) center no-repeat;
        background-size: 355px 266px;
        border-radius: 10px;
        margin-right:20px; 
        .culumStyle {
            margin-top: 26px;
            margin-left: 40px;
        }
        .culumStyleTo {
          margin-top: 22px;
          margin-left: 40px;
          .value {
            font-size: 28px;
          }
          .ge {
            margin-left: 5px;
          }
        }
        .details {
          margin-left: 40px;
          margin-top: 16px;
          color: #999999;
          font-size: 13px;
          display: block;
        }
    }
    .qa{
         float: left;
        text-align: left;
        width: 355px;
        height: 266px;
        background: url(../assets/vounlum.jpg) center no-repeat;
        background-size: 355px 266px;
        border-radius: 10px;
         .qaStyle {
            margin-top: 26px;
            margin-left: 40px;
        }
        .qaStyleTo {
          margin-top: 22px;
          margin-left: 40px;
          .qavalue {
            font-size: 28px;
          }
          .qage {
            margin-left: 5px;
          }
        }
        .qadetails {
          margin-left: 40px;
          margin-top: 16px;
          color: #999999;
          font-size: 13px;
          display: block;
        }
    }
  }
  .rightContentDown {
    width:730px;
    height: 266px;
    box-sizing: border-box;
    margin-top: 20px;
    padding-left: 25px;
    border-radius: 10px;
    background: #fff;
    padding: 35px 0px 35px 50px;
    .student{
      
      &::after{
        content: "";
        display: block;
        clear: both;
      }
      .newStudent{
        font-size: 22px;
        float: left;
      }
      .wholeStudent{
        color: #999999;
        margin-right: 50px;
        float: right;
        line-height: 29px;
      }
    }
    .list{
      overflow: hidden;
      .listLi{
        margin-top: 34px;
        margin-right: 47px;
        float: left;
        list-style: none;
        .listImg{
          width: 88px;
          height: 88px;
          border-radius: 50%;
          
        }
        .listP{
            margin-top: 15px;
          }
      }
    }
  }
}
</style>