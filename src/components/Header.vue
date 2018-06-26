<template lang="html">
    <div class="header">
        <div class="wrapper">
            <ul class="tab">
                <li>
                    <a href="javascript:;">首页</a>
                </li>
                <li>
                    <a href="javascript:;">简历</a>
                </li>
                <li>
                    <a href="javascript:;">照片</a>
                </li>
                <li>
                    <a href="javascript:;">关于</a>
                </li>
            </ul>
        </div>
        <p>不想做老鹰的菜鸟不是好菜鸟</p>
    </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
    .header{
        width: 100%;
        height:360px;
        margin-bottom: 40px;
        background:url(../../static/images/bg.jpg) no-repeat center;
    }
    .wrapper{
        width: 100%;
        height:48px;
        line-height: 48px;
        background:#333;
        opacity:.8;
    }
    .header p{
        margin-top: 112px;
        font-size: 24px;
        color: #fff;
        font-weight: bold;
        text-decoration:line-through;
    }
    .tab{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 1200px;
        margin: auto;
    }
    .tab li a{
        display: inline-block;
        color: #fff;
        height:48px;
        font-size: 18px;
        padding: 0 17px;
    }
    .tab li a:hover{
        background:#96e1fc;
    }
    
</style>

