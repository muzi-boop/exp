<template>
    <section class="editBox">
        <div class="informition">
            <div class="projectName">
              <p class="projectNameLeft">姓名</p>
              <p class="projectNameLeft">出生日期</p>
              <p class="projectNameLeft">性别</p>
              <p class="projectNameLeft">手机号</p>
              <p class="projectNameLeft">邮箱</p>
              <p class="projectNameLeft">身份证</p>
              <p class="projectNameLeft">微信号</p>
              <p class="projectNameLeft">QQ号</p>
            </div>
            <div class="projectList">
              <p class="projectNameright">刘子熙</p>
              <p class="projectNameright">1990年3月2日</p>
              <p class="projectNameright">男</p>
              <p class="projectNameright">15910578034  <span class="projectNamerightSpan iconfont">&#xe6dd; 已验证</span></p>
              <p class="projectNameright">xuepin@admin.com</p>
              <p class="projectNameright">111111111111111</p>
              <p class="projectNameright">1384388825</p>
              <p class="projectNameright">3639947</p>
            </div>
        </div>
        <router-link to="edit" class="edit"><span class="iconfont">&#xe604;</span> 编辑</router-link>
    </section>
</template>

<script>
export default {
    name : 'editInput',
    data (){
        return{

        }
    }
}
</script>
<style lang="less" scoped>
.editBox{
    float: left;
    margin-left: 20px;
    width:900px ;
    height: 584px;
    border-radius: 10px;
    background: #fff;
    position: relative;
    overflow: hidden;
    .informition{
       background: #fff;
        .projectName{
             width: 95px;
             float: left;
            .projectNameLeft{
                height: 20px;
                text-align: right;
                margin-top: 40px;
                line-height: 20px;
                color: #afafaf;
            }
        }
         .projectList{
                width: 650px;
                float: left;
                margin-left: 40px;
                 .projectNameright{
                     height: 20px;
                     line-height: 20px;
                    text-align: left;
                    margin-top: 40px;
                    .projectNamerightSpan{
                        margin-left: 10px;
                        color: #9bc604;
                    }
                 }
            }
        &::after{
            content: "";
            display: block;
            clear: both;
        }
    }
    .edit{
        position: absolute;
        top: 40px;
        right: 40px;
        color: #00aaff ;
    }
}
</style>