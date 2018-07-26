<template lang="html">
    <div>
        <el-table border style="width:100%;" :default-sort="{prop:'createTime',order:'descending'}" :data="tableData">
          <el-table-column label="编号" prop="_id" sortable width="150" align="center"></el-table-column>
          <el-table-column label="标题" prop="title"  width="90" align="center"></el-table-column>
          <el-table-column label="描述" prop="desc"  width="150" align="center"></el-table-column>
          <el-table-column label="标签" prop="tag"  width="70" align="center"></el-table-column>
          <el-table-column label="发布时间" prop="createTime"  width="180" align="center"></el-table-column>
          <el-table-column label="内容" prop="content" align="center"></el-table-column>
          <el-table-column label="操作"  width="210" align="center">
              <template scope="scoped">
                  <el-button type="info" size="small">查看/编辑</el-button>
                  <el-button type="danner" size="small">删除</el-button>
              </template>
          </el-table-column>
        </el-table>
    </div>
</template>
<script>            
import axios from 'axios';
export default {
    data(){
        return {
            pageSize:8,
            page:1,
            tableData:[]
        }
    },
    methods: {
        init (){
            var param = {
                "tag":"",
                "page" : this.page,
                "limit" :this.pageSize
            }
            axios.post('http://localhost:3000/api/article/getAll',param).then((res) => {
                if(res.data.success === true){
                    this.tableData =res.data.articleArr
                }
            })
        },

    },
    mounted () {
        this.init()
    }
}
</script>
