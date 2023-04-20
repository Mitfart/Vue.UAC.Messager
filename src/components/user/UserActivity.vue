<template>
  <button class="user-activity">
    <slot> Activity </slot>
  </button>
</template>


<script setup>
</script>


<style lang="scss">
@use "@/assets/scss/_vars.scss";

.user-activity {
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: .25rem;

  font-size: 0.75rem;
  padding: .5rem 1rem;

  border-radius: 100rem;
  background-color: rgba(vars.$c-second, .125);

  opacity: 75%;


  &:hover {
    opacity: 100%;
  }

  &_active {
    color: vars.$c-primal;
    background-color: rgba(vars.$c-primal, .25);

    opacity: 100%;

    &:hover {
      border-color: rgba(vars.$c-second, .125);
    }
  }

  &_active .icon {
    fill: vars.$c-primal;
  }
}
</style>