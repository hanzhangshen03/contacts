<template>
  <div v-if="error">
    <h1>{{ error }}</h1>
  </div>
  <div v-if="contact">
    <h1>{{ contact.name }}</h1>
    <h2>{{ contact.handPhoneNumber }}</h2>
    <h2>{{ contact.email }}</h2>
    <button @click="deleteContact">删除</button>
  </div>
  <div v-else>
    <h2>Loading...</h2>
  </div>
</template>

<script>
import getContact from '../composables/getContact.js'
import { useRouter, useRoute} from 'vue-router'
export default {
    props: ['id'],
    setup(props) {
        const router = useRouter()
        const {contact, error, load} = getContact(props.id)
        load()
        const deleteContact = () => {
            fetch('http://localhost:3000/contacts/' + props.id, {
            method: 'delete',
          })
          router.push({path: '/'})
        }
        return {contact, error, deleteContact}
    }
}
</script>

<style>

</style>