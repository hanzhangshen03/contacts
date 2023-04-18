<template>
  <div v-for="contact in contacts" :key="contact.id">
    <singleContact v-if="contact.name.includes(inputName)" :contact="contact"/>
  </div>
</template>

<script>
import singleContact from './singleContact.vue'
export default {
  props: ['contacts', 'inputName'],
  components: { singleContact
  }
}
</script>

<style>

</style>