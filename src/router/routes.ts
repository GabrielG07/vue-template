import type { RouteRecordRaw } from 'vue-router'

import Default from '@/layouts/Default.vue'
import Characters from '@/views/Characters.vue'

const routerOptions: RouteRecordRaw[] = [
  {
    path: '/',
    component: Default,
    children: [
      {
        path: '',
        name: 'Characters',
        component: Characters,
        meta: {
          title: 'Characters'
        }
      }
    ]

  }
]

export default routerOptions
