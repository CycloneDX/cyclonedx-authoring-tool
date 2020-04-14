<template>
  <router-view />
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
      }
    }
  }
</script>

<style lang="scss">
  @import '~@coreui/icons/css/free.min.css';
  $fa-font-path: '~font-awesome/fonts/';
  @import '~font-awesome/scss/font-awesome.scss';
  $simple-line-font-path: '~simple-line-icons/fonts/';
  @import '~simple-line-icons/scss/simple-line-icons.scss';
  @import '~bootstrap-vue/dist/bootstrap-vue.css';
  @import 'assets/scss/style';
</style>
