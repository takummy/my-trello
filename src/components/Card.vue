<template>
  <div class="card">
    <div class="close-button" @click="removeCardFormList">
      ×
    </div>
    <div class="body">
      {{ body }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    body: {
      type: String,
      required: true
    },
    listIndex: {
      type: Number,
      required: true
    },
    cardIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    removeCardFormList() {
      if(confirm('本当にこのカードを削除しますか？')) {
        this.$store.dispatch('removeCardFormList', { cardIndex: this.cardIndex, listIndex: this.listIndex })
      }
    }
  }
}
</script>