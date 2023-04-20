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
            <img :src="file" alt="ERROR">
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
          <UserActivity class="post__user-activity" @click="ToggleComments" > <!--  -->
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

    <PostComments
        :comments="data.comments"
        :active-user="activeUser"
        :is-collapsed="isCommentsCollapsed"/>
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
import {ref} from "vue";


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


const isCommentsCollapsed = ref(true);
function ToggleComments() {
  isCommentsCollapsed.value = !isCommentsCollapsed.value;
}

function Dummy() { console.log("Dummy log") }

</script>


<style lang="scss">
@use "@/assets/scss/_vars.scss";

.post {
  &__header,
  &__main,
  &__footer,
  &__nav,
  &__content,
  &__user-activities {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: .5rem;
  }


  &__tag {
    position: relative;
    opacity: 50%;

    &:after {
      content: '';

      height: .125rem;
      width: 0;

      border-radius: 100rem;
      background-color: vars.$c-primal;

      position: absolute;
      top: 100%;
      left: 0;
      transform: translateY(-50%);

      transition: inherit;
    }
    &:hover {
      opacity: 75%;
      &:after {
        width: 100%;
      }
    }
  }


  &__header { }


  &__main {
    flex-direction: column;
    align-items: start;
    gap: .25rem;

    &:hover > .post__title {
      color: vars.$c-primal;
    }
  }
  &__title {
    font-size: 1.5rem;
  }

  &__content {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
  }
  &__text {
    --lines-count: 4;

    opacity: 50%;

    overflow: hidden;
    text-overflow: ellipsis;

    display: -webkit-box;
    line-clamp: var(--lines-count);
    -webkit-line-clamp: var(--lines-count);
    -webkit-box-orient: vertical;
  }
  &__media-container {
    display: flex;
    gap: .5rem;
    width: 100%;
  }
  &__media {
    flex-grow: 1;
    flex-shrink: 0;

    max-width: 33%;
    max-height: 20rem;

    border-radius: 1rem;
    background-color: rgba(vars.$c-second, .125);

    cursor: pointer;
    overflow: hidden;
    position: relative;

    & > img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }


  &__footer {
    align-items: start;
    flex-direction: column;
  }
  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
  }
  &__tag {}

  &__nav {
    width: 100%;
  }
  &__views {
    display: flex;
    align-items: center;
    gap: .25rem;

    opacity: 50%;
  }
}

</style>