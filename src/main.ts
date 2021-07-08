import { createApp } from 'vue';
import App from './App.vue';
import tailorUI from './packages/index';

const app = createApp(App);
app.use(tailorUI);
app.mount('#app');
