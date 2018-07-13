<template lang="html">
    <div>
        <el-table border style="width:100%;" :default-sort="{prop:'date',order:'descending'}">
          <el-table-column label="编号" prop="articleId" sortable width="150"></el-table-column>
          <el-table-column label="标题" prop="title"  width="90"></el-table-column>
          <el-table-column label="描述" prop="describtion"  width="150"></el-table-column>
          <el-table-column label="标签" prop="tag"  width="70"></el-table-column>
          <el-table-column label="发布时间" prop="createDate"  width="180"></el-table-column>
          <el-table-column label="内容" prop="content"></el-table-column>
          <el-table-column label="操作"  width="210">
              <template>
                  <el-button type="info" size="small">查看/编辑</el-button>
                  <el-button type="danner" size="small">删除</el-button>
              </template>
          </el-table-column>
        </el-table>
    </div>
</template>
<script>            
export default {

}
</script>
