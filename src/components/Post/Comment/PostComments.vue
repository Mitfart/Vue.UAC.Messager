<template>
  <div class="comments" :class="{ comments_collapsed: isCollapsed }">
    <div class="comments__content">
      <PostComment
          v-for="comment in comments"
          :data="comment"/>
    </div>
    <CommentForm :author="activeUser" />
  </div>
</template>


<script setup>
import PostComment from "@/components/Post/Comment/PostComment.vue";
import CommentForm from "@/components/Post/Comment/CommentForm.vue";

import DataComment from "@/structs/DataComment";
import User from "@/structs/User";


defineProps({
  comments: {
    type: Array,
    default: DataComment,
    required: true
  },
  activeUser: {
    type: User,
    required: true
  },
  isCollapsed: {
    type: Boolean,
    required: true
  }
})
</script>


<style scoped lang="scss">
.comments {
  width: 100%;
  opacity: 1;

  &__content {
    display: flex;
    flex-direction: column;

    max-height: 25rem;
    overflow-y: scroll;
    scroll-behavior: smooth;
  }

  &_collapsed {
    display: none;
    opacity: 0;
    max-height: 0;
  }
}
</style>