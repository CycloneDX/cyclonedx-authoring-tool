import Vue from 'vue'
import Router from 'vue-router'

// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer');

// Views
const Welcome = () => import('@/views/Welcome');
//const ProjectList = () => import('@/views/portfolio/projects/ProjectList');

// Pages
const Page404 = () => import('@/views/pages/Page404');

Vue.use(Router);

function configRoutes() {
  return [
    {
      path: '/',
      redirect: '/welcome',
      name: 'Home',
      component: DefaultContainer,
      children: [
        {
          path: 'welcome',
          name: 'Welcome',
          component: Welcome,
          meta: {
            i18n: 'message.welcome',
            sectionPath: '/welcome'
          }
        }
      ]
    },
    {
      path: '*',
      component: Page404
    }
  ]
}

export default new Router({
  mode: 'history', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
});
