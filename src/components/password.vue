<template>
    <div class="pwd">
        <p class="listpwdStyle">登录密码</p>
        <div class="inputPwd">
            <div class="textPwd">
                <p>原密码</p>
                <p>新密码</p>
                <p>确认密码</p>
            </div>
            <div class="inputPwdBox">
                <input type="text" name=""  placeholder="请输入原始密码">
                <input type="text" name=""  placeholder="请输入新密码">
                <input type="text" name=""  placeholder="请再次输入新密码">
            </div>
        </div>
        <div class="confirm">
                <router-link to="/confirm" class="confirmBox">确认修改</router-link>
                <router-link to="" class="unconfirmBox">取消修改</router-link>
            </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
.pwd{
    float: left;
    width: 900px;
    height: 585px;
    background: #fff;
    margin-left: 20px;
    border-radius: 10px;
    .listpwdStyle{
        text-align: left;
        padding: 43px ;
        border-bottom: 2px solid #eeeeee;
        font-size: 18px;
    }
    .inputPwd{
        .textPwd{
            float: left;
            width: 120px;
            p{
                color: #999999;
                height: 40px;
                line-height: 40px;
                margin-top: 30px;
                text-align: right ;
            }
        }
        .inputPwdBox{
            float: left;
            margin-left: 20px;
            input{
                width:400px;
                height: 40px;
                display: block;
                margin-top: 30px;
                border-radius: 5px ;
                border:1px solid #dddddd;
                overflow: hidden;
                outline: none;
                text-indent: 10px;
            }
        }
        &::after{
            content: '';
            display: block;
            clear: both;
        }
    }
    .confirm{
        margin-left: 125px;
        margin-top: 40px;
        .confirmBox{
            width: 160px;
            height: 44px;
            background: #00aaff;
            display: block;
            float: left;
            border-radius: 10px;
            line-height: 44px;
            color: #fff;
        }
        .unconfirmBox{
             width: 160px;
             height: 44px;
             display: block;
             float: left;
             line-height: 44px;
             border:1px solid #ccc;
             border-radius: 10px;
             margin-left: 30px;
             color: #ccc;
        }
    }
}
</style>