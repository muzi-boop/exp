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
    </div>
</template>

<script>
export default {
    data() {
        return {
            isactive:true,
            connst:0,
            list:[{
                name:'已发布课程',
                url:'/cours/couserOver',
                icon: '&#xe625;',
                icons: '&#xe63e;'
            },{
                name:'审核中课程',
                url:'/cours/couserOingOing',
                 icon:'&#xe625;',
                 icons: '&#xe63e;'
            },{
                name:'未通过审核课程',
                 icon:'&#xe625;',
                url:'/cours/couserRefuse',
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
    width: 900px;
    height: 100px;
    background: #fff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
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
    .active{
        color: #00aaff;
    }
}
</style>