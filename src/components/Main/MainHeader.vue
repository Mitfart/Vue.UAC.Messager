<template>
  <header class="header">
    <div class="container header__container">
      <div class="header__logo logo">
        <RouterLink :to="PAGE_LINK.Main"><IconLogo/></RouterLink>
      </div>

      <SearchField/>

      <nav class="header__user-container">
        <RouterLink :to="PAGE_LINK.CreatePost"><IconBell/></RouterLink>
        <RouterLink :to="PAGE_LINK.Account"><IconUser/></RouterLink>
      </nav>
    </div>
  </header>
</template>


<script setup>
import SearchField from '@/components/form/fields/SearchField.vue';
import IconLogo from "@/icons/IconLogo.vue";
import IconBell from "@/icons/IconBell.vue";
import IconUser from "@/icons/IconUser.vue";
import PAGE_LINK from "@/pages/PAGE_LINK";
</script>


<style scoped lang="scss">
@use "@/assets/scss/_vars.scss";

.header {
  width: 100%;

  background-color: vars.$c-neutral;
  border-bottom: .125rem solid rgba(vars.$c-second, .125);

  padding: .5rem 0;

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > * {
      flex-grow: 1;
    }
  }

  &__logo,
  &__user-container {
    font-size: 1.75rem;

    display: flex;
    align-items: center;
    gap: 1rem;

    & .icon {
      color: rgba(vars.$c-second-rgb, .75);
      border-radius: 100%;
      padding: .125rem;
      box-sizing: content-box;

      &:hover {
        color: vars.$c-primal;
        cursor: pointer;
      }
    }
  }


  &__logo {
    & .icon {
      color: vars.$c-primal;

      &:hover {
        color: vars.$c-primal;
      }
    }
  }

  &__user-container {
    justify-content: end;
  }
}
</style>