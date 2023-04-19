<template>
  <a-affix>
    <a-page-header
      style="font-weight: bold"
      title="通讯录"       
      id="header" />
  </a-affix>

  <searchBar />

  <div :style="{background, padding: '24px', minHeight: '500px' }">
    <div v-if="contacts.length">
      <contactList :contacts="contacts" :inputName="inputName"/>
    </div>

    <div style="text-align: right; padding: 20px 5px 0 0;">
      <addButton />
    </div>
  </div>
  <a-layout-footer style="text-align: center">
    Ant Design ©2018 Created by Ant UED
  </a-layout-footer>
</template>

<script>
// @ is an alias to /src
import contactList from '@/components/contactList.vue'
import getContacts from '@/composables/getContacts'
import addContact from './addContact.vue'
import { ref } from '@vue/reactivity'
import searchBar from '@/components/searchBar.vue'
import addButton from '@/components/addButton.vue'

export default {
  name: 'HomeView',

  components: {
    contactList,
    addContact,
    searchBar,
    addButton
},

  setup() {
    const {contacts, error, load} = getContacts()
    load()
    const inputName = ref('')
    return {
      contacts,
      error,
      inputName
    }
  }
}
</script>

<style>
.layout {
    font-family: 'Times New Roman', Times, serif;
  }
#header {
  background-color: white;
  padding: 20px 15px 20px;
}
</style>