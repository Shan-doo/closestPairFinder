import Vue from 'vue'
import VeeValidate from 'vee-validate'
import VTooltip from 'v-tooltip'

import App from './App.vue'

import Form from './components/Form.vue'
import CoordSys from './components/CoordSys.vue'
import Point from './components/Point.vue'
import Notification from './components/Notification.vue'
import Display from './components/Display.vue'


Vue.use(VeeValidate)
Vue.use(VTooltip)

Vue.component('app-form', Form)
Vue.component('app-coordSys', CoordSys)
Vue.component('app-point', Point)
Vue.component('app-notification', Notification)
Vue.component('app-display', Display)

new Vue({
  el: '#app',
  render: h => h(App)
})
