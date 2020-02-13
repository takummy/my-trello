<template>
  <div class="list">
    <div class="listheader">
      <div class="list-title">{{ title }}</div>
      <div class="deletelist" @click="removeList">×</div>
    </div>
     <card-add :listIndex="listIndex" />
  </div>
</template>
<script>
import CardAdd from './CardAdd'

export default {
  components: {
    CardAdd
  },
  props: {
    title: {
      type: String,
      required: true
    },
    listIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    removeList: function() {
      if(confirm('本当にこのリストを削除しますか？')) {
        this.$store.dispatch('removeList', { listIndex: this.listIndex })
      }
    }
  }
}
</script>