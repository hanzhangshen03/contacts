<template>
    <a-input v-model:value="value" placeholder="搜索联系人"/>
  </template>

  <script>
  import { defineComponent, ref } from 'vue';
  export default defineComponent({
    setup() {
      const value = ref('');
      return {
        value,
      };
    },
  });
  </script>