<template lang="html">
    <div class="">
        <nav-header></nav-header>
        <div class="image_list clearfix">
            <div class="item">
               <img src="../../static/images/bg.jpg"/>
               <div class="float_player">
                   <span>这是一张图片!</span>
               </div>
            </div>
             <div class="item">
               <img src="../../static/images/bg.jpg"/>
            </div>
             <div class="item">
               <img src="../../static/images/bg.jpg"/>
            </div>
             <div class="item">
               <img src="../../static/images/bg.jpg"/>
            </div>
             <div class="item">
               <img src="../../static/images/bg.jpg"/>
            </div>
             <div class="item">
               <img src="../../static/images/bg.jpg"/>
            </div>
        </div>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
import NavHeader from "../components/Header.vue";
import NavFooter from "../components/footer.vue";
export default {
  name: "Picture",
  components: {
    NavHeader,
    NavFooter
  }
};
</script>
<style scoped>
.image_list {
  width: 1200px;
  margin: auto;
  background: #fff;
}
.item {
  position: relative;
  float: left;
  width: 30%;
  height: 200px;
  margin-left: 3%;
  margin-bottom: 20px;
  border-radius: 6px;
  border: 1px solid #333;
}
.item img {
  width: 100%;
  height: 200px;
  border-radius: 6px;
}
.item .float_player {
  display: none;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 200px;
  text-align: left;
  padding: 20px;
  background: #333;
  opacity: 0.8;
  color: #fff;
  font-size: 14px;
}
.item:hover .float_player {
  display: block;
}
</style>
