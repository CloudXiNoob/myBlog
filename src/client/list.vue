<template lang="html">
    <div class="article_list">
        <div class="item">
            <div class="title">介绍 Turbo：比 Yarn 和 NPM 快 5 倍，可以在本地浏览器中运行</div>
            <div class="sub_title">
                <span class="time"><i class="icon iconfont icon-msnui-time"></i>发表于 2018-01-28</span>
                <span class="kind"><i class="icon iconfont icon-type"></i>css</span>
            </div>
            <div></div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Blog'
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
        width: 900px;
        height: 300px;
        margin:20px auto 100px auto; 
        padding: 25px;
        background:#fff;
        -webkit-box-shadow: 0 0 14px #cacbcb;
        -moz-box-shadow: 0 0 14px #cacbcc;
        box-shadow: 0 0 14px #cacbcc;
    }
    .item .sub_title{
        margin-top: 10px;

    }
</style>


