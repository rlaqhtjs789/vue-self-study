import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsView from '../views/NewsView';
import JobsView from '../views/JobsView';
import AskView from '../views/AskView';


Vue.use(VueRouter)

const routes = [
  {
    // url 주소
    path: '/news',
    // component 이름
    name: 'NewsView',
    // url 주소에 표시될 컴포넌트(페이지 파일)
    component: NewsView
  },
  {
    path: '/jobs',
    name: 'JobsView',
    component: JobsView
  },
  {
    path: '/ask',
    name: 'AskView',
    component: AskView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
