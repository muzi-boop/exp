<template>
    <div class="content">
        <div class="VideoBox">
            <p class="videoTitle">全民cli</p>
            <div class="clearFiy">
                <p class="videoLoad"></p> 
                <p class="icot iconfont">&#xe625;</p>
            </div>
            <div class="mianClearFiy">
                <p class="left">上传成功100%</p>
                <router-link class="right" to="">重新上传</router-link>
            </div>
        </div>
        <div class="currBox">
            <div class="leftBox">
                <p class="li">标题</p>
                <p class="li">分类</p>
                <p class="li">课程介绍</p>
            </div>
            <div class="leftTwoBox">
                <input class="updataInput" type="text" placeholder="请输入课程标题">
                <select class="updataSelect" name="" id="" aria-placeholder="请选择课程分类">
                    <option value="Java">Java</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="PHP">PHP</option>
                </select>
                <textarea class="updataTextarea" name="" id="" cols="30" rows="10"></textarea>
                <router-link class="locatsion" to="reupload">保存信息</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'updata',
    data(){

    }
}
</script>

<style lang="less" scoped>
.content{
    float: left;
    width: 900px;
    height:584px ;
    background: #fff;
    border-radius: 10px;
    margin-left: 20px;
    overflow: hidden;
    .VideoBox{
        padding: 30px;
        background: #fafeff;
        border-bottom: 1px solid #f6f6f6;
        .videoTitle{
            text-align: left;
            font-size: 13px;
        }
        .clearFiy{
             margin-top: 10px;
             margin-bottom: 10px;
            .videoLoad{
               
                width: 800px;
                height: 10px;
                background: #00aaff;
                border-radius: 10px;
                float: left;
                margin-top: 4px;
            }
            .icot{
                float: left;
                color: #00aaff;
                margin-left: 10px;
            }
            &::after{
                content: '';
                display: block;
                clear: both;
            }
        }
        .mianClearFiy{
            .left{
                float: left;
                font-size: 12px;
            }
            .right{
                float: right;
                font-size: 12px;
                color: #00aaff;
            }
            &::after{
                content: '';
                display: block;
                clear: both;
            }
        }
    }
    .currBox{
        padding-top:30px; 
        .leftBox{
            width: 130px;
            float: left;
            .li{
                height: 40px;
                line-height: 40px;
                margin-bottom: 10px;
                text-align: right;
            }
        }
        .leftTwoBox{
            margin-left: 20px;
            width: 720px;
            float: left;
            .updataInput{
                height: 40px;
                display: block;
                width: 100%;
                outline: none;
                text-indent: 10px;
            }
            .updataSelect{
                margin-top: 10px;
                display: block;
                height: 40px;
                width: 100%;
                 outline: none;
                text-indent: 10px;
            }
            .updataTextarea{
                margin-top: 10px;
                width: 100%;
                display: block;
                 outline: none;
                text-indent: 10px;
                resize: none;
            }
            .locatsion{
                margin-top: 20px;
                float: left;
                width: 160px;
                height: 40px;
                background: #00aaff;
                border-radius: 6px;
                overflow: hidden;
                line-height: 40px;
                color: #fff;
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