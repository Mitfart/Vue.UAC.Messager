<template>
  <button class="btn">
    <slot> Primary </slot>
  </button>
</template>


<script setup></script>


<style scoped lang="scss">
@use "@/assets/scss/_vars.scss";

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .75rem;

  color: vars.$c-primal;
  background-color: rgba(vars.$c-primal-rgb, .25);

  padding: .65em 2em;
  border-radius: 1000rem;

  cursor: pointer;
  &:hover {
    color: vars.$c-neutral;
    background-color: vars.$c-primal;
  }

  &_active {
    color: vars.$c-neutral;
    background-color: vars.$c-primal;

    &:hover {
      background-color: rgba(vars.$c-primal-rgb, .75);
    }
  }
}

</style>