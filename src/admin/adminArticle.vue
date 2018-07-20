<template lang="html">
    <div>
        <div class="admin-container">
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
                <div class="left">
                    <el-button type="button" @click="dialogTableVisible=true">填写信息</el-button>
                </div>
            </div>
        </div>
        <el-dialog title="文章信息" :visible.sync="dialogTableVisible">
            <el-form ref="form" :model="form" label-width="80px">   
                <el-form-item label="文章标题">
                    <el-input v-model="form.title" placeholder="请输入标题"></el-input>
                </el-form-item>  
                <el-form-item label="文章描述">
                    <el-input v-model="form.describtion" auto-complete="off" placeholder="请输入文章描述"></el-input>
                </el-form-item>
                <el-form-item label="文章类型">
                    <el-input v-model="form.tags" placeholder="请输入文章类型"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogTableVisible=false">取消</el-button>
                <el-button type="primary" @click="dialogTableVisible=false">确定</el-button>
            </div>
        </el-dialog>
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
            dialogTableVisible:false,
            form:{
                title:'',
                tags:'',
                describtion:'',
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
            else if(!this.form.describtion){    
                this.$message.error("请输入文章描述")  
            }
            else{
                axios.post("/api/articleSub",{
                    title:this.form.title,
                    tag:this.form.tags,
                    describtion:this.form.describtion,
                    content:this.content
                }).then((response)=>{
                    let res=response.data
                    if(res.status=='0'){
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
    .admin-container{
        flex: 1;
        overflow-y:scroll;
        padding: 20px
    }
    .set{
        height: 740px;
    }
    .submit{
        float: right;
    }
    .left{
        float: left;
    }
</style>

