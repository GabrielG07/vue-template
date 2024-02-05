import { createRouter, createWebHistory } from 'vue-router'
import routerOptions from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes: routerOptions
})

router.afterEach(to => {
  const DEFAULT_TITLE = 'Rick and Morty'
  document.title = (to.meta.title as string) ?? DEFAULT_TITLE
})
export default router
