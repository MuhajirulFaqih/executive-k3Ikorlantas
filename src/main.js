import Vue from 'vue'
import App from './App.vue'

require('./bootstrap.js')

import DatePicker from 'vue2-datepicker'
import BootstrapVue from 'bootstrap-vue'
import PhosporIcon from 'phosphor-vue'
import PerfectScrollbar from 'vue2-perfect-scrollbar'

// Style 
import './scss/app.scss' 
import 'vue2-datepicker/index.css'; 
import 'vue2-datepicker/locale/id'; 

//Router
import router from './router'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(DatePicker)
Vue.use(PhosporIcon)
Vue.use(PerfectScrollbar)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
