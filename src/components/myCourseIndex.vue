<template>
    <div class="content">
        <router-link to="updata" class="iconfont icft">&#xe622;</router-link>
        <ul >
            <li>1、不得上传未经授权的同人作品，以及色情、反动等违法视频</li>
            <li>2、视频大小限制: 不支持断点续传，视频文件最大200M</li>
            <li>3、支持视频音频格式: mp4、flv、webm、f4v</li>
            <li>4、不支持时长小于1秒或大于10小时的视频文件，上传后将不能成功转码</li>
            <li>5、高清(360p):视频分辨率>=640*360,视频码率>=800kbps</li>
            <li>6、高清(360p):视频分辨率>=640*360,视频码率>=800kbps</li>
            <li>7、高清(360p):视频分辨率>=640*360,视频码率>=800kbps</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"myCourseIndex",
    data () {
        return{
            
        }
    }
}
</script>
<style lang="less" scoped>
.content{
    float: left;
    width:900px ;
    height: 584px;
    margin-left: 20px;
    background: #fff;
    border-radius: 10px;
    padding: 70px 0px;
    box-sizing: border-box;
    .icft{
        font-size: 60px;
        color: #00aaff;
    }
    ul{
        margin-top: 55px;
        li{
            margin-left: 260px;
            text-align: left;
            margin-top: 15px;
            list-style: none;
            font-size: 13px;
            color: #ccc;
        }
    }
}
</style>