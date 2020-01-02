<template>
    <div class="contentup">
        <router-link 
        class="courBox"
        v-for="(item,index) in list" 
        v-bind:key="index"
          :to="item.url"
          @click.native='mounth(index)'
          :class="connst==index ? {active:isactive}:''"
        >
        <span class="icon iconfont" @click.native='mounth(index)' v-html="connst==index ? (item.icon):(item.icons)"></span>
        {{item.name}}</router-link>
        <router-link to="" class="asxaput">我要提问</router-link>
        <!-- <router-view></router-view> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            isactive:true,
            connst:0,
            list:[{
                name:'全部',
                url:'/qa/answerying',
                icon: '&#xe625;',
                icons: '&#xe63e;'
            },{
                name:'待处理',
                url:'/',
                 icon:'&#xe625;',
                 icons: '&#xe63e;'
            }]
        }
    },
    methods: {
        mounth: function (index){
            this.connst = index;

        }
    }
}
</script>

<style lang="less" scoped>
.contentup{
    float: left;
    margin-left: 20px;
    width: 900px;
    height: 100px;
    background: #fff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    position: relative;
    .courBox{
        margin-left: 20px;
        float: left;
        line-height: 100px;
        color: #333333;
        &:hover {
            vertical-align: middle;
            color: #00aaff;
        }
    }
    .asxaput{
        position: absolute;
        top: 35px;
        right: 35px;
        background: #00aaff;
        width: 100px;
        height: 30px;
        border-radius: 5px;
        color: #fff;
        line-height: 30px;
    }
    .active{
        color: #00aaff;
    }
}
</style>