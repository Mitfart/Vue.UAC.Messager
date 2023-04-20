<template>
  <section class="recommend">
    <PostMin :data="post"/>

    <div class="recommend__title">
      <IconStars/>
      <span>
        {{ title }}
      </span>
      <IconStars/>
    </div>
  </section>
</template>


<script setup>
import PostMin from "@/components/Post/PostMin.vue";
import IconStars from "@/icons/IconStars.vue";
import Post from "@/structs/Post";


defineProps({
  post: {
    type: Post,
    required: true
  },
  title: {
    type: String,
    required: true
  }
});
</script>


<style scoped lang="scss">
.recommend {
  padding-bottom: 1rem;

  display: flex;
  flex-direction: column;
  gap: .5rem;

  &__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: .5rem;
  }
}
</style>