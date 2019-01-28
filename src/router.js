import MainLayout from '@/layout/MainLayout'
import LanguagePage from '@/pages/LanguagePage'

const routes = [
  {
    path: '/',
    component: MainLayout,
    redirect: '/languagePage/service',
    children: [
      {
        path: '/languagePage/:serviceId',
        name: 'languagePage',
        component: LanguagePage,
        props : true,
        reload : false
      }
    ]
  },{
    path: '*',
    redirect: '/'
  }
]

export default routes