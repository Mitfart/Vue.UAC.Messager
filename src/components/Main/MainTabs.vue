<template>
  <div class="block">
    <ul class="tabs">
      <RouterLink
          v-for="(tab, i) in tabs"
          :key="i"
          :to="tab.link"
          class="tab"
          :class = "(i === activeTabIndex) ? 'tab_active' : ''">
        {{ tab.title }}
      </RouterLink>
    </ul>
  </div>
</template>

<script setup>
import Tab from "@/structs/Tab";

defineProps({
  tabs: {
    type: Array,
    default: Tab,
    required: true
  },
  activeTabIndex: {
    type: Number,
    required: true
  }
})
</script>

<style lang="scss">
@use "@/assets/scss/_vars.scss";

.tab {
  color: vars.$c-second;
  opacity: 50%;
  position: relative;
  font-weight: 500;

  &s {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  &:after {
    content: '';
    width: 0;
    height: .25rem;
    background-color: vars.$c-primal;
    border-radius: 1000rem;

    position: absolute;
    top: 125%;
    left: 50%;
    transform: translateX(-50%);

    transition: inherit;
  }


  &:hover {
    opacity: 75%;
    &:after {
      width: 15%;
    }
  }

  &_active {
    opacity: 100%;
    &:after {
      width: 25%;
    }

    &:hover {
      opacity: 75%;
      &:after {
        width: 35%;
      }
    }
  }
}

</style>