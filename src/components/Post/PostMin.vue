<template>
  <a href="#" class="post_mini">
    <header class="post__header">
      <UserAccount :user-data=data.author />

      <SolidButton class="post_mini__btn" @click="Dummy">
        <IconPlus/>
      </SolidButton>
    </header>

    <div class="post__media-container">
      <div class="post__media rect"
           v-for="file in data.media">
        <img :src=file alt="ERROR">
      </div>
    </div>
  </a>
</template>


<script setup>
import Post from "@/structs/Post";
import IconStars from "@/icons/IconStars.vue";
import IconPlus from "@/icons/IconPlus.vue";
import SolidButton from "@/components/form/buttons/PrimaryBtn.vue";
import UserAccount from "@/components/user/UserAccount.vue";

defineProps({
  data: {
    type: Post,
    required: true
  }
})

function Dummy() {console.log("Dummy log") }
</script>


<style lang="scss">
.post__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.post_mini {
  display: flex;
  flex-direction: column;
  gap: .5rem;

  &__btn {
    font-size: .75rem;
  }
}
</style>