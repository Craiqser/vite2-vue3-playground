import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// import store from './store';

import AppLayout from '~/layouts/AppLayout.vue';
import AxLayout from '~/layouts/AxLayout.vue';

const app = createApp(App);

app.component('app-layout', AppLayout);
app.component('ax-layout', AxLayout);

app.use(router);
// app.use(store);

app.mount('#app');
