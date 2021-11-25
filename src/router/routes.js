
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => 
      import('pages/Index.vue'), name: "Home" },

      { path: '/find', component: () => 
      import('pages/find.vue'), name: "Find Therapists" },
      
      { path: '/account', component: () => 
      import('pages/account.vue'), name: "Account Settings" },

      { path: '/test', component: () => 
      import('pages/test.vue'), name: "Depression Test" }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
