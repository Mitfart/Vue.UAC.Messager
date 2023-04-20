import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/routes/index';

const app = createApp(App);
app.use(router)
app.mount('#app');

import PAGE_LINK from "@/pages/PAGE_LINK";
router.push(PAGE_LINK.Main);
