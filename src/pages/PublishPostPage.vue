<template>
  <div class="publish-post">
    <AppLayoutDefault class="container_content">
      <PublishPostForm class="publish-post__form"/>
    </AppLayoutDefault>
  </div>
</template>


<script setup>
import PublishPostForm from "@/components/Post/PublishPostForm.vue";
import AppLayoutDefault from "@/layouts/AppLayoutDefault.vue";
</script>


<style scoped lang="scss">
.publish-post {
  &__form {
    width: 100%;
  }
}
</style>