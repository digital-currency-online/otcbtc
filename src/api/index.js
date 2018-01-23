import Vue from 'Vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default {
  signUp: function (data) {
    return Vue.axios.post('/signUp', data)
  }
}
