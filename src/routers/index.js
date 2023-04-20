import { createWebHistory, createRouter } from "vue-router";
import AppDefault from "@/layouts/AppLayoutDefault.vue";
import PAGE_LINK from "@/pages/PAGE_LINK";

const routers = [
    NewRouter(PAGE_LINK.Main,       () => import('@/pages/MainPage.vue'),        { layout: AppDefault }),
    NewRouter(PAGE_LINK.Account,    () => import('@/pages/AccountPage.vue'),     { layout: AppDefault }),
    NewRouter(PAGE_LINK.SinglePost, () => import('@/pages/PostPage.vue'),        { layout: AppDefault }),
    NewRouter(PAGE_LINK.CreatePost, () => import('@/pages/PublishPostPage.vue'), { layout: AppDefault }),
]

const router = createRouter({
    history: createWebHistory(),
    routes: routers
})

export default router;



function NewRouter(name, component, meta) {
    return {
        path: name,
        name: name,
        component:  component,
        meta: meta
    }
}