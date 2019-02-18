import LanguagePage from '@/pages/LanguagePage'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/languagePage/service',
  },
  {
    path: '/languagePage/:menuId',
    name: 'language-page',
    props: true,
    component: LanguagePage,
  },
  {
    path: '*',
    redirect: '/'
  }
]

export default routes