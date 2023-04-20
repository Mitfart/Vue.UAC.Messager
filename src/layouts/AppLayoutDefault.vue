<template>
  <main class="main">
    <div class="container main__container">
      <slot/>
    </div>
  </main>
</template>


<script setup>
</script>


<style scoped lang="scss">
.main {
  margin: auto;

  &__container {
    display: flex;
    gap: 1rem;
    padding: 1rem;
  }
}
</style>