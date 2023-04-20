<template>
  <section class="block sidebar__block" id="recommended-authors">
    <h1 class="sidebar__title">
      Рекомендованные пользователи
    </h1>

    <div class="sidebar__content">
      <SidebarRecomend
          class="sidebar__item"
          v-for="recommend in recommends"
          :title="recommend.title"
          :post="recommend.post" />
    </div>

    <TextBtn class="sidebar__btn" @click="Dummy" >
      Подробнее
    </TextBtn>
  </section>
</template>


<script setup>
import SidebarRecomend from "@/components/Sidebar/Recomends/SidebarRecomend.vue";
import TextBtn from "@/components/form/buttons/TextBtn.vue";
import Recommend from "@/structs/Recommend";

defineProps({
  recommends: {
    type: Array,
    default: Recommend,
    required: true
  }
})

function Dummy() {console.log("Dummy log") }
</script>


<style lang="scss">
</style>