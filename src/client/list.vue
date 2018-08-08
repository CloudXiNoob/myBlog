<template lang="html">
    <div class="article_list">
        <nav-header></nav-header>
        <article class="item" v-for = "item in listData">
            <div class="title">{{item.title}}</div>
            <div class="sub_title">
                <span class="time"><i class="icon iconfont icon-msnui-time"></i>发表于 {{item.createTime}}</span>
            </div>
            <div class="abstract">
               {{item.desc}}
            </div>
            <div class="read_button" @click="readAll">
                <a href="javascript:;">阅读全文 »</a>
            </div>
            <div class="tags">{{item.tag}}</div>
            <div class="triangle"></div>
        </article>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
import axios from "axios";
import NavHeader from "../components/Header.vue";
import NavFooter from "../components/footer.vue";
export default {
  name: "Blog",
  data() {
    return {
      listData: [],
      loading: false,
      allPage: "",
      allCount: 0,
      page:1,
      pageSize:10
    };
  },
  components: {
    NavHeader,
    NavFooter
  },
  methods: {
    init() {
      var param = {
        tag: "",
        page: this.page,
        limit: this.pageSize
      };
      axios
        .post("http://localhost:3000/api/article/getPublish", param)
        .then(res => {
          if (res.data.success === true) {
            this.listData = res.data.articleArr;
            this.loading = false;
            this.allPage = res.data.allPage;
            this.allCount = res.data.allNum;
          }
        });
    },
    readAll() {
      this.$router.push("/detail");
    }
  },
  mounted() {
    this.init();
  }
};
</script>
<style scoped>
@import "../../static/iconfont/iconfont.css";
.article_list {
  width: 100%;
  height: 100%;
  background: #fff;
  padding-bottom: 60px;
}
.item {
  position: relative;
  width: 900px;
  margin: 20px auto 80px auto;
  padding: 25px;
  background: #fff;
  -webkit-box-shadow: 0 0 14px #cacbcb;
  -moz-box-shadow: 0 0 14px #cacbcc;
  box-shadow: 0 0 14px #cacbcc;
}
.item .title {
  font-size: 20px;
  color: #333;
  font-weight: bold;
}
.item .sub_title {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 320px;
  margin: 10px auto;
  font-size: 14px;
  color: #666;
}
.item .sub_title .icon-msnui-time {
  margin-right: 5px;
}
.abstract {
  margin-top: 30px;
  text-align: left;
  letter-spacing: 2px;
  line-height: 26px;
  text-indent: 32px;
}
.read_button {
  margin-top: 50px;
}
.read_button a {
  display: inline-block;
  padding: 0 20px;
  border: 2px solid #96e1fc;
  line-height: 2;
  color: #96e1fc;
  font-size: 14px;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
}
.read_button a:hover {
  background: #96e1fc;
  color: #fff;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
}
.tags {
  position: absolute;
  top: 0;
  right: 20px;
  width: 30px;
  height: 60px;
  line-height: 60px;
  font-size: 12px;
  background: #96e1fc;
}
.triangle {
  position: absolute;
  top: 40px;
  right: 20px;
  width: 0;
  height: 0;
  border-top: 15px solid #96e1fc;
  border-right: 15px solid #96e1fc;
  border-bottom: 15px solid #fff;
  border-left: 15px solid #96e1fc;
}
</style>


