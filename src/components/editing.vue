<template>
    <div class="pwd">
        <div class="inputPwd">
            <div class="textPwd">
                <p>姓名</p>
                <p>出生日期</p>
                <p>性别</p>
                 <p>手机号</p>
                <p>邮箱</p>
                <p>身份证</p>
                 <p>微信号</p>
                <p>QQ号</p>
            </div>
            <div class="inputPwdBox">
                <input class="input" type="text" name=""  placeholder="请输入姓名">
                <input class="input" type="text" name=""  placeholder="请输入出生日期">
                <select class="select" name="" id=""> 
                    <option value="男">男</option>
                    <option value="女">女</option>
                </select>
                <div class="proving">
                    <input type="text" name=""  placeholder="+86">
                    <p class="obtainProving">获取验证码</p>
                    <p class="overProving">已验证</p>
                </div>
                <input class="input" type="text" name=""  placeholder="请输入邮箱">
                <input class="input" type="text" name=""  placeholder="请输入身份证">
                <input class="input" type="text" name=""  placeholder="请输入微信号">
                <input class="input" type="text" name=""  placeholder="请输入QQ号">
                
            </div>
        </div>
        <div class="confirm">
                <router-link to="/confirm" class="confirmBox">保存信息</router-link>
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
    padding-top: 30px;
    box-sizing: border-box;
    .inputPwd{
        .textPwd{
            float: left;
            width: 120px;
            p{
                color: #999999;
                height: 42px;
                line-height: 42px;
                margin-top: 10px;
                text-align: right ;
            }
        }
        .inputPwdBox{
            float: left;
            margin-left: 20px;
            .input{
                width:400px;
                height: 40px;
                display: block;
                margin-top: 10px;
                border-radius: 5px ;
                border:1px solid #dddddd;
                overflow: hidden;
                outline: none;
                text-indent: 10px;
            }
            .select{
                width: 400px;
                height: 42px;
                border-radius: 5px ;
                border:1px solid #dddddd;
                text-indent: 10px;
                margin-top: 10px;
                outline: none;
            }
            .proving{
                width: 400px;
                height: 42px;
                 border-radius: 5px ;
                // border:1px solid #dddddd;
                margin-top: 10px;
                position: relative;
               input{
                   position: absolute;
                   top: 0;
                   left: 0;
                   width: 242px;
                   height: 42px;
                   box-sizing: border-box;
                    text-indent: 10px;
                     border:1px solid #dddddd;
                    outline: none;
                    border-top-left-radius: 5px;
                    border-bottom-left-radius: 5px;
               }
                .obtainProving{
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 160px;
                    height: 42px;
                    line-height: 40px;
                    border:1px solid #dddddd;
                    box-sizing: border-box;
                    border-top-right-radius: 5px;
                    border-bottom-right-radius: 5px;
                    cursor: pointer;
                }
                .overProving{
                    position: absolute;
                    top: 10px;
                    left: 190px;
                    display: block;
                    font-size: 13px;
                    color: #9bc604;
                }
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
             color: #333333;
        }
    }
}
</style>