  
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Bio from './views/Bio.vue'
import CV from './views/CV.vue'
import Blog from './views/Blog.vue'
import Alice from './views/Alice.vue' 
import Human from './views/Human.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/bio',
            name: 'bio',
            component: Bio
        },
        {
            path: '/CV',
            name: 'CV',
            component: CV
        },
        {
            path: '/blog',
            name: 'blog',
            component: Blog
        },
        {
            path: '/Alice',
            name: 'Alice',
            component: Alice
        },
        {
            path: '/Human',
            name: 'Human',
            component: Human
        }
    ]
})