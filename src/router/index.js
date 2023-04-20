import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import contactDetails from '../views/contactDetails'
import addContact from '../views/addContact'
import editContact from '../views/editContact'

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
  },
  {
    path: '/contacts/:id/edit',
    name: 'editContact',
    component: editContact,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
