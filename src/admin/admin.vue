<template lang="html">
    <div>
        <el-row>
            <el-menu theme="dark" :default-active="$router.path" class="el-menu" mode="horizontal" :router="false">
                    <el-menu-item index="1">博客管理系统</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">搜索引擎</template>
                        <el-menu-item index="2-1"><a href="https://www.baidu.com" target="_blank">百度</a></el-menu-item>
                        <el-menu-item index="2-1"><a href="https://www.google.com/" target="_blank">谷歌</a></el-menu-item>
                        <el-menu-item index="2-1"><a href="https://cn.bing.com/" target="_blank">必应</a></el-menu-item>
                    </el-submenu>
                </el-menu>
        </el-row>   
        <el-row type="flex">
            <el-menu default-active="$router.index" :router="true" mode="vertical" :collapse="isCollapse">
                <el-menu-item index="/admin/adminArticleList">
                    <i class="el-icon-menu"></i>
                    <span slot="title">文章列表</span>
                </el-menu-item>
                <el-menu-item index="/admin/adminArticle">
                    <i class="el-icon-setting"></i>
                    <span slot="title">新建文章</span>
                </el-menu-item>
                <el-menu-item index="/admin/uploadPicture">
                    <i class="el-icon-picture"></i>
                    <span slot="title">图片上传</span>
                </el-menu-item>
            </el-menu>
            <el-col :span="24" class="row-bg">  
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data(){
        return {
            isCollapse:false,
        }
    },
    // watch:{
    //     "$route":'checkLogin'
    // },
    // created(){
    //     this.checkLogin()
    // },
    methods:{
        // collapse(){
        //     this.isCollapse=!this.isCollapse
        // },
        // checkLogin(){
        //     if(!this.getCookie('user')){
        //         this.$router.push('/login')
        //     }
        // }
    }
}
</script>
<style lang="css">
    #app{
        margin-top: 0px;
    }
    a{
        text-decoration:none;
    }
    .row-bg{
        background-color: #d3dce6;
        width: 100%;
        height: 100%;
        border-radius: 2px;
    }
</style>


