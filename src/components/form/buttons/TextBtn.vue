<template>
  <PrimaryBtn class="btn_text">
    <slot> Text Button </slot>
  </PrimaryBtn>
</template>


<script setup>
import PrimaryBtn from "@/components/form/buttons/PrimaryBtn.vue";
</script>


<style scoped lang="scss">
@use "@/assets/scss/_vars.scss";

.btn_text {
  justify-content: start;

  color: vars.$c-primal;
  font-weight: 600;

  border: none;
  padding: 0;
  background-color: transparent;

  &:hover {
    color: vars.$c-primal;
    background-color: transparent;
  }
}
</style>