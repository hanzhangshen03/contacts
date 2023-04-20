<template>

  <div v-if="contact">
    <a-page-header
      style="font-weight: bold;"
      :title=contact.name
      @back="() => $router.go(-1)"
    />

    <div style="text-align: center;">
      <a-image
        :width="200"
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
    </div>

    <a-descriptions bordered>
      <a-descriptions-item label="手机">{{ contact.handPhoneNumber }}</a-descriptions-item>
      <a-descriptions-item label="邮箱">{{ contact.email }}</a-descriptions-item>
    </a-descriptions>
      
    <div style="text-align: right; padding: 10px 10px; ">
      <a-button type="primary" shape="round" :size="size" style="margin-right: 10px;">
        <router-link :to="{name: 'editContact', params: {id: contact.id}, query: {name: contact.name, handPhoneNumber:contact.handPhoneNumber, email:contact.email}}">编辑</router-link>
      </a-button>
      <a-button type="primary" shape="round" :size="size" @click="deleteContact">删除</a-button>
    </div>

  </div>
</template>

<script>
import {useRouter} from 'vue-router'
import getContact from '@/composables/getContact'
import { AntDesignOutlined } from '@ant-design/icons-vue';

export default {
  props: ['id'],

  components: {
    AntDesignOutlined
  },

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
    
    return {
      contact,
      error,
      deleteContact
    }
  }
}
</script>
