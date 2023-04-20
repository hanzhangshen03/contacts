<template>
  <a-page-header
    style="font-weight: bold;"
    title="编辑联系人"
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
    <a-form-item :name="['user', 'handPhoneNumber']" label="手机" :rules="[{pattern: /^1[3-9][0-9]{9}$/, message: '请输入正确的手机号'}]">
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
import { reactive} from 'vue';
import { useRoute, useRouter} from 'vue-router'

export default {
  props: ['id'],
  setup(props) {
    const route = useRoute()
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
      required: '请填写${label}',
      types: {
        email: '请填写正确的邮箱地址',
      }
    };

    const formState = reactive({
      user: {
        name: route.query.name,
        handPhoneNumber: route.query.handPhoneNumber,
        email: route.query.email,
      },
    });

    const onFinish = () => {
      var contact = {"name": formState.user.name, "handPhoneNumber": formState.user.handPhoneNumber, "email": formState.user.email}
      fetch('http://localhost:3000/contacts/' + route.params.id, {
        method: 'PUT',
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
};
</script>

<style>
#addForm {
  padding: 30px 25px;
}
</style>