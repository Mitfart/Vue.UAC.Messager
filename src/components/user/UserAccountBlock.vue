<template>
  <div class="account">
    <header class="account__header rect rect_4-1">
      <img :src="userData.avatarImg" alt="ERROR">
    </header>
    <main class="account__main block">

      <div class="account__top-lane">
        <UserAvatar class="account__avatar" :image="userData.avatarImg" />

        <h1 class="account__nickname">{{ userData.nickname }}</h1>

        <PrimaryBtn class="account__btn"> Редактировать </PrimaryBtn>
      </div>

      <div class="account__activities">
        <UserActivity>{{ TEST_DATA }} Подписчиков  </UserActivity>
        <UserActivity>{{ TEST_DATA }} Подписок     </UserActivity>
        <UserActivity>{{ TEST_DATA }} Лайков       </UserActivity>
        <UserActivity>{{ TEST_DATA }} Комментариев </UserActivity>
      </div>

    </main>
  </div>
</template>


<script setup>
import UserAvatar from "@/components/user/UserAvatar.vue";
import PrimaryBtn from "@/components/form/buttons/PrimaryBtn.vue";
import UserActivity from "@/components/user/UserActivity.vue";

import User from "@/structs/User";


const TEST_DATA = 5;

defineProps({
  userData: {
    type: User,
    required: true
  }
});
</script>


<style scoped lang="scss">
@use "@/assets/scss/_vars.scss";

.account {
  border-radius: 1rem;
  overflow: hidden;
  background-color: vars.$c-neutral;

  display: flex;
  flex-direction: column;
  position: relative;

  &__header {
    position: relative;
    background-color: rgba(vars.$c-second-rgb, .25);

    & > img {
      position: absolute;
      top: 50%;
      left: 50%;
      translate: -50% -50%;

      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__top-lane {
    display: flex;
    align-items: start;
    gap: 1rem;

    padding-left: calc(max(5rem, min(10%, 7rem)) + 1rem);

    position: relative;
  }
  &__avatar {
    width: 10%;
    min-width: 5rem;
    max-width: 7rem;

    outline: .5rem solid vars.$c-neutral;

    position: absolute;
    top: 0;
    left: 0;
    translate: 0 -50%;
  }
  &__nickname {
    font-size: 2rem;
    font-weight: 600;
    flex-grow: 1;
  }

  &__activities {
    display: flex;
    gap: .5rem;
  }
}
</style>