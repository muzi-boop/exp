<template>
  <div class="contents">
    <div class="kcBox">
      <div class="course">
        <img class="courseImg" src="../assets/course1-1.jpg" alt="小光头" />
        <router-link to class="courseHover">
          <p class="courseIcon iconfont">&#xe601;</p>
        </router-link>
      </div>
      <div class="courseText">
        <p class="courseTextTitle">
          显露你的实力—面试
          <span class="courseTextTitleStyle">进行中</span>
        </p>
        <p class="courseTextTime">上传时间: 3月23日 15:43</p>
        <div class="courseTextPiece">
          <span class="courseTextPieceStu iconfont">&#xe6fe; 128位学员</span>
          <router-link to='' class="courseTextPieceA iconfont">&#xe925; 18条评论</router-link>
        </div>
        <p class="courseTextCateG">免费</p>
      </div>
    </div>
    <div class="kcBox">
      <div class="course">
        <img class="courseImg" src="../assets/course1-1.jpg" alt="小光头" />
        <router-link to class="courseHover">
          <p class="courseIcon iconfont">&#xe601;</p>
        </router-link>
      </div>
      <div class="courseText">
        <p class="courseTextTitle">
          显露你的实力—面试
          <span class="courseTextTitleActiveStyle">已结束</span>
        </p>
        <p class="courseTextTime">上传时间: 3月23日 15:43</p>
        <div class="courseTextPiece">
          <span class="courseTextPieceStu iconfont">&#xe6fe; 128位学员</span>
          <router-link to='' class="courseTextPieceA iconfont">&#xe925; 18条评论</router-link>
        </div>
        <p class="courseTextCateG">￥199</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.contents {
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
    .course {
      float: left;
      width: 188px;
      height: 116px;
      margin: 30px 20px;
      position: relative;
      .courseImg {
        width: 100%;
        height: 100%;
        vertical-align: middle;
      }
      .courseHover {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(63, 63, 63, 0.4);
        opacity: 0;
        .courseIcon {
          width: 50px;
          height: 50px;
          color: #fff;
          display: block;
          margin: 0 auto;
          font-size: 42px;
          margin-top: 35px;
        }
      }
      &:hover .courseHover {
        opacity: 0.5;
        transition: all 0.5s;
      }
    }
    .courseText {
      text-align: left;
      float: left;
      margin: 30px 0px;
      .courseTextTitle{
        color: #333;
        font-size: 18px;
        .courseTextTitleStyle{
          color: #00aaff;
        }
        .courseTextTitleActiveStyle{
          color: #ccc;
        }
      }
      .courseTextTime{
        margin-top: 8px;
        color: #999;
      }
      .courseTextPiece{
         margin-top: 8px;
        color: #cdcdcd;
        .courseTextPieceA{
          margin-left: 10px;
          color: #cdcdcd;
          &:hover{
            color: #00aaff;
          }
        }
      }
      .courseTextCateG{
         margin-top: 10px;
        font-size: 18px;
        color: #00aaff;
      }
    }
    &::after{
      content: '';
      display: block;
      clear: both;
    }
  }
}
</style>