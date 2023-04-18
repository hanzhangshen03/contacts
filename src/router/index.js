import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import contactDetails from '../views/contactDetails'
import addContact from '../views/addContact'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contacts/:id',
    name: 'contactDetails',
    component: contactDetails,
    props: true
  },
  {
    path: '/addContact',
    name: 'addContact',
    component: addContact,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
