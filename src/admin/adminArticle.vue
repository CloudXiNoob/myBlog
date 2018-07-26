<template lang="html">
    <div>
        <div class="admin-container">
            <el-form ref="form" :model="form" label-width="80px">   
                <el-form-item label="文章标题">
                    <el-input v-model="form.title" placeholder="请输入标题"></el-input>
                </el-form-item>  
                <el-form-item label="文章描述">
                    <el-input v-model="form.desc" auto-complete="off" placeholder="请输入文章描述"></el-input>
                </el-form-item>
                <el-form-item label="文章类型">
                    <el-input v-model="form.tags" placeholder="请输入文章类型"></el-input>
                </el-form-item>
            </el-form>
            <mavon-editor class="set" v-model="value" @change="getContent"></mavon-editor>
            <div class="footer">
                <el-popover placement="top" ref="popover5" width="160" v-model="visible2">
                    <p>确定提交吗？</p>
                    <div style="text-align:right;margi;0;">
                        <el-button type="text" size="mini" @click="visible2=false">取消</el-button>
                        <el-button type="primary" size="mini" @click="subArticle">确定</el-button>
                    </div>
                </el-popover>
                <el-button v-popover:popover5 class="submit">发布</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default { 
    data(){
        return {
            value:'#请开始填写',
            tags:[],
            content:'',
            visible2:false,
            form:{
                title:'',
                tags:'',
                desc:'',
            },
        }
    },  
    methods:{
        getContent(value,render){
            this.content=render
        },
        subArticle(){
           if(!this.content){
                this.$message.error("请输入内容")  
            }
            else if(!this.form.title){
                this.$message.error('请输入标题')
            }
            else if(!this.form.desc){    
                this.$message.error("请输入文章描述")  
            }
            else{
                axios.post("http://localhost:3000/api/article/create",{
                    title:this.form.title,
                    tag:this.form.tags,
                    desc:this.form.desc,
                    content:this.content
                }).then((res)=>{
                    if(res.data.success === true){
                        this.$message({
                            type:'success',
                            message:'文章已发布',
                        })
                        this.visible2=false
                    }else{
                        this.$message.error('未发布')
                    }
                })
            }
        },
    }
}
</script>

<style lang="css">
    #tags .el-tap+.el-tag{
        margin-left: 10px;
    }
    .tags .button-new-tag,.input-new-tag{
        margin-left: 10px;
        height: 24px;
        line-height: 22px;
        padding-top: 0;
        padding-bottom: 0;
    }
    .tags .input-new-tag{
        width: 78px;
        margin-left: 10px;
        vertical-align: bottom;
    }
    .footer{
        overflow:hidden;
        margin: 0 auto;
        padding-top: 20px;
    }
    .row-bg{
        background-color: #d3dce6;
        width: 100%;
        height: auto;
        border-radius: 2px;
    }
    /* .admin-container{
        flex: 1;
        overflow-y:scroll;
        padding: 20px
    } */
    .set{
        height: 620px;
    }
    .submit{
        float: right;
    }
    .left{
        float: left;
    }
</style>

