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

import placeholder from "@/assets/img/placeholder.webp";
import placeholder_user from "@/assets/img/placeholder_user.png";

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

const posts = [
  DefaultPost(),
  DefaultPost(),
  DefaultPost(),
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
        placeholder,
        placeholder,
        placeholder
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
      placeholder_user,
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