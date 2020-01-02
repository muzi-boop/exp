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
        <div class="tips">
            <p class="tipsIcon iconfont">&#xe625;</p>
            <p class="tipsState">保存成功、等待审核</p>
            <p class="tipsOver">课程上传成功，正在进行人工审核，我们会在24小<br>时之后告知您审核结果，请耐心等候</p>
            <router-link to="/updata" class="againTips">继续上传</router-link>
        </div>
    </div>
</template>

<script>
export default {
    
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
    .tips{
        box-sizing: border-box;
        padding-top: 50px;
        .tipsIcon{
            font-size: 60px;
            color: #00aaff;
        }
        .tipsState{
            margin-top: 20px;
            font-size: 18px;
            color: #000;
        }
        .tipsOver{
            margin-top: 10px;
            font-size: 13px;
            color: #888888;
        }
        .againTips{
            display: block;
            width: 160px;
            height: 40px;
            border-radius: 8px;
            background: #00aaff;
            color: #fff;
            line-height: 40px;
            margin: 20px auto;
        }
    }
}
</style>