import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import MemberLoginForm from '../components/member/MemberLoginForm';
import MemberRegistForm from '../components/member/MemberRegistForm';
import MemberMyPage from '../components/member/MemberMyPage';
import House from '../views/House';
import Notice from '../views/Notice';
import Attention from '../views/Attention';

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
  {
    path: '/notice',
    name: 'Notice',
    component: Notice,
  },
  {
    path: '/attention',
    name: 'Attention',
    component: Attention,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
