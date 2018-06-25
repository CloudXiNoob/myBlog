<template lang="html">
    <div class="article-list">
        <article class="block post wysiwyg" v-for="item in list">
            <h2>{{item.title}}</h2>
            <p class="article-meta">发布于{{item.createDate}}</p>
            <div class="ui ribbon label red">
                <a href="">{{item.tag}}</a>
            </div>
            <div class="abstract" v-html="item.content.html"></div>
            <p class="more"><router-link :to="{path:'/article',query:{article:item.articleId}}">阅读全文</router-link></p>
        </article>
        <div class="pages">
            <a href="javascript:;" @click="go(page-=1)" style="float:left;">上一页</a>
            <a href="javascript:;" @click="go(page+=1)" style="float:right;">下一页</a>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default{
        props:[
            'tagSelect'
        ],
        data(){
            return {
                list:[],
                page:1,
                pageSize:10,
                count:0
            }
        },
        watch:{
            tagSelect(){
                this.getTagList()
            }
        },
        mounted:{
            getList(){
                var param={
                    page:this.page,
                    pageSize:this.pageSize
                }
                axios.get("/api/articleList",{
                    params:param
                }).then((result)=>{
                    let res=result.data
                    if(res.status=='0'){
                        if(res.result.count==0){
                            this.page-=1;
                        return
                        }else{
                            this.list=res.result.list
                    }
                    }else{
                        this.list=[]
                    }
                })
            },
            go(){
                if(this.page<1){
                    this.page=1
                    return 
                }else{
                    this.getlist()
                }
            }
        }
    }
</script>