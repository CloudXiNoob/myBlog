<template lang="html">
    <div class="admin-container">
       <mavon-editor class="set" v-model="value" @change="getContent"></mavon-editor>
       <div class="footer">
           <el-popover placement="top" ref="popover5" width="160" >
               <p>确定提交吗？</p>
               <div style="text-align:right; margin:0;">
                   <el-button type="text" size="mini">取消</el-button>
                   <el-button type="primary" size="mini">确定</el-button>
               </div>
           </el-popover>
           <el-button v-popover:popover5 class="submit">修改</el-button>
           <div class="left">
               <el-button>修改信息</el-button>
               <el-button>修改分类</el-button>
           </div>
       </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{ 
            value:'',
            content:'',
            visible2:false
        }
    },
    mounted(){
        this.getValue()
    },
    methods:{
        getContent(value,render){
            this.content=render
        },
        getValue(){
            let articleId=this.$route.query.articleId
            let param={
                articleId:articleId
            }
            axios.get("/api/articleDetial",{
                params:param
            }).then((result)=>{
                let  res=result.data
                if(res.status=="0"){
                    this.value=res.result.content
                }else{
                    this.value=''
                }
            })
        },
        modifyArticle(){    
            let articleId=this.$route.query.articleId
            axios.post("/api/articleModify",{
                articleId:articleId,
                content:this.content
            }).then((responose)=>{
                let res=response.data
                if(res.status=='0'){
                    this.$message({
                        type:'succes',
                        message:'文章已修改'
                    })
                    this.visible2=false
                }else{
                    this.$message.error('未修改')
                }
            })
        }
    }
}
</script>

