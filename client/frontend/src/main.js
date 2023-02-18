import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
Vue.config.productionTip = false 
// import Create from './components/AddProduct.vue'
// import Edit from './components/EditProduct.vue'
// import Index from './components/ProductList.vue'

// const routes = [
//     {
//         name: 'Create',
//         path: '/create',
//         component: Create
//     },
//     {
//         name: 'Edit',
//         path: '/edit/:id',
//         component: Edit
//     },
//     {
//         name: 'Index',
//         path: '/',
//         component: Index
//     },
// ];

// const routers = new VueRouter ({mode: 'history', routes: routes})

// new Vue ({
//     routers,
//     render: h =>(App),
// }).$mount('#app')

