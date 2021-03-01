<template>
  <div>
    <main-navbar></main-navbar>
    <nuxt />
    <main-footer></main-footer>
  </div>
</template>
<script>
  import MainNavbar from "@/components/layout/MainNavbar.vue";
  import MainFooter from "@/components/layout/MainFooter.vue";
  export default {
    components: {
      MainFooter,
      MainNavbar
    }
  }
</script>
<style>
</style>
