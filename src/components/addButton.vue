<template>
  <a-affix :offset-bottom="20">
    <a-button type="primary" shape="round" :size="size" >
      <router-link :to="{name: 'addContact'}">添加</router-link>
    </a-button>
  </a-affix>
</template>

<script>
export default {

}
</script>