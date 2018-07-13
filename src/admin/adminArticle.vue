<template lang="html">
    <div>
        <div class="admin-container">
            <mavon-editor class="set" v-model="value" ></mavon-editor>
            <div class="footer">
                <el-popover placement="top" ref="popover5" width="160">
                    <p>确定提交吗？</p>
                    <div style="text-align:right;margi;0;">
                        <el-button type="text" size="mini">取消</el-button>
                        <el-button type="primary" size="mini">确定</el-button>
                    </div>
                </el-popover>
                <el-button v-popover:popover5 class="submit">发布</el-button>
                <div class="left">
                    <el-button>填写信息</el-button>
                    <el-button>添加分类</el-button>
                </div>
            </div>
        </div>
        <el-dialog title="文章信息" :visible.sync="dialogTableVisible">
            <el-form :model="form">
                <el-form-item label="文章标题" :label-width="formLabelWidth">
                    <el-input  placeholder="请输入标题"></el-input>
                </el-form-item>  
                <el-form-item label="文章标签" :label-width="formLabelWidth">
                    <el-select  placeholder="请选择活动区域">
                      <el-option v-for="item in tags" :key="item.name" :label="item.name" :value="item.name"></el-option>
                    </el-select>
                </el-form-item>  
                <el-form-item label="文章描述" :label-width="formLabelWidth">
                    <el-input  auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button >取消</el-button>
                <el-button  type="primary">确定</el-button>
            </div>
        </el-dialog>
        <el-dialog title="标签分类"     id="tags">
            <el-tag :closable="true" :close-transition="false">css</el-tag>
            <el-input class="input-new-tag" v-if="inputVisible"  ref="saveTagInput" size="mini"></el-input>
            <el-button v-else class="button-new-tag" size="small">+New Tag</el-button>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary">确定</el-button>
            </div>
        </el-dialog>    
    </div>
</template>

<script>
import axios from 'axios'
export default { 
    data(){
        return {
            value:'# 请开始填写',
            tags:[],
            content:'',
            visible2:false,
            dialogTableVisible:false,
            dialogtableVisible2:false,
            inputValue:'',
            inputVisible:false,
            form:{
                title:'',
                tag:'',
                describtion:'',
            },
            formLabelWidth:'120px'
        }
    },  
    // mounted(){
    //     this.getTags()
    // },
    // methods:{
    //     getContent(value,render){
    //         this.content=render
    //     },

    //     subArticle(){
    //         if(!this.form.title){
    //             this.$message.error('无标题')
    //         }else if(!this.content){
    //             this.$message.error("无内容")  
    //         }else{
    //             axios.post("/api/articleSub",{
    //                 title:this.form.title,
    //                 tag:this.form.tag,
    //                 describtion:this.form.describtion,
    //                 content:this.content
    //             }).then((response)=>{
    //                 let res=response.data
    //                 if(res.status=='0'){
    //                     this.$message({
    //                         type:'success',
    //                         message:'文章已发布',
    //                     })
    //                     this.visible2=false
    //                 }else{
    //                     this.$message.error('未发布')
    //                 }
    //             })
    //         }
    //     },
    //     getTags(){
    //         axios.get("/api/tags").then((result)=>{
    //             let res=result.data
    //             if(res.status=="0"){
    //                 this.tags=res.result.list;
    //             }else{
    //                 this.tags=[];
    //             }
    //         })
    //     },
    //     handleClose(tag){
    //         this.tags.splice(this.tags.indexOf(tag.name),1);
    //         axios.post("/api/tagsDelete",{
    //             tagDel:tag
    //         }).then((response)=>{
    //             let res=response.data
    //             if(res.status=='0'){
    //                 this.$message({
    //                     type:'success',
    //                     message:'标签已删除'
    //                 })
    //             }else{
    //                 this.$message.error('未删除')
    //             }
    //         })
    //     },
    //     showInput(){
    //         this.inputValue=true;
    //         this.$nextTick(_=>{
    //             this.$refs.saveTagInput.$refs.input.focus();
    //         });
    //     },
    //     handleInputConfirm(){
    //         let inputValue=this.inputValue;
    //         if(inputValue){
    //             this.tags.push({name:inputValue});
    //             axios.post("/api/tagsAdd",{
    //                 tagAdd:inputValue
    //             }).then((response)=>{
    //                 let res=response.data
    //                 if(res.status=='0'){
    //                     this.$message({
    //                         type:'success',
    //                         message:'标签已添加'
    //                     })
    //                 }else{
    //                     this.$message.error('未添加')
    //                 }
    //             })
    //         }
    //         this.inputValue=false;
    //         this.inputValue='';
    //     }
    // }
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

