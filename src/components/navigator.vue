<template>
    <nav class="nav">
        <p to="/" class="myCenter">My Center</p>
        <div class="navFloatLeftBox">
            <router-link v-for="(item,index) in list" v-bind:key="index" :to="item.url" class="navA" 
            v-show="connst !=index"
            @click.native='mounth(index)'
            :class="consunt==index ? {active:isactive}:''" >
                {{item.name}}
                </router-link>
    
        </div>
        <router-link to="/addcourse" class="navARight iconfont">&#xe602;添加课程</router-link>
    </nav>
</template>
<script>
export default {
    name: 'navigator',
    data () {
        return {
            consunt:3,
            connst:3,
            isactive:true,
            list:[{
                
                name:"基本信息",
                url:'/about'
            },{
                
                name:"课程管理",
                url:'/cours'
            },{
                
                name:"我的问答",
                url:'/qa'
            },{
                
                name:"我的收入",
                url:'/'
            }]
        }
    },
    methods: {
        mounth:function (index){
            this.consunt = index;
            this.connst = -1;
            if(index == 3){
                this.connst = 3;
            }
            
        }
    },
}
</script>

<style lang="less">
*{
    margin: 0;
    padding: 0;
}
a{
    text-decoration: none;
}
    .nav{
        margin: 0 auto;
        width: 1200px;
        overflow: hidden;
        .myCenter{
            float: left;
            color: #00aaff;
            line-height: 90px;
            font-size: 22px;
            box-sizing: border-box;
            padding-right: 20px;
        }
        .navFloatLeftBox{
            float: left;
            .navA{
                line-height: 90px;
                height: 90px;
                color: #333 ;
                margin-left: 60px;
                padding:30px 0px ; 
                &:hover{
                    color: #00aaff;
                    
                }
            }
            .active{
                 color: #00aaff;
                 border-bottom: 2px solid #00aaff;
            }
            
        }
        .navARight{
            float: right;
            line-height: 30px;
            border: 1px solid #ccc;
            border-radius: 20px;
            width: 135px;
            height: 30px;
            color: #00aaff ;
            margin-top: 29px;
        }
    }
    // &::after{
    //     content: '';
    //     display: block;
    //     clear: both;
    // }
</style>