<template lang="html">
    <div class="header fixed"  >
        <div class="wrapper">
            <ul class="tab">
                <li>
                    <router-link :to="{path:'/blog'}" active-class="bottom-nav-active">首页</router-link>
                </li>
                <li>
                    <router-link :to="{path:'/resume'}" active-class="bottom-nav-active">简历</router-link>
                </li>
                <li>
                    <router-link :to="{path:'/picture'}" active-class="bottom-nav-active">照片</router-link>
                </li>
                <li>
                    <router-link :to="{path:'/about'}" active-class="bottom-nav-active">关于</router-link>
                </li>
            </ul>
        </div>
        <p>不想做鹰的菜鸟不是好菜鸟</p>
    </div>
</template>
<script>
export default {
  data() {
    return {
      IsFixed: false
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style scoped>
.header {
  width: 100%;
  height: 360px;
  margin-bottom: 40px;
  background: url(../../static/images/bg.jpg) no-repeat center;
}
.wrapper {
  width: 100%;
  height: 48px;
  line-height: 48px;
  background: #333;
  opacity: 0.8;
}
.header p {
  margin-top: 112px;
  font-size: 24px;
  color: #fff;
  font-weight: bold;
  text-decoration: line-through;
}
.tab {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 1200px;
  margin: auto;
}
.tab li a {
  display: inline-block;
  color: #fff;
  height: 48px;
  font-size: 18px;
  margin-left: 20px;
  padding: 0 17px;
}
.tab li:nth-child(1) {
  margin-left: 0;
}
.tab li a:hover {
  background: #96e1fc;
}
.bottom-nav-active {
  background: #96e1fc;
}
.fixed {
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
}
</style>

