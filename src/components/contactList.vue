<template>
  <a-list item-layout="horizontal" :data-source="contacts" style="bordered: true">
    <template #renderItem="{ item }">
      <a-list-item v-if="item.name.includes(inputName)">
        <a-list-item-meta :description=item.handPhoneNumber>
          <template #title>
            <singleContact :contact="item"/>
          </template>
          <template #avatar>
            <a-avatar />
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>
</template>

<script>
import singleContact from './singleContact.vue'

export default {
  props: ['contacts', 'inputName'],
  components: { singleContact
  }
}
</script>
