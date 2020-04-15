// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'vant/lib/index.css'
import { Checkbox, CheckboxGroup, Toast, Search, Swipe, SwipeItem,DropdownMenu, DropdownItem,Loading,Popup} from 'vant';
import VideoPlayer from 'vue-video-player'

require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')

Vue.use(VideoPlayer)

Vue.use(Checkbox);
Vue.use(CheckboxGroup);

Vue.config.productionTip = false
Vue.use(Checkbox).use(CheckboxGroup).use(Toast).use(Loading).use(Search).use(Swipe).use(SwipeItem).use(DropdownMenu).use(DropdownItem)
Vue.use(Popup);
// import Vconsole from 'vconsole'
// let vConsole = new Vconsole()
// Vue.use(vConsole)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
