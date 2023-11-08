import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMeta from 'vue-meta'
import Axios from 'axios'
import clientsConf from './clients/index'
// import './registerServiceWorker'
import VueSocialSharing from 'vue-social-sharing'

Vue.use(VueSocialSharing);

Vue.config.productionTip = false

Vue.prototype.$axios = Axios
Vue.prototype.$config = clientsConf[process.env.VUE_APP_CLIENT].conf



Vue.filter('columns', (v) => {
  let out = `col-xs-12 col-sm-12 col-lg-${Math.floor(12/parseInt(v))} portfolio-item`
  return out
})

Vue.component('v-style', clientsConf[process.env.VUE_APP_CLIENT].commonStyle)

var currentLocation = window.location;

var url = currentLocation.hostname  + currentLocation.pathname

var urlParams = new URLSearchParams(window.location.search);
if ( urlParams.has('i') ){
  var pagina = "&i=" + urlParams.get('i') 
  url += pagina
}


var urlsLegales = [
                    "/nota-legal",
                    "/politica-de-privacidad",
                    "/politica-de-cookies",
                    "/declaracion-de-accesibilidad"
                  ]


clientsConf[process.env.VUE_APP_CLIENT].getWeb(url)
.then(d => {

    document.querySelector('.loader').remove() 
    
    Vue.prototype.$content = d.data
    if( urlsLegales.includes(currentLocation.pathname)){
       Vue.prototype.$content.individual = true    
       Vue.prototype.$content.post_type = currentLocation.pathname.replace("/","")
    }
    
    Vue.use(VueMeta, {
      refreshOnceOnNavigation: true
    })
    
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app', true)

  
})


