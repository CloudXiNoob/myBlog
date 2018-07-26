<template>
    <div class="body-bg">
        <div class="login" id="login">
            <div class="log-bg">
                <div class="log-logo">欢迎登录</div>
            </div>
            <div class="log-email"> 
                <input type="text" placeholder="请输入手机号" v-model="account" class="log-input">
                <input type="password" placeholder="请输入密码" v-model="password" class="log-input">  
                <a href="javascript:;" class="log-btn" @click="login">登录</a>
            </div>
            <loading v-if="isLoading" marginTop="-30%"></loading>
        </div>
        <!-- <el-alert title="请输入手机号码" type="error" show-icon class="width"></el-alert>
        <el-alert title="手机号格式错误" type="error" show-icon class="width"></el-alert>
        <el-alert title="请输入手机密码" type="error" show-icon class="width"></el-alert>
        <el-alert title="请输入至少六位手机号码" type="error" show-icon class="width"></el-alert> -->
    </div>
</template>

<script>
import Loading from './loading.vue'
import md5  from 'md5'
import axios from 'axios'
export default {
    name:'Login',
    data(){
        return {
            isLoading:false,
            account:'',
            password:'',
        }
    },
    components:{   //在login组件中使用loading组件
        Loading
    },
    methods:{
        // 验证是否输入账号和密码
        login(){
            if(this.account!=''&&this.password!=''){
                this.toLogin();
           }else{
                alert("请输入账号和密码！");
           }
        },
        //登录请求
        toLogin(){
            // md5加密
            let password=md5(this.password);
            this.isLoading=true;
            axios.post('http://localhost:3000/api/user/login',{phoneNumber:this.account,passWord:password}).then((result)=>{
                let res=result.data
                if(res.success === true){
                    localStorage.setItem('token',res.token)
                    this.isLoading=false;
                    this.$router.push('/admin');
                }else if(res.success === false){
                    this.isLoading=false;
                    alert(res.message)
                }else{
                     this.$router.push('/login');
                }
            })
        }
    }
}
</script>
<style scoped>
    .body-bg{
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: #003973;
        background: -moz-linear-gradient(left, #003973 0%, #e5e5be 100%);
        background: -webkit-linear-gradient(left, #003973 0%, #e5e5be 100%);
        background: linear-gradient(to right, #003973 0%, #e5e5be 100%);
    }
    .login{position:fixed;overflow: hidden;left: 50%;margin-left: -250px;top: 56%;margin-top: -350px;width: 500px;max-height:555px;z-index: 10;
        right: 140px;background:#fff;-webkit-border-radius:5px;-moz-border-radius:5px;-ms-border-radius:5px;-o-border-radius:5px;border-radius: 5px;
        -webkit-box-shadow:0px 3px 16px -5px #070707;box-shadow: 0px 3px 16px -5px #070707;}
    .log-bg{background:#fff; width: 100%;height: 200px;overflow: hidden;}
    .log-logo{height: 80px;margin: 120px auto 25px;text-align: center;color: #387ee8;font-weight: bold;font-size: 40px;}
    .log-logo .log-text{z-index: 2;}
    .icons{background: url(/static/images/icons.png) no-repeat;display: inline-block;}
    .login-email{height: 17px;width: 29px;background-position: -117px 0;}
    .login-btns{padding: 15px 0;margin: 0 auto;}
    .log-btn{width: 402px;display: block;text-align: left;line-height: 50px; margin: 0 auto 15px;color: #fff;font-size: 16px;border-radius: 5px;font-weight:bold;
    position: relative;
    }
    .log-btn:hover,.log-btn:focus{
        color: #fff;
        opacity: .8;
    }
    .log-email{
        text-align: center;
        margin-top: 20px;
    }
    .log-email .log-btn{
        background-color: #387ee8;
        text-align: center;
    }
    .isloading{
        background: #d6d6d6;
    }
    .log-btn .icons{
        margin-left: 30px;
        vertical-align: middle;
    }
    .log-btn .text{
        left: 95px;
        line-height: 50px;
        text-align: left;
        position: absolute;
    }
    .log-input{
        width: 370px;
        overflow: hidden;
        padding: 0 15px;
        font-size: 13px;
        border: 1px solid #ebebeb;
        margin: 0 auto 15px;
        height: 48px;
        line-height: 48px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        -ms-border-radius: 5px;
        -o-border-radius: 5px;
        border-radius: 5px;
    }
   .width{
        width: 260px;
        margin: auto;
    }
</style>


