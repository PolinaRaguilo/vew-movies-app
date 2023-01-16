import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import 'vant/lib/index.css';
import store from './store';

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    component: App,
  }],
});

app.use(store).use(router).mount('#app');
