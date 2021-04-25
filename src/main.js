import 'windi.css';
import App from './App.vue';
import AppLayout from '~/layouts/AppLayout.vue';
import AxLayout from '~/layouts/AxLayout.vue';
import { createApp } from 'vue';
import router from './router';
// import store from './store';

const app = createApp(App);

app.component('AppLayout', AppLayout);
app.component('AxLayout', AxLayout);

app.use(router);
// app.use(store);

app.mount('#app');
