<template>
    <div>
        <nav-header></nav-header>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
import NavHeader from "../components/Header.vue";
import NavFooter from "../components/footer.vue";
export default {
  name: "Detail",
  components: {
    NavHeader,
    NavFooter
  }
};
</script>
