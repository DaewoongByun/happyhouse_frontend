import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import MemberLoginForm from '../components/member/MemberLoginForm';
import MemberRegistForm from '../components/member/MemberRegistForm';
import MemberMyPage from '../components/member/MemberMyPage';
import House from '../views/House';
import Notice from '../views/Notice';
import Attention from '../views/Attention';

import NoticeList from '../components/notice/NoticeList';
import NoticeArticle from '../components/notice/NoticeArticle';
import NoticeModify from '../components/notice/NoticeModify';
import NoticeWrite from '../components/notice/NoticeWrite';
import Board from '../views/Board';
import BoardList from '../components/board/BoardList';
import BoardArticle from '../components/board/BoardArticle';
import BoardModify from '../components/board/BoardModify';
import BoardWrite from '../components/board/BoardWrite';
import ReplyModify from '../components/reply/ReplyModify';
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
    children: [
      {
        path: '',
        component : NoticeList,
      },
      {
        path: 'write',
        name: "NoticeWrite",
        component : NoticeWrite,
      },
      {
      path: ':no',
      name: 'NoticeArticle',
      component: NoticeArticle,
      },
      {
        path: ':no/modify',
        name: "NoticeModify",
        component: NoticeModify,
      },

    ]
  },
  {
    path: '/attention',
    name: 'Attention',
    component: Attention,
  },
  {
    path: '/board',
    name: 'Board',
    component: Board,
    children: [
      {
        path: '',
        component : BoardList,
      },
      {
        path: 'write',
        name: "BoardWrite",
        component : BoardWrite,
      },
      {
      path: ':no',
      name: 'BoardArticle',
      component: BoardArticle,
      },
      {
        path: ':no/modify',
        name: "BoardModify",
        component: BoardModify,
      },
    ]
  },
  {
    path: '/reply/modify',
    component: ReplyModify,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
