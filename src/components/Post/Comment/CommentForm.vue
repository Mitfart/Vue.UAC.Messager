<template>
  <div class="comment-form">
    <UserAvatar :image="author.avatarImg" />
    <InputField class="comment-form__input" placeholder="Ваш комментарий" />
    <button class="comment-form__btn" @click="SendComment">
      <IconPaperAirplane />
    </button>
  </div>
</template>


<script setup>
import UserAvatar from "@/components/user/UserAvatar.vue";
import InputField from "@/components/form/fields/InputField.vue";
import IconPaperAirplane from "@/icons/IconPaperAirplane.vue";

import User from "@/structs/User";


defineProps({
  author: {
    type: User,
    required: true
  },
})


function SendComment() {
  console.log("Send")
}
</script>


<style scoped lang="scss">
@use "@/assets/scss/_vars.scss";

.comment-form {
  display: flex;
  align-items: center;
  gap: 1rem;

  &__input {
    flex-grow: 1;
    padding: .5rem 1rem;
  }
  &__btn {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      cursor: pointer;
      & svg {
        fill: vars.$c-primal;
        stroke: vars.$c-primal;
      }
    }
  }
}
</style>