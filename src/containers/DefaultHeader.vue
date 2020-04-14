<template>
<AppHeader fixed>
  <SidebarToggler class="d-lg-none" display="md" mobile />
  <img class="d-lg-inline d-md-none d-sm-none bv-d-xs-down-none" style="margin-left:10px" src="@/assets/img/brand/logo-symbol-aqua.svg" width="30" height="30" alt="CycloneDX Logo"/>
  <SidebarToggler class="d-md-down-none" display="lg" :defaultOpen=true />
  <b-navbar-nav class="ml-auto">

  </b-navbar-nav>
</AppHeader>
</template>
<script>
  import { Header as AppHeader, SidebarToggler, AsideToggler } from '@coreui/vue';

  export default {
    name: 'DefaultHeader',
    components: {
      AsideToggler,
      AppHeader,
      SidebarToggler
    }
  }
</script>
