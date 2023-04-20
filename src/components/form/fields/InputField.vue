<template>
  <input type="text" :placeholder=placeholder >
</template>


<script setup>
defineProps({
  placeholder: {
    type: String,
    required: false
  }
})
</script>


<style scoped lang="scss">
@use "@/assets/scss/_vars.scss";

input {
  padding: .75rem 1.25rem;

  border: 1px solid vars.$c-second;
  border-radius: .75rem;

  opacity: .5;

  &:hover {
    opacity: .75;
  }
  &:active {
    opacity: 1;
  }
}
</style>