<template>
  <router-link :to="{name: 'contactDetails', params: {id: contact.id}}">
    <h1>{{ contact.name }}</h1>
  </router-link>
</template>

<script>
export default {
  props: ['contact'],

}
</script>

<style>

</style>