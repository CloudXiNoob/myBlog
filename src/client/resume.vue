<template lang="html">
	<div class="resume">
		<nav-header></nav-header>
		<div>12121212121212</div>
		<nav-footer></nav-footer>
	</div>
</template>
<script>
import NavHeader from "../components/Header.vue";
import NavFooter from "../components/footer.vue";
export default {
  name: "Resume",
  components: {
    NavHeader,
    NavFooter
  }
};
</script>
<style scoped>
.resume {
  width: 100%;
  height: 100%;
}
</style>