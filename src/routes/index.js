import { createWebHistory, createRouter } from "vue-router";
import AppDefault from "@/layouts/AppLayoutDefault.vue";
import PAGE_LINK from "@/pages/PAGE_LINK";

const routes = [
    NewRoute("Main",       PAGE_LINK.Main,       () => import('@/pages/MainPage.vue'),        { layout: AppDefault }),
    NewRoute("Account",    PAGE_LINK.Account,    () => import('@/pages/AccountPage.vue'),     { layout: AppDefault }),
    NewRoute("SinglePost", PAGE_LINK.SinglePost, () => import('@/pages/PostPage.vue'),        { layout: AppDefault }),
    NewRoute("CreatePost", PAGE_LINK.CreatePost, () => import('@/pages/PublishPostPage.vue'), { layout: AppDefault }),
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;



function NewRoute(name, path, component, meta) {
    return {
        name: name,
        path: path,
        component:  component,
        meta: meta
    }
}