<template>
  <section class="contacts">
    <h1 class="sidebar__title">
      Contacts
    </h1>

    <div class="contact"
         v-for="contact in contacts">
      <p class="contact__name">{{ contact.title }}</p>
      <p class="contact__email">{{ contact.address }}</p>
    </div>
  </section>
</template>


<script setup>
  import Contact from "@/structs/Contact";

  defineProps({
    contacts: {
      type: Array,
      default: Contact,
      required: true
    },
  })
</script>


<style lang="scss">

.contact {
  &s {
    display: flex;
    flex-direction: column;
    gap: .75rem;

    opacity: 50%;
  }

  padding: .25rem;

  &__name  { }
  &__email { }
}

</style>