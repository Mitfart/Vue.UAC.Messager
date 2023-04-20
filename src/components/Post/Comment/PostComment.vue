<template>
  <div class="comment">
    <UserAvatar :image="data.author.avatarImg"/>
    <div class="comment__content">

      <header class="comment__header">
        <a :href="data.author.page" class="comment__author">
          {{ data.author.nickname }}
        </a>
      </header>

      <main class="comment__main">
        <p class="comment__text">
          {{ data.text }}
        </p>
      </main>

      <footer class="comment__footer">
        <span class="comment__time">
          {{ data.time.getDay() }}:{{ data.time.getHours() }}:{{ data.time.getMinutes() }}
        </span>
        <TextBtn> Ответить </TextBtn>
      </footer>

      <div class="comment__answers">
        <PostComment
            v-for="answer in data.answers"
            :data="answer"/>
      </div>
    </div>
  </div>
</template>


<script setup>
import UserAvatar from "@/components/user/UserAvatar.vue";
import TextBtn from "@/components/form/buttons/TextBtn.vue";
import DataComment from "@/structs/DataComment";


defineProps({
  data: {
    type: DataComment,
    required: true
  },
})
</script>


<style scoped lang="scss">
@use "@/assets/scss/_vars.scss";

.comment {
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: .5rem;

  width: 100%;

  background-color: vars.$c-neutral;
  padding: .5rem;
  border-radius: 0;

  & & {
    border-radius: .5rem;
  }

  &__author {
    font-size: 1.25rem;
    font-weight: 600;

    &:hover {
      cursor: pointer;
      color: vars.$c-primal;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: .25rem;

    width: 100%;
  }

  &__main {}
  &__text {
    font-size: 1rem;
    opacity: .75;
  }

  &__footer {
    display: flex;
    gap: .5rem;
    font-size: .9rem;
  }
  &__time {
    opacity: .75;
  }

  &__answers {
    display: flex;
    flex-direction: column;
    gap: .5rem;

    .user__avatar-container {
      width: 2rem;
    }
  }
}
</style>