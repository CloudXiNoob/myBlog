<template lang="html">
    <div>
        <el-table border style="width:100%" :default-sort="{prop:'createTime',order:'descending'}" :data="tableData" v-loading="loading">
          <el-table-column type="index" width="150" align="center"></el-table-column>
          <el-table-column label="标题" prop="title"  width="180" align="center"></el-table-column>
          <el-table-column label="描述" prop="desc"  width="260" align="center" :show-overflow-tooltip='true' ></el-table-column>
          <el-table-column label="标签" prop="tag"  width="100" align="center"></el-table-column>
          <el-table-column label="发布时间" prop="createTime"  width="180" align="center"></el-table-column>
          <el-table-column label="内容" prop="content" align="center" :show-overflow-tooltip='true' ></el-table-column> 
          <el-table-column label="状态"  align="center"  prop="publish" :filters="[{text:'publish',value:'publish'},{text:'draft',value:'draft'}]"
          :filter-method="filterPublish" filter-placement="bottom-end">
            <template slot-scope="scope">
              <el-tag :type="scope.row.publish === true ? 'primary':'danger'" disable-transitions>{{scope.row.publish === true ? 'publish':'draft'}}</el-tag>
            </template>
          </el-table-column>    
          <el-table-column label="操作"  width="210" align="center">
            <template slot-scope="scope">
                <el-button type="info" size="small" @click="handle(scope.$index,scope.row)">查看/编辑</el-button>
                <el-button type="danner" size="small" @click="handleDelete(scope.$index,scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination layout="prev, pager, next, total" :total='allCount' background @current-change="getCurrentPage" 
        @prev-click="getCurrentPage" @next-click="getCurrentPage"></el-pagination>
    </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      pageSize: 10,
      page: 1,
      tableData: [],
      loading: true,
      allPage: "",
      allCount: 0
    };
  },
  methods: {
    init() {
      let token = localStorage.getItem("token");
      let param = {
        tag: "",
        page: this.page,
        limit: this.pageSize
      };
      axios
        .post("http://localhost:3000/api/article/getAll", param)
        .then(res => {
          if (res.data.success === true) {
            this.tableData = res.data.articleArr;
            this.loading = false;
            this.allPage = res.data.allPage;
            this.allCount = res.data.allNum;
          }
        });
    },
    handleDelete(index) {
      console.log(index);
      let id = this.tableData[index]._id;
      console.log(id);
      this.$confirm("将删除该文章，是否继续", "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        axios
          .post("http://localhost:3000/api/article/delete/" + id, {})
          .then(res => {
            if (res.data.success === true) {
              this.$message({
                type: "success",
                message: "文章已删除"
              });
              this.init();
            } else {
              this.$message.error("删除不成功");
            }
          });
      });
    },
    handle(index) {
      let articleId = this.tableData[index]._id;
      this.$router.push({ path: "/admin/change", query: { id: articleId } });
    },
    getCurrentPage(val) {
      console.log(val);
      let currentPage = val;
      this.page = currentPage;
      this.init();
    },
    filterPublish(value, row) {
      return row.publish === value;
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style scoped>
.el-pagination {
  float: right;
  margin-top: 20px;
  margin-bottom: 10px;
}
</style>

