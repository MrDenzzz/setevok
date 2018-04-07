// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'vue-awesome/icons/flag'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import VModal from 'vue-js-modal'
import VueClip from "vue-clip";


import {store} from './store.js'

Vue.use(VModal);
Vue.use(VueClip);



Vue.config.productionTip = false
Vue.component('icon', Icon)

export default{
  components:{
    Icon
  }
}
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
  
})
