<template>
  <section class="sidebar">

    <slot/>

  </section>
</template>


<script setup>
</script>


<style lang="scss">
@use "@/assets/scss/_vars.scss";


.sidebar {
  width: 30%;
  min-width: 15rem;
  max-width: 20rem;

  display: flex;
  flex-direction: column;
  gap: .5rem;
  flex-shrink: 0;

  &__block {
    gap: .5rem;
    padding: .5rem;
  }
  &__title {
    padding: .25rem;
    font-size: 1.25rem;
    font-weight: 600;
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }

  &__btn {
    padding: 1.5rem;
  }

  &__item {
    padding: .75rem;
    background-color: transparent;
    border-radius: .5rem;

    &:hover {
      background-color: rgba(vars.$c-second, .125);
    }
  }
}

</style>