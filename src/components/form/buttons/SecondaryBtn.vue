<template>
  <PrimaryBtn class="btn_secondary">
    <slot> Secondary </slot>
  </PrimaryBtn>
</template>


<script setup>
import PrimaryBtn from "@/components/form/buttons/PrimaryBtn.vue";
</script>


<style scoped lang="scss">
@use "@/assets/scss/_vars.scss";

.btn_secondary {
  color: vars.$c-second;
  background-color: rgba(vars.$c-second-rgb, .25);

  &:hover {
    color: vars.$c-neutral;
    background-color: vars.$c-second;
  }

  &.btn_active {
    color: vars.$c-neutral;
    background-color: vars.$c-second;

    &:hover {
      color: vars.$c-neutral;
      background-color: rgba(vars.$c-second-rgb, .75);
    }
  }
}

</style>