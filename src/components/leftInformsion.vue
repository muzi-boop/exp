<template>
    <section class="essinforBox">
        <router-link to="" class="eccinforA">
            <img class="eccinforImg" src="../assets/user-image.jpg" alt="">
            <p class="bj">编辑</p>
        </router-link>
        <router-link 
        :to="item.url"
         v-for="(item,index) in list" v-bind:key="index" class="listNav"
         @click.native='mounth(index)'
         :class="conn === index ? 'active':''">
         <span class="iconfont" v-html="item.icon"></span>
         {{item.name}}
         </router-link> 
    </section>
</template>

<script>
export default {
    name: '',
    data (){
        return {
            conn:0,
            list:[
                {
                    name:"我的信息",
                    url:'/infor',
                    icon:`&#xe600;`
                },
                {
                    name:"认证信息",
                    url:'/seniority',
                    icon:`&#xe6c6;`
                },
                {
                    name:"密码管理",
                    url:'/pwd',
                    icon:`&#xe611;`
                },
            ]
        }
    },
    methods: {
        mounth : function (index) {
            this.conn = index
        }
    },
}
</script>

<style lang="less" scoped>
.essinforBox{
    float: left;
    width: 280px;
    height:585px ;
    border-radius: 10px;
    background: #fff;
    padding-top: 50px;
    box-sizing: border-box;
    .eccinforA{
        width: 100px;
        height: 100px;
         border-radius: 50%;
         overflow: hidden;
        display: block;
        margin:  0 auto;
        position: relative;
        .eccinforImg{
            width: 100px;
            height: 100px;
            // border-radius: 50%;
        }
        .bj{
            width: 92px;
            height: 30px;
            position: absolute;
            bottom: 0px;
            left: 4px;
            background: rgba(0,0,0,.5);
            border-bottom-left-radius: 20px;
            border-bottom-right-radius: 20px;
            color: #fff;
            opacity: 0;
        }
        &:hover .bj{
            opacity: 1;
            transition: all .3s;
        }
    }
    .listNav{
    display: block;
    margin-top:50px; 
    color: #2c3e50;
    &:hover{
         color: #00aaff;
    }
    }
    .active{
        color: #00aaff;
    }
}

</style>