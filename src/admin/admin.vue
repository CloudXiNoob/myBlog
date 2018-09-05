<template lang="html">
    <div class="wrapper">
        <div class="sideBar">
            <el-scrollbar wrapClass="scrollbar-wrapper">
                <el-menu default-active="$router.index" :router="true" mode="vertical" 
                :show-timeout="200" background-color="#304156" text-color="#bfcbd9" active-text-color="#409EFF">
                      <el-menu-item index="/admin/welcome">
                          <i class="el-icon-setting"></i>
                          <span slot="title">系统首页</span>
                      </el-menu-item>
                      <el-menu-item index="/admin/adminArticleList">
                          <i class="el-icon-menu"></i>
                          <span slot="title">文章列表</span>
                      </el-menu-item>
                      <el-menu-item index="/admin/adminArticle">
                          <i class="el-icon-edit"></i>
                          <span slot="title">新建文章</span>
                      </el-menu-item>
                      <el-menu-item index="/admin/uploadPicture">
                          <i class="el-icon-picture"></i>
                          <span slot="title">图片上传</span>
                      </el-menu-item>
                  </el-menu>
            </el-scrollbar>
          </div>
          <div class="main">
            <div class="header">
              <div class="info">
                <el-dropdown @command="getOut">
                    <i class="el-icon-setting" style="margin-right: 15px"></i>
                    <el-dropdown-menu slot="dropdown" style="margin-top:-20px;" >
                        <el-dropdown-item  command='index'>首页</el-dropdown-item>
                        <el-dropdown-item command='exit'>退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <span>{{name}}</span>
              </div>
            </div>
            <div class="main-content">
               <transition name="fade" mode="out-in">
                  <router-view></router-view>
              </transition>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      name: ""
    };
  },
  watch: {
    $route: "checkLogin"
  },
  created() {
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      let token = localStorage.getItem("token");
      let nickName = localStorage.getItem("name");
      let nickName = localStorage.getItem("name");
      this.name = nickName;
      if (token === null) {
        this.$router.push("/login");
      }
    },
    getOut(command) {
      if (command === "exit") {
        this.$router.push("/login");
        localStorage.removeItem("token");
      } else {
        this.$router.push("/admin");
      }
    }
  }
};
</script>
<style lang="css">
.sideBar {
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  width: 180px;
  height: 100%;
  z-index: 999;
  overflow: hidden;
}
.sideBar .el-menu {
  width: 100%;
  height: 100%;
}
.sideBar .el-scrollbar,
.sideBar .el-scrollbar__view {
  height: 100%;
}
.sideBar .scrollbar-wrapper {
  height: calc(100% + 15px);
}
.main {
  margin-left: 180px;
}
.header {
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #fff;
  border-bottom: 1px solid #e6e6e6;
}
.header .info {
  float: right;
  width: 200px;
  text-align: right;
  margin-right: 20px;
}
.main-content {
  padding: 20px;
}
body {
  margin: 0;
  padding: 0;
}
</style>


