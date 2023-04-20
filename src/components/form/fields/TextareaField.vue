<template>
  <textarea :cols=cols
            :rows=rows
            :placeholder=placeholder />
</template>


<script setup>
defineProps({
  cols: {
    type: Number,
    required: false
  },
  rows: {
    type: Number,
    required: false
  },
  placeholder: {
    type: String,
    required: false
  }
})
</script>


<style scoped lang="scss">
@use "@/assets/scss/_vars.scss";

textarea {
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