import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import MemberLoginForm from '../components/member/MemberLoginForm';
import MemberRegistForm from '../components/member/MemberRegistForm';
import MemberMyPage from '../components/member/MemberMyPage';
import House from '../views/House';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/member/login',
    name: 'MemberLoginForm',
    component: MemberLoginForm,
  },
  {
    path: '/member/regist',
    name: 'MemberRegistForm',
    component: MemberRegistForm,
  },
  {
    path: '/member/mypage',
    name: 'MemberMyPage',
    component: MemberMyPage,
  },
  {
    path: '/house',
    name: 'House',
    component: House,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
