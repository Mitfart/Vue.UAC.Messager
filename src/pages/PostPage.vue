<template>
  <section class="post-page">
    <AppLayoutDefault class="container_content">
      <PostMax class="post-page__post"
               :active-user="activeUser"
               :data="postData"/>
    </AppLayoutDefault>
  </section>
</template>


<script setup>
import PostMax from "@/components/Post/PostMax.vue";
import AppLayoutDefault from "@/layouts/AppLayoutDefault.vue";

import Post from "@/structs/Post";
import User from "@/structs/User";
import DataComment from "@/structs/DataComment";

import placeholder from "@/assets/img/placeholder.webp";
import placeholder_user from "@/assets/img/placeholder_user.png";


const activeUser = DefaultUser();
const postData = DefaultPost();


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
      placeholder_user,
      "#",
      12000);
}
</script>


<style scoped lang="scss">
.post-page {
  &__post {
    width: 100%;
  }
}
</style>