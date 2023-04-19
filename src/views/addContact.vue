<template>
  <a-page-header
    style="font-weight: bold;"
    title="添加联系人"
    @back="() => $router.go(-1)"/>

  <a-form
    :model="formState"
    v-bind="layout"
    id="addForm"
    :validate-messages="validateMessages"
    @finish="onFinish"
  >
    <a-form-item :name="['user', 'name']" label="姓名" :rules="[{ required: true }]">
      <a-input v-model:value="formState.user.name" />
    </a-form-item>
    <a-form-item :name="['user', 'handPhoneNumber']" label="手机">
      <a-input v-model:value="formState.user.handPhoneNumber" />
    </a-form-item>
    <a-form-item :name="['user', 'email']" label="邮箱" :rules="[{ type: 'email' }]">
      <a-input v-model:value="formState.user.email" />
    </a-form-item>
    <a-form-item :wrapper-col="{ ...layout.wrapperCol }">
      <a-button type="primary" html-type="submit" shape="round">提交</a-button>
    </a-form-item>
  </a-form>

</template>

<script>

import { defineComponent, reactive} from 'vue';
import { useRouter} from 'vue-router'
import { v4 as uuidv4 } from 'uuid';

export default defineComponent({
  setup() {
    //functions of form
    const router = useRouter()
    const layout = {
      labelCol: {
        span: 5,
      },
      wrapperCol: {
        span: 10,
      },
    };
    const validateMessages = {
      required: '${label} is required!',
      types: {
        email: '${label} is not a valid email!',
      }
    };
    const formState = reactive({
      user: {
        name: '',
        handPhoneNumber: '',
        email: '',
      },
    });

    const onFinish = values => {
      const { v4: uuidv4 } = require('uuid');
      var contact = {"id": uuidv4(), "name": formState.user.name, "handPhoneNumber": formState.user.handPhoneNumber, "email": formState.user.email}
      fetch('http://localhost:3000/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contact)
      })
      .catch(err => console.log(err))
      router.push({path: '/'})
    };

    return {
      formState,
      onFinish,
      layout,
      validateMessages,
    };
  },
});
</script>

<style>
#addForm {
  padding: 30px 25px;
}
</style>