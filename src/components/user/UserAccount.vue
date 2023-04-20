<template>
  <a class="user" :href="userData.page">
    <UserAvatar :image="userData.avatarImg" />

    <div class="user__info">
      <p class="user__name"> {{ userData.nickname }} </p>
      <slot/>
    </div>
  </a>
</template>


<script setup>
import UserAvatar from "@/components/user/UserAvatar.vue";

import User from "@/structs/User";

defineProps({
  userData: {
    type: User,
    required: true
  }
});
</script>


<style scoped lang="scss">
@use "@/assets/scss/_vars.scss";

.user {
  display: flex;
  align-items: center;
  gap: .5rem;

  &__info {
    width: 100%;
    min-height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  &__name {
    font-size: 1.25rem;
    font-weight: 600;
  }
  &__avatar-container {
    width: 2.5rem;
    flex-shrink: 0;

    font-size: 0;

    display: block;
    border-radius: 100%;
    position: relative;
    overflow: hidden;

    cursor: pointer;

    & > .img {
      width: 100%;
      height: 100%;

      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);

      object-fit: cover;
    }
  }


  &:hover {
    cursor: pointer;
    .user__name {
      color: vars.$c-primal;
    }
  }
}

</style>