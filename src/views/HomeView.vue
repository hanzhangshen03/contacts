<template>
  <h1>通讯录</h1>
  <div>
    <input type="text" placeholder="搜索联系人" v-model="inputName">
    <!-- <searchBar /> -->
  </div>
  <div v-if="contacts.length">
    <contactList :contacts="contacts" :inputName="inputName"/>
  </div>
  <div v-else>
    <h2>Loading...</h2>
  </div>
  <div>
    <router-link :to="{name: 'addContact'}">
      添加
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import contactList from '@/components/contactList.vue'
import getContacts from '@/composables/getContacts'
import addContact from './addContact.vue'
import { ref } from '@vue/reactivity'
import searchBar from '@/components/searchBar.vue'


export default {
  name: 'HomeView',
  components: {
    contactList,
    addContact,
    searchBar
},
  setup() {
    const {contacts, error, load} = getContacts()
    load()
    const inputName = ref('')
    return {contacts, error, inputName}
  }
}
</script>

<style>

</style>
