function page (path) {
  return () => import(/* webpackChunkName: '' */ `~/pages/${path}`).then(m => m.default || m)
}

export default [
  { path: '/home', name: 'home', component: page('home.vue') },

  { path: '/', name: 'login', component: page('auth/login.vue') },

  { path: '*', component: page('errors/404.vue') }
]
