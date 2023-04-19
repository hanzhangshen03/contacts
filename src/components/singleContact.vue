<template>
  <router-link :to="{name: 'contactDetails', params: {id: contact.id}}">
    <h2>{{ contact.name }}</h2>
  </router-link>
</template>

<script>
export default {
  props: ['contact'],

}
</script>
