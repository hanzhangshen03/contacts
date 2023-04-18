<template>
  <form @submit="handleSubmit">
    <label>姓名</label>
    <input type="text" required v-model="name">
    <label>电话</label>
    <input type="text" required v-model="handPhoneNumber">
    <label>电子邮箱</label>
    <input type="email" required v-model="email">
    <button>提交</button>
  </form>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
export default {
  data() {
    return {
      name: '',
      handPhoneNumber: '',
      email: ''
    }
  },
  methods: {
    handleSubmit() {
      const { v4: uuidv4 } = require('uuid');
      var contact = {"id": uuidv4(), "name": this.name, "handPhoneNumber": this.handPhoneNumber, "email": this.email}
      fetch('http://localhost:3000/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contact)
      })
    .catch(err => console.log(err))
    this.$router.push({name: 'home'})
    }
  }
}
</script>

<style>

</style>