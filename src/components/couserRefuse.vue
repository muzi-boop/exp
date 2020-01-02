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
        </p>
        <p class="courseTextTime">上传时间: 3月23日 15:43</p>
        <p class="courseTextCateG">失败原因:内容包含反动性质，请修改</p>
      </div>
      <div class="aboult">
        <router-link to class="modify">修改课程</router-link>
        <router-link to class="del">删除课程</router-link>
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
        </p>
        <p class="courseTextTime">上传时间: 3月23日 15:43</p>
        <p class="courseTextCateG">失败原因:内容包含反动性质，请修改</p>
      </div>
       <div class="aboult">
        <router-link to class="modify">修改课程</router-link>
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
      .courseTextTitle {
        margin-top: 10px;
        color: #333;
        font-size: 18px;
      }
      .courseTextTime {
        margin-top: 8px;
        color: #999;
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
      top: 76px;
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
        color: #cfcfcf;
        font-size: 13px;
        display: block;
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