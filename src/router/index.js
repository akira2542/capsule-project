import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Store from '../views/store/Store.vue';
import Contact from '../views/store/Contact.vue';
import Filter from '../views/Filter.vue';
import Register from '../views/Register.vue';
import Menu from '../views/Menu.vue';
import SymtomMenu from '../views/symtom/SymtomMenu.vue';
import SymtomExplain from '../views/symtom/SymtomExplain.vue';
import Map from '../views/Map.vue';
import BotRegister from '../views/bot/BotRegister.vue';
import BotLoading from '../views/bot/BotLoading.vue';
import ContactBot from '../views/bot/ContactBot.vue';
import BotProcessing from '../views/bot/BotProcessing.vue';
import BotResult from '../views/bot/BotResult.vue';
import BotResultDetail from '../views/bot/BotResultDetail.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/store',
    name: 'Store',
    component: Store,
  },
  {
    path: '/store/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/store/filter',
    name: 'Filter',
    component: Filter,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu,
  },
  {
    path: '/symtom/menu',
    name: 'SymtomMenu',
    component: SymtomMenu,
  },
  {
    path: '/symtom/explain',
    name: 'SymtomExplain',
    component: SymtomExplain,
  },
  {
    path: '/map',
    name: 'Map',
    component: Map,
  },
  {
    path: '/bot/register',
    name: 'BotRegister',
    component: BotRegister,
  },
  {
    path: '/bot/loading',
    name: 'BotLoading',
    component: BotLoading,
  },
  {
    path: '/bot/contact',
    name: 'ContactBot',
    component: ContactBot,
  },
  {
    path: '/bot/processing',
    name: 'BotProcessing',
    component: BotProcessing,
  },
  {
    path: '/bot/result',
    name: 'BotResult',
    component: BotResult,
  },
  {
    path: '/bot/result/detail',
    name: 'BotResultDetail',
    component: BotResultDetail,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
