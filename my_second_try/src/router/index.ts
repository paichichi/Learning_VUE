import { createRouter, createWebHistory } from 'vue-router'
import one from '../views/OneView.vue'
import two from '../views/TwoView.vue'
import three from '../views/ThreeView.vue'
import four from '../views/FourView.vue'
import five from '../views/FiveView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'function-one',
      component: one
    },
    {
      path: '/two',
      name: 'function-two',
      component: two
    },
    {
      path: '/three',
      name: 'function-three',
      component: three
    },
    {
      path: '/four',
      name: 'function-four',
      component: four
    },
    {
      path: '/five',
      name: 'function-five',
      component: five
    }
  ]
})

export default router
