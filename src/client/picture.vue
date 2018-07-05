<template lang="html">
    <div class="">
        <nav-header></nav-header>
        <div class="image_list">
            <div class="item">
               <img src="../../static/images/bg.jpg"/>
            </div>
        </div>
        <nav-footer></nav-footer>
    </div>
  
</template>
<script>
import NavHeader from '../components/Header.vue';
import NavFooter from '../components/footer.vue';
export default {
    name:'Picture',
    components:{
        NavHeader,
        NavFooter
    }
}
</script>
<style scoped>
    .image_list{
        width: 1200px;
        margin:auto;
        background: #fff;
    }
    .item{
        width: 300px;
        height: 200px;
        border-radius: 6px;
        border: 1px solid #333;
    }
    .item img{
        width: 300px;
        height: 200px;
        border-radius: 6px;
    }
</style>
