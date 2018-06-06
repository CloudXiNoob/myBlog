<template lang="html">
    <div>
        <div class="admin-container">
            <mavon-editor class="set" v-model="value" @change="getContent"></mavon-editor>
            <div class="footer">
                <el-popover placement="top" ref="popover" width="160" v-model="visible2">
                    <p>确定提交吗？</p>
                    <div style="text-align:right;margi;0;">
                        <el-button type="text" size="mini" @click="visible2=false">取消</el-button>
                        <el-button type="primary" size="mini" @click="subArticle">确定</el-button>
                    </div>
                </el-popover>
                <el-button v-popover:popver5 class="submit">发布</el-button>
                <div class="left">
                    <el-button @click="dialogTableVisible=true">填写信息</el-button>
                    <el-button @click="dialogTableVisible2=true">添加分类</el-button>
                </div>
            </div>
        </div>
        <el-dialog title="文章信息" :visible.sync="dialogTableVisible">
            <el-form :model="form">
                <el-form-item label="文章标题" ：label-width="formLabelWidth">
                    <el-input v-model="form.title" placeholder="请输入标题"></el-input>
                </el-form-item>    
            </el-form-item>
        </el-dialog>
    </div>
</template>

