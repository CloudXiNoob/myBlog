<template lang="html">
    <div>
        <el-container>
            <el-header height="80px">
                <div>
                    <div>
                         <span class="title">博客管理系统</span>
                    </div>
                    <div style="float:right;">
                        <el-dropdown @command="getOut">
                            <i class="el-icon-setting" style="margin-right: 15px"></i>
                            <el-dropdown-menu slot="dropdown" style="margin-top:-20px;" >
                                <el-dropdown-item >退出</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                        <span>{{name}}</span>
                    </div>
                </div>
            </el-header>
            <el-container>
                <el-aside width="180px">
                    <el-menu default-active="$router.index" :router="true" mode="vertical" >
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
                </el-aside>
                <el-container>
                     <el-main>  
                        <transition name="fade" mode="out-in">
                            <router-view></router-view>
                        </transition>
                    </el-main>
                    <el-footer>Copyright© 2017-2018 by cloudxi</el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>
<script>
export default {
    data(){
        return {
            name:''
        }
    },
    watch:{
        "$route":'checkLogin'
    },
    created(){
        this.checkLogin()
    },
    methods:{
        checkLogin(){
           let token= localStorage.getItem('token');
           let nickName = localStorage.getItem('name');
           this.name = nickName;
           if(token===null){
               this.$router.push('/login');
           }
        },
        getOut(){
            console.log(1);
            this.$router.push('/login');
            localStorage.removeItem('token');
        }
    }
}
</script>
<style lang="css">
   
    #app{
        margin-top: 0px;
    }

    .title{
        float: left;
    }

    .el-header{
        background-color: #B3C0D1;
        line-height: 80px;
    }
    .el-aside{
        background-color:#B3C0D1;
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
    body{
        margin: 0;
        padding: 0;
    }
    .el-footer{
        /* position: fixed;
        bottom: 0; */
        width: 100%;
        text-align: center;
        line-height: 60px;
        background-color:#B3C0D1;
    }
    .el-main {
       height: calc(100% - 140px);
    }
</style>


