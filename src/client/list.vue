<template lang="html">
    <div class="article_list">
        <nav-header></nav-header>
        <article class="item">
            <div class="title">介绍 Turbo：比 Yarn 和 NPM 快 5 倍，可以在本地浏览器中运行</div>
            <div class="sub_title">
                <span class="time"><i class="icon iconfont icon-msnui-time"></i>发表于 2018-01-28</span>
            </div>
            <div class="abstract">
                前言：这篇文章我在掘金翻译计划中跟着一起翻译的文章（感谢掘金翻译），我翻译了第三部分，然后校对了第二部分，这篇文章对于前端性能优化的技术还是比较新颖和全面的，所以决定自己阅读一遍英文原文，然后又用思维导图整理了下重点，英文原文还是挺长的，所以
                如果想要粗略的了解本文内容的可以直接查看我总结的思维导图
                如果看完思维导图觉得本文对你有所帮助的，可以查看我自己翻译并根据其他人翻译整理后的文章
                如果你英文阅读没有障碍，并且觉得我翻译不好的，可以直接阅读 英文原文
                推荐大家时间充裕的话可以自己阅读英文原文，此文是根据掘金翻译的四篇文章 + 其他的翻译文章 + 自己翻译修改得出的。因为翻译大家懂得，会有一些错误的地方，欢迎大家指出，本人不保证翻译没有错误，但已经尽力去翻译了，所以欢迎大家直接阅读英文原文！！欢迎大家直接阅读英文原文！！欢迎大家直接阅读英文原文！！
            </div>
            <div class="read_button">
                <a href="javascript:;">阅读全文 »</a>
            </div>
            <div class="tags">CSS</div>
            <div class="triangle"></div>
        </article>
    </div>
</template>
<script>
import NavHeader from '../components/Header.vue';
export default {
    name:'Blog',
    components:{
        NavHeader
    }
}
</script>
<style scoped>
    @import '../../static/iconfont/iconfont.css';
    .article_list{
        width: 100%;
        height: 100%;
        background: #fff;
    }
    .item{
        position: relative;
        width: 900px;
        margin:20px auto 80px auto; 
        padding: 25px;
        background:#fff;
        -webkit-box-shadow: 0 0 14px #cacbcb;
        -moz-box-shadow: 0 0 14px #cacbcc;
        box-shadow: 0 0 14px #cacbcc;
    }
    .item .title{
        font-size: 20px;
        color: #333;
        font-weight: bold;
    }
    .item .sub_title{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 320px;
        margin: 10px auto;
        font-size: 14px;
        color: #666;
    }
    .item .sub_title .icon-msnui-time{
        margin-right: 5px;
    }
   .abstract{
       margin-top:30px;
       text-align: left;
   }
    .read_button{
        margin-top: 50px;   
    }
   .read_button a{
        display: inline-block;  
        padding: 0 20px;
        border: 2px solid #96e1fc;
        line-height: 2;
        color: #96e1fc;
        font-size: 14px;
        transition-duration: .2s;
        transition-timing-function: ease-in-out;
        transition-delay: 0s;
   }
   .read_button a:hover{
        background: #96e1fc;
        color: #fff;
        transition-duration: .2s;
        transition-timing-function: ease-in-out;
        transition-delay: 0s;
   }
   .tags{
       position: absolute;
       top: 0;
       right:20px;
        width:30px;
        height:60px;
        line-height: 60px;
       font-size: 12px;
       background:#96e1fc; 
   }
   .triangle{
       position: absolute;
       top: 40px;
       right: 20px;
       width: 0;
       height: 0;
       border-top: 15px solid #96e1fc;
       border-right: 15px solid #96e1fc;
       border-bottom: 15px solid #fff;
       border-left: 15px solid #96e1fc;
   }
</style>


