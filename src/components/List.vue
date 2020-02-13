<template>
  <div class="list">
    <div class="listheader">
      <div class="list-title">{{ title }}</div>
      <p class="list-counter">total: {{ totalCardInList }}</p>
      <div class="deletelist" @click="removeList">×</div>
    </div>
    <card v-for="(item, index) in cards"
          :body="item.body"
          :key="item.id"
          :cardIndex="index"
          :listIndex="listIndex"
    />
     <card-add :listIndex="listIndex" />
  </div>
</template>
<script>
import CardAdd from './CardAdd'
import Card from './Card'

export default {
  components: {
    CardAdd,
    Card
  },
  props: {
    title: {
      type: String,
      required: true
    },
    cards: {
      type: Array,
      required: true
    },
    listIndex: {
      type: Number,
      required: true
    }
  },
  computed: {
    totalCardInList() {
      return this.cards.length
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