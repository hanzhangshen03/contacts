<template>
  <a-affix :offset-top="70">
    <a-input v-model:value="this.$parent.inputName" placeholder="搜索联系人" id="searchBar"/>
  </a-affix>
</template>

<style>
#searchBar {
  border-radius: 10px;
}
</style>