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
import MainHeader from "@/components/Main/MainHeader.vue";

import Post from "@/structs/Post";
import User from "@/structs/User";
import AppLayoutDefault from "@/layouts/AppLayoutDefault.vue";
import image1 from "@/assets/img/1.jpg";
import image2 from "@/assets/img/2.webp";
import image3 from "@/assets/img/3.webp";
import DataComment from "@/structs/DataComment";


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
</script>


<style scoped lang="scss">
.post-page {
  &__post {
    width: 100%;
  }
}
</style>