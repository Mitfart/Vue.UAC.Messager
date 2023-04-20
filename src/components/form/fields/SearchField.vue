<template>
  <label class="header__search search">
    <input type="text"
           class="search__field"
           placeholder="Найти пост или пользователя...">

    <button class="search__btn" type="button">
      <IconLoupe/>
    </button>
  </label>
</template>


<script setup>
import IconLoupe from '@/icons/IconLoupe.vue';
</script>


<style lang="scss">
@use "@/assets/scss/_vars.scss";

.search {
  background-color: rgba(vars.$c-second-rgb, .075);

  display: flex;
  justify-content: space-between;

  border: .125rem solid transparent;
  border-radius: 1000rem;
  overflow: hidden;


  &__field,
  &__btn {
    padding: .5rem 1rem;
    border: none;
  }

  &__field {
    width: 100%;
  }
  &__btn {
    display: flex;
    align-items: center;
    gap: 1rem;

    &:hover > .icon {
      color: vars.$c-primal;
    }
  }


  &:hover,
  &:focus-within {
    border-color: vars.$c-primal;
    background-color: vars.$c-neutral;
    opacity: 100%;
  }
}
</style>