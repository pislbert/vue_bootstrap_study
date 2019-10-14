import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// import $ from 'jquery'
// import 'jquery'
// import CodeMirror from 'codemirror'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"


new Vue({
  render: h => h(App),
}).$mount('#app')
