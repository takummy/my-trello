import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// storeに保存されているリストを取得
const savedLists = localStorage.getItem('trello-lists')

const store =  new Vuex.Store({
  state: {
    // storeにリストがなければデフォルトを設定
    lists: savedLists ? JSON.parse(savedLists) : [
      {
        title: 'Backlog',
        cards: [
          { body: 'English'},
          { body: 'Mathmatics'}
        ]
      },
      {
        title: 'Todo',
        cards: [
          { body: 'Science' }
        ]
      },
      {
        title: 'Doing',
        cards: []
      }
    ]
  },
  mutations: {
    addlist(state, payload) {
      state.lists.push({ title: payload.title, cards: []})
    },
    removelist(state, payload) {
      state.lists.splice(payload.listIndex, 1)
    }
  },
  actions: {
    addlist(context, payload) {
      context.commit('addlist', payload)
    },
    removeList(context, payload) {
      context.commit('removelist', payload)
    }
  },
  modules: {
  }
})

// subscribeはストアのインスタンスメソッドで、全てのmutationの後に呼ばれ
// key: valueでlocalStorageへ保存
// JSON.stringify(保存するデータ)でJSON形式に変換
store.subscribe((mutation, state) => {
  localStorage.setItem('trello-lists', JSON.stringify(state.lists))
})

export default store