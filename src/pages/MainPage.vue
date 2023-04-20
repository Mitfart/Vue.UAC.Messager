<template>
  <AppLayoutDefault>
    <section class="container_content main__content">
      <MainTabs :active-tab-index="activeTabIndex"
                :tabs="tabs" />

      <section class="posts">
        <PostDefault
            v-for="post in posts"
            :active-user="activeUser"
            :data="post"
        />
      </section>
    </section>

    <SidebarMain class="main__sidebar container_sidebar">
      <SidebarPublishPost />
      <SidebarThemes :themes=themes />
      <SidebarRecommendations :recommends="recommendedPosts"/>
      <SidebarContacts :contacts=contacts />
    </SidebarMain>
  </AppLayoutDefault>
</template>


<script setup>
import MainTabs from "@/components/Main/MainTabs.vue";
import PostDefault from "@/components/Post/PostDefault.vue";
import SidebarMain from '@/components/Sidebar/SidebarMain.vue';
import SidebarPublishPost from "@/components/Sidebar/SidebarPublishPost.vue";
import SidebarThemes from "@/components/Sidebar/SidebarThemes.vue";
import SidebarRecommendations from "@/components/Sidebar/Recomends/SidebarRecomends.vue";
import SidebarContacts from "@/components/Sidebar/SidebarContacts.vue";
import AppLayoutDefault from "@/layouts/AppLayoutDefault.vue";

import User from "@/structs/User";
import Tab from "@/structs/Tab";
import Post from "@/structs/Post";
import Theme from "@/structs/Theme";
import Contact from "@/structs/Contact";
import DataComment from "@/structs/DataComment";

import image1 from "@/assets/img/1.jpg";
import image2 from "@/assets/img/2.webp";
import image3 from "@/assets/img/3.webp";
import Recommend from "@/structs/Recommend";


const activeUser = DefaultUser();

const activeTabIndex = 0;
const tabs = [
  new Tab("Рекомендации", "#"),
  new Tab("Подписки", "#")
]

const posts = [
  DefaultPost(),
  DefaultPost(),
]

const recommendedPosts = [
  new Recommend('Example', DefaultPost()),
  new Recommend('Example', DefaultPost()),
  new Recommend('Example', DefaultPost()),
  new Recommend('Example', DefaultPost()),
]

const themes = [
  DefaultTheme(),
  DefaultTheme(),
  DefaultTheme(),
  DefaultTheme(),
]

const contacts = [
  DefaultContact(),
  DefaultContact(),
  DefaultContact(),
  DefaultContact(),
]


function DefaultPost() {
  return new Post(
      DefaultUser(),
      new Date(),
      100,
      20,
      10,
      1000,
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque eius et facere fuga",
      [
        "Some",
        "Dick"
      ],
      [
        image1,
        image2,
        image3
      ],
      [
        DefaultComment([
          DefaultComment(),
        ]),
        DefaultComment(),

        DefaultComment([
          DefaultComment(),
        ]),
        DefaultComment(),
        DefaultComment([
          DefaultComment(),
        ]),
        DefaultComment(),
        DefaultComment([
          DefaultComment(),
        ]),
        DefaultComment(),
        DefaultComment([
          DefaultComment(),
        ]),
        DefaultComment(),
        DefaultComment([
          DefaultComment(),
        ]),
        DefaultComment(),
        DefaultComment([
          DefaultComment(),
        ]),
        DefaultComment(),
        DefaultComment([
          DefaultComment(),
        ]),
        DefaultComment(),
      ]
  );
}

function DefaultComment(comments) {
  return new DataComment(
      DefaultUser(),
      "Some",
      new Date,
      comments
  )
}

function DefaultUser() {
  return new User(
      "Some",
      image1,
      "#",
      12000);
}


function DefaultContact() {
  return new Contact(
      "Some GAY-SHIT",
      "some_gay-shiy@gayverse.com");
}


function DefaultTheme() {
  return new Theme(
      "Хватит_хуи_пинать",
      "#")
}
</script>


<style scoped lang="scss">
.posts,
.main__content {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>