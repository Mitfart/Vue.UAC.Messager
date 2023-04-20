<template>
  <section class="block sidebar__block">
    <h1 class="sidebar__title">
      Опубликуйте свой пост!
    </h1>

    <div class="sidebar__content">
      <PrimaryBtn @click="Dummy" >
        Создать
      </PrimaryBtn>
    </div>
  </section>
</template>


<script setup>
import PrimaryBtn from "@/components/form/buttons/PrimaryBtn.vue";

function Dummy() {console.log("Dummy log") }
</script>


<style lang="scss">
.publish-post-image {
  width: 100%;
}
</style>