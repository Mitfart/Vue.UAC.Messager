<template>
  <section class="account-page">
    <AppLayoutDefault>
      <section class="account-page__content container_content">
        <UserAccountBlock :user-data="activeUser"/>

        <MainTabs :active-tab-index="activeTabIndex"
                  :tabs="tabs"/>

        <section class="posts">
          <PostDefault
              v-for="post in posts"
              :active-user="activeUser"
              :data="post"
          />
        </section>
      </section>

      <SidebarMain class="account-page__sidebar container_sidebar">
        <SidebarRecommendations :recommends="recommendedPosts"/>
      </SidebarMain>
    </AppLayoutDefault>
  </section>
</template>


<script setup>
import UserAccountBlock from "@/components/user/UserAccountBlock.vue";
import MainTabs from "@/components/Main/MainTabs.vue";
import PostDefault from "@/components/Post/PostDefault.vue";
import SidebarMain from '@/components/Sidebar/SidebarMain.vue';
import SidebarRecommendations from "@/components/Sidebar/Recomends/SidebarRecomends.vue";

import image1 from "@/assets/img/1.jpg";
import image2 from "@/assets/img/2.webp";
import image3 from "@/assets/img/3.webp";

import User from "@/structs/User";
import Post from "@/structs/Post";
import DataComment from "@/structs/DataComment";
import Tab from "@/structs/Tab";
import AppLayoutDefault from "@/layouts/AppLayoutDefault.vue";
import Recommend from "@/structs/Recommend";


const activeUser = DefaultUser();

const activeTabIndex = 0;
const tabs = [
  new Tab("Посты", "#"),
  new Tab("Избранное", "#"),
  new Tab("Комментарии", "#"),
]

const recommendedPosts = [
  new Recommend("1st", DefaultPost()),
  new Recommend("2nd", DefaultPost()),
  new Recommend("3rd", DefaultPost()),
];


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
</script>


<style scoped lang="scss">
.posts,
.account-page__content {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>