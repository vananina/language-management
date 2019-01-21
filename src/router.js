import MainLayout from '@/layout/MainLayout'import LanguagePage from '@/pages/LanguagePage'const routes = [  {    path: '/',    component: MainLayout,    redirect: '/service',    children: [      {        path: '/service',        name: 'service',        component: LanguagePage,        props : true,        reload : false      },{        path: '/partner',        name: 'partner',        component: LanguagePage,        props: true,        reload : false      }    ]  },{    path: '*',    redirect: '/'  }]export default routes