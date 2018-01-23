import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/homepage'
import SignIn from '@/components/signIn/signIn'
import SignUp from '@/components/signUp/signUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/sign_in',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/sign_up',
      name: 'SignUp',
      component: SignUp
    }
  ]
})
