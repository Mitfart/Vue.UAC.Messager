<template>
  <section class="block sidebar__block" id="hot-themes">
    <h1 class="sidebar__title">
      Популярные
    </h1>

    <div class="sidebar__content">
      <div class="themes sidebar__items">

        <a v-for="theme in themes"
           href="#"
           class="theme sidebar__item">
          <h3 class="theme__title"> #{{ theme.title }}</h3>
          <p class="theme__theme-data">
            Постов:
            <span class="theme__post-count">
              XXk
            </span>
          </p>
        </a>

      </div>
    </div>

    <TextBtn class="sidebar__btn" @click="Dummy">
      more...
    </TextBtn>
  </section>
</template>


<script setup>
import TextBtn from "@/components/form/buttons/TextBtn.vue";

import Theme from "@/structs/Theme";


defineProps({
  themes: {
    type: Array,
    default: Theme,
    required: true
  }
})

function Dummy() {console.log("Dummy log") }
</script>


<style lang="scss">

.theme {
  display: flex;
  flex-direction: column;

  &__title {
    font-weight: 500;
  }
  &__theme-data{
    opacity: 50%;
    font-size: .75rem;
  }
  &__post-count{}
  &__participant-count{}
}

</style>