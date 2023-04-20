<template>
  <div class="user__avatar rect">
    <img :src=image alt="ERROR">
  </div>
</template>


<script setup>
defineProps({
  image: {
    type: String,
    required: true
  }
});
</script>


<style scoped lang="scss">
.user {
  &__avatar {
    width: 2.5rem;
    flex-shrink: 0;

    font-size: 0;

    display: block;
    border-radius: 100%;
    position: relative;
    overflow: hidden;

    cursor: pointer;

    & > .img {
      width: 100%;
      height: 100%;

      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);

      object-fit: cover;
    }
  }
}
</style>