import { createWebHistory, createRouter } from "vue-router";
import AppDefault from "@/layouts/AppLayoutDefault.vue";
import PAGE_LINk from "@/pages/PAGE_LINK";

const routers = [
    NewRouter(PAGE_LINk.Main,       () => import('@/pages/MainPage.vue'),        { layout: AppDefault }),
    NewRouter(PAGE_LINk.Account,    () => import('@/pages/AccountPage.vue'),     { layout: AppDefault }),
    NewRouter(PAGE_LINk.SinglePost, () => import('@/pages/PostPage.vue'),        { layout: AppDefault }),
    NewRouter(PAGE_LINk.CreatePost, () => import('@/pages/PublishPostPage.vue'), { layout: AppDefault }),
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