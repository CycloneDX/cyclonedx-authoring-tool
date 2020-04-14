<template>
  <div class="app">
    <DefaultHeader/>
    <div class="app-body">
      <AppSidebar fixed>
        <SidebarHeader/>
        <SidebarForm/>
        <SidebarNav :navItems="nav"></SidebarNav>
        <SidebarFooter/>
        <SidebarMinimizer/>
      </AppSidebar>
      <main class="main">
        <Breadcrumb :list="list"/>
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
      <AppAside fixed>
        <!--aside-->

      </AppAside>
    </div>
  </div>
</template>

<script>
  import { Sidebar as AppSidebar, SidebarFooter, SidebarForm, SidebarHeader, SidebarMinimizer, SidebarNav, Aside as AppAside, Breadcrumb } from '@coreui/vue'
  import DefaultHeader from './DefaultHeader'

  export default {
    name: 'DefaultContainer',
    components: {
      AppSidebar,
      AppAside,
      Breadcrumb,
      SidebarForm,
      SidebarFooter,
      SidebarHeader,
      SidebarNav,
      SidebarMinimizer,
      DefaultHeader
    },
    data () {
      return {
        breadcrumbs: [],
        nav: [
        {
          name: this.$t('message.welcome'),
          url: '/welcome',
          icon: 'fa fa-home',
        },
        {
          name: this.$t('message.create_bom'),
          url: '/create',
          icon: 'fa fa-plus-square',
        }
      ]
      }
    },
    computed: {
      name() {
        return this.$route.name
      },
      list() {
        return this.$route.matched.filter((route) => route.name || route.meta.label)
      }
    }
  }
</script>
