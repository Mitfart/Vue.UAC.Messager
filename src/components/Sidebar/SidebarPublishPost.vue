<template>
  <section class="block sidebar__block">
    <h1 class="sidebar__title">
      Publish post!
    </h1>

    <div class="sidebar__content">
      <PrimaryBtn @click="GoToCreatePostPage" >
        Создать
      </PrimaryBtn>
    </div>
  </section>
</template>


<script setup>
import { useRouter } from 'vue-router';
import PrimaryBtn from "@/components/form/buttons/PrimaryBtn.vue";
import PAGE_LINK from "@/pages/PAGE_LINK";


const router = useRouter()

function Dummy() {
  console.log("Dummy log");
}

function GoToCreatePostPage() {
  console.log("Dummy log");
  router.push(PAGE_LINK.CreatePost)
}
</script>


<style lang="scss">
.publish-post-image {
  width: 100%;
}
</style>