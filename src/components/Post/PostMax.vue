<template>
  <div class="post block">
    <header class="post__header">
      <UserAccount :user-data=data.author>
        <p class="post__time">
          {{ data.date.getMonth() }}:{{ data.date.getDay() }}:{{ data.date.getHours() }}
        </p>
      </UserAccount>

      <SolidButton class="btn post__btn" @click="Dummy">
        Подписаться
        <IconPlus />
      </SolidButton>
    </header>

    <a href="#" class="post__main">
      <h1 class="post__title">
        {{ data.title }}
      </h1>
      <div class="post__content">
        <div class="post__text">
          {{ data.text }}
        </div>
        <div class="post__media-container">
          <div class="post__media rect"
               v-for="file in data.media">
            <img :src=file alt="ERROR">
          </div>
        </div>
      </div>
    </a>

    <footer class="post__footer">
      <nav class="post__tags">
        <a v-for="tag in data.tags"
           href="#"
           class="post__tag">
          #{{ tag }}
        </a>
      </nav>

      <nav class="post__nav">
        <div class="post__user-activities">
          <UserActivity class="post__user-activity user-activity_active">
            <IconHeart/>
            <p>{{ data.likes_count }}</p>
          </UserActivity>
          <UserActivity class="post__user-activity"> <!--  -->
            <IconChat/>
            <p>{{ data.comments.length }}</p>
          </UserActivity>
          <UserActivity class="post__user-activity">
            <IconFlag/>
            <p>{{ data.flags_count }}</p>
          </UserActivity>
        </div>
        <div class="post__views">
          <IconEye/>
          <p>{{ data.views_count }}</p>
        </div>
      </nav>
    </footer>

    <PostComments :comments="data.comments"
                  :active-user="activeUser"
                  :is-collapsed="false"/>
  </div>
</template>


<script setup>
import UserAccount from '@/components/user/UserAccount.vue';
import SolidButton from '@/components/form/buttons/PrimaryBtn.vue';
import UserActivity from "@/components/user/UserActivity.vue";
import PostComments from "@/components/Post/Comment/PostComments.vue";

import IconPlus  from '@/icons/IconPlus.vue';
import IconHeart from '@/icons/IconHeart.vue';
import IconChat  from '@/icons/IconChat.vue';
import IconFlag  from '@/icons/IconFlag.vue';
import IconEye   from '@/icons/IconEye.vue';

import Post from "@/structs/Post";
import User from "@/structs/User";


defineProps({
  data: {
    type: Post,
    required: true
  },
  activeUser: {
    type: User,
    required: true
  }
})

function Dummy() { console.log("Dummy log") }
</script>


<style></style>