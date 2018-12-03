import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false

//export const eventBus = new Vue() (형제끼리 통신하기 위해 간단정의) 아래는 구체적으로
export const eventBus = new Vue({
  methods: {
    userWasEdited(date) {
      this.$emit('userWasEdited', date)
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
