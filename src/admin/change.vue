<template lang="html">
   <div>
        <div class="admin-container">
            <el-form ref="form" :model="form" label-width="100px">   
                <el-form-item label="文章标题">
                    <el-input v-model="form.title" placeholder="请输入标题"></el-input>
                </el-form-item>  
                <el-form-item label="文章描述">
                    <el-input v-model="form.desc" auto-complete="off" placeholder="请输入文章描述"></el-input>
                </el-form-item>
                <el-form-item label="文章类型">
                    <el-input v-model="form.tags" placeholder="请输入文章类型"></el-input>
                </el-form-item>
                <el-form-item label="保存为草稿" style="text-align:left;">
                    <el-radio v-model="radio" label=false>是</el-radio>
                    <el-radio v-model="radio" label=true>否</el-radio>
                </el-form-item>
            </el-form>
            <mavon-editor class="set" v-model="value" @change="getContent"></mavon-editor>
            <div class="footer">
                <el-popover placement="top" ref="popover5" width="160" v-model="visible2">
                    <p>确定提交吗？</p>
                    <div style="text-align:right;margi;0;">
                        <el-button type="text" size="mini" @click="visible2=false">取消</el-button>
                        <el-button type="primary" size="mini" @click="modifyArticle">确定</el-button>
                    </div>
                </el-popover>
                <el-button v-popover:popover5 class="submit">发布</el-button>
            </div>
        </div>
   </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      value: "",
      content: "",
      visible2: false,
      form: {
        title: "",
        desc: "",
        tags: ""
      },
      radio: true
    };
  },
  mounted() {
    this.getValue();
  },
  methods: {
    getContent(value, render) {
      this.content = render;
    },
    getValue() {
      let articleId = this.$route.query.id;
      axios
        .post("http://localhost:3000/api/article/change/" + articleId, {})
        .then(res => {
          if (res.data.success === true) {
            this.value = res.data.article.content;
            this.form.title = res.data.article.title;
            this.form.desc = res.data.article.desc;
            this.form.tags = res.data.article.tag;
            this.radio = res.data.article.publish;
          } else {
            this.value = "";
          }
        });
    },
    modifyArticle() {
      let articleId = this.$route.query.id;
      axios
        .post("http://localhost:3000/api/article/modify/" + articleId, {
          content: this.content,
          title: this.form.title,
          desc: this.form.desc,
          tag: this.form.tags,
          publish: this.radio
        })
        .then(res => {
          if (res.data.success === true) {
            this.$message({
              type: "succes",
              message: "文章修改成功！"
            });
            this.visible2 = false;
          } else {
            this.$message.error("修改失败");
          }
        });
    }
  }
};
</script>

<style lang="css">
#tags .el-tap + .el-tag {
  margin-left: 10px;
}
.tags .button-new-tag,
.input-new-tag {
  margin-left: 10px;
  height: 24px;
  line-height: 22px;
  padding-top: 0;
  padding-bottom: 0;
}
.tags .input-new-tag {
  width: 78px;
  margin-left: 10px;
  vertical-align: bottom;
}
.footer {
  overflow: hidden;
  margin: 0 auto;
  padding-top: 20px;
}
.row-bg {
  background-color: #d3dce6;
  width: 100%;
  height: auto;
  border-radius: 2px;
}
.set {
  height: 620px;
}
.submit {
  float: right;
}
.left {
  float: left;
}
</style>

