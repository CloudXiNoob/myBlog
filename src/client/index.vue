<template lang="html">
    <div class="container">
        <div class="content">
            <a class="avatar">
                <img src='../../static/images/avatar.jpg'>
            </a>
            <div class="profile__desc">
                <span>不想成为老鹰的菜鸟不是好菜鸟!</span>
            </div>
            <hr/>
            <ul>
                <li data-msg="博客">
                   <router-link to="/blog">
                        <img src="../../static/images/blog.png"/>
                   </router-link>
                </li>
                <li data-msg="Github">
                    <a href="https://github.com/cloudxinoob">
                        <img src="../../static/images/github.png"/>
                    </a>
                </li>
                <li data-msg="微博">
                    <a href="https://weibo.com/3044341223/profile?is_all=1">
                        <img src="../../static/images/weibo.png"/>
                    </a>
                </li>
                <li data-msg="知乎">
                    <a href="https://www.zhihu.com/people/zxrainhyyibezi">
                        <img src="../../static/images/zhihu.png"/>
                    </a>
                </li>
            </ul>
       </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
    .container{
        width: 100%;
        height:100%;
        background: #fff;
    }
    .content{
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 300px;
        transform: translate(-50%,-50%);
        -webkit-transform: translate(-50%,-50%);
        text-align: center;
    }
    .content .avatar{
        display: block;
        width: 100px;
        height: 100px;
        margin: auto;
        border-radius: 50%；
    }
    .content .avatar img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    .content .profile__desc{
        margin: 20px auto;
        font-size: 16px;
        letter-spacing: 4px;
        color: #999;
    }
    hr{
        max-width: 400px;
        height: 1px;
        border: none;
        margin:20px auto;
        text-align: center;
        background-image: -webkit-linear-gradient(0deg, transparent, #d5d5d5, transparent);
    }
    .content ul{
        display: flex;
       justify-content: space-between;
       align-content: center;   
        width: 320px;
        margin: auto;
    }
    .content ul li{
        width: 26px;
        height:26px;
    }
    .content img{
        width: 100%;
        height:100%;
    }
    ul li:hover:after{
    content: attr(data-msg);
    font-size: 12px;
    width:200%;
    line-height:30px;
    text-align:center;
}
</style>


